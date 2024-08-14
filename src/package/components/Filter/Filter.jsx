import React, { useState, useEffect, useCallback, useRef } from 'react';
import { iconValid, stringToArray, lowercaseArray } from '../../helpers';
import { StyledFilter, Label, Input, Icon, ClearIcon } from './styles';
import _ from 'lodash';

const Filter = props => {
  const {
    theme,
    selectedTheme,
    data,
    include,
    callback,
    placeholder,
    noIcon,
    pill,
    round,
    placeholderColor,
    inputIcon,
    inputIconHeight,
    inputIconSize,
    inputTextColor,
    inputBGColor,
    inputIconColor,
    clearIcon,
    clearIconHeight,
    clearIconSize,
    clearIconColor,
    noClearIcon,
    disabled,
    fontFamily,
    borderColor,
    borderRadius,
    borderSize,
    bottomBorder,
    focusColor,
    textSize,
    mobileSize,
    tabletSize,
  } = props;

  const [ filterValue, setFilterValue ] = useState('');
  const inputRef = useRef();
  const dataRef = useRef();

  const digDeep = useCallback((path, value) => {
    let workingVal = value;

    // Gets final value from nested keys.
    nestedCheck: for (let i = 0; i < path.length; i++) {
      const currentPath = path[i];
      const currentData = workingVal?.[currentPath];

      if (currentData && !_.isArray(currentData)) {
        workingVal = currentData;
        continue nestedCheck;
      }

      if (_.isArray(currentData)) {
        const workingArr = currentData.map(item => {
          const subPath = path.slice(1);
          return digDeep(subPath, item);
        });

        workingVal = workingArr.length > 1 ? workingArr : workingArr[0];
        continue nestedCheck;
      }
    }

    return workingVal;
  }, []);

  const getValues = useCallback(objPath => {
    const firstKey = objPath[0];
    const originalVal = data[firstKey];
    let finalArr = digDeep(objPath, { ...originalVal });
    const isComplex = arr => _.every(arr, _.isObject);

    if (_.isArray(originalVal) && isComplex(originalVal)) {
      const simplifiedArr = originalVal.map(item => {
        const subPath = objPath.slice(1);
        return digDeep(subPath, item);
      });

      finalArr = simplifiedArr.flat();
    }

    if (isComplex(finalArr) && _.isArray(finalArr)) {
      // From array of objects...
      const simplifiedArr = finalArr?.map(obj => {
        const subPath = objPath.slice(1);
        return digDeep(subPath, obj);
      });

      return simplifiedArr.flat();
    }

    // From simple object...
    return finalArr || [];
  }, [ data, digDeep ]);

  const getFilteredResults = useCallback(filterValue => {
    if (data && !_.isEmpty(include)) {
      const allDataFromLocations = include.map(location => {
        if (location.includes('.')) {
          // Objects...
          const objPath = location.split('.');
          return getValues(objPath);
        }

        // Plain strings, numbers or arrays.
        return data[location];
      });

      const userValues = lowercaseArray(stringToArray(filterValue || '').filter((item, index) => {
        if (index === 0 && item === '') return ' ';
        return item;
      }));

      const combinedDataToFilter = [ ...new Set([].concat(...allDataFromLocations)) ];

      const filteredResults = combinedDataToFilter.filter(item => {
        for (let i = 0; i < userValues.length; i++) {
          const isObject = typeof item === 'object';
          const workingItem = typeof item === 'number' ? item.toString() : item;

          if (!isObject && workingItem?.toLowerCase?.().includes(userValues[i])) {
            return item;
          }
        }
      });

      callback?.(filteredResults);
    }
  }, [ data, include, callback, getValues ]);

  useEffect(() => {
    if (!_.isEqual(dataRef.current, data)) {
      dataRef.current = data;
      getFilteredResults();
    }
  }, [ data, getFilteredResults ]);

  return (
    <StyledFilter>
      <Label $theme={theme} $selectedTheme={selectedTheme} $inputIconColor={inputIconColor}>
        {!noIcon && (
          <Icon
            $theme={theme}
            $selectedTheme={selectedTheme}
            $height={inputIconHeight}
            $inputIconColor={inputIconColor || inputTextColor}
            $inputIconSize={inputIconSize}
          >
            {iconValid(inputIcon)
              ? <i className={inputIcon} />
              : inputIcon || <i className='fa-solid fa-filter' />
            }
          </Icon>
        )}

        <Input
          ref={inputRef}
          $theme={theme}
          $selectedTheme={selectedTheme}
          type='text'
          $noIcon={noIcon}
          $pill={pill}
          $round={round}
          $borderColor={borderColor}
          $borderRadius={borderRadius}
          $borderSize={borderSize}
          $bottomBorder={bottomBorder}
          $inputTextColor={inputTextColor}
          $placeholderColor={placeholderColor}
          $inputBGColor={inputBGColor}
          placeholder={placeholder}
          $focusColor={focusColor}
          $fontFamily={fontFamily}
          $textSize={textSize}
          $mobileSize={mobileSize}
          $tabletSize={tabletSize}
          disabled={disabled}
          autoComplete='off'
          defaultValue={filterValue || ''}
          onChange={e => {
            const newValue = e.currentTarget?.value || '';
            setFilterValue(newValue);
            getFilteredResults(newValue);
          }}
        />

        {!noClearIcon && !_.isEmpty(filterValue) && (
          <ClearIcon
            $theme={theme}
            $selectedTheme={selectedTheme}
            $height={clearIconHeight}
            $clearIconColor={clearIconColor || inputTextColor}
            $clearIconSize={clearIconSize}
            onClick={e => {
              e.preventDefault();

              if (inputRef.current) {
                setFilterValue('');
                getFilteredResults();
                inputRef.current.value = '';
              }
            }}
          >
            {iconValid(clearIcon)
              ? <i className={clearIcon} />
              : clearIcon || <i className='fa-solid fa-circle-xmark' />
            }
          </ClearIcon>
        )}
      </Label>
    </StyledFilter>
  );
};

export { Filter };