import React, { Fragment } from 'react';
import { iconValid } from '../helpers';
import { TRow } from '../components/Table/TRow';
import { TData } from '../components/Table/TData';
import { TDContainer, HeaderItem, Label, Grip, ResponsiveHeader } from '../components/Table/styles';
import { Draggable } from '@hello-pangea/dnd';
import _ from 'lodash';

export const headers = [ 'NAME', 'DESCRIPTION', 'DEFAULT' ];
export const columnLayout = '10rem 1fr 7rem';

const sort = (rows, headerIndex, ascending) => {
  const sorted = rows?.sort((a, b) => {
    const key = Object.keys(a)[headerIndex];
    const val1 = a[key];
    const val2 = b[key];

    if (val1 === null) return 0;
    if (val1 < val2 || val2 === null) return ascending ? -1 : 1;
    if (val1 > val2) return ascending ? 1 : -1;

    return 0;
  });

  return sorted || rows;
};

const hasLabel = rows => rows?.find(obj => Object.keys(obj).includes('label'));

export const buildHeaders = args => {
  const {
    sortable,
    sortedColumn,
    setSortedColumn,
    ascending,
    setAscending,
    draggable,
    content,
    ...rest
  } = args;

  const handleSort = (header, index) => {
    if (sortedColumn !== header) setSortedColumn(header);

    if (sortable) {
      const newArr = sort(content?.rows, index, ascending);
      setAscending(!ascending);
      sortable(newArr);
    }
  };

  const headings = content?.headers?.map((header, index) => (
    <HeaderItem
      key={index}
      sortable={sortable}
      onClick={() => handleSort(header, index)}
    >
      {sortable && header === sortedColumn && (
        <i className={`fa-solid fa-arrow-${ascending ? 'up' : 'down'}`} />
        )} {header}
    </HeaderItem>
  ));

  return (
    <TRow
      header={true}
      headers={content?.headers}
      hasLabel={hasLabel(content?.rows)}
      {...rest}
    >
      {headings}
    </TRow>
  );
};

export const buildRows = args => {
  const {
    theme,
    selectedTheme,
    ascending,
    columnLayout,
    sortedColumn,
    sortable,
    draggable,
    content,
  } = args;

  const index = content?.headers?.indexOf(sortedColumn);

  if (sortable && index !== -1) sort(content?.rows, index, !ascending);

  return content?.rows?.map((obj, index) => (
    <Draggable
      key={index}
      draggableId={index.toString()}
      index={index}
      isDragDisabled={!draggable}
    >
      {(provided, snapshot) => (
        <TRow
          theme={theme}
          selectedTheme={selectedTheme}
          className={draggable || obj.onClick ? 'hover' : ''}
          columnLayout={columnLayout}
          rows={content?.rows}
          headers={content?.headers}
          isDragging={snapshot.isDragging}
          onClick={e => obj.onClick && obj.onClick(e)}
          provided={provided}
          draggable={draggable && true}
          callback={obj.onClick}
          hasLabel={hasLabel(content?.rows)}
          {...args}
        >
          {buildData(obj, args)}
        </TRow>
      )}
    </Draggable>
  ));
};

const buildData = (obj, args) => {
  const {
    theme,
    selectedTheme,
    draggable,
    dragIcon,
    labelTextColor,
    labelBGColor,
    content,
  } = args;
  const { onClick, label, ...rest } = obj;

  return Object.values(rest).map((val, index) => (
    <TDContainer
      theme={theme}
      selectedTheme={selectedTheme}
      key={index}
    >
      {label && index === 0 && (
        <Label
          labelTextColor={labelTextColor}
          labelBGColor={labelBGColor}
        >
          {label}
        </Label>
      )}

      <TData>
        <ResponsiveHeader>
          {_.startCase(content?.headers?.[index]?.toLowerCase?.())}: &nbsp;
        </ResponsiveHeader>

        {val ?? '—'}
      </TData>

      {draggable && index === Object.values(rest).length - 1 && (
        <Grip>
          <i className={iconValid(dragIcon) || 'fa-solid fa-grip-vertical'} />&nbsp;
        </Grip>
      )}
    </TDContainer>
  ));
};