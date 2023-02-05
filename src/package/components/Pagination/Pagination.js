import React from 'react';
import { iconValid } from '../../helpers';
import { Spacer } from '../Spacer/Spacer';
import { StyledPagination, PageNum, Marker, EndButton } from './styles';
import _ from 'lodash';

const Pagination = props => {
  const {
    theme,
    selectedTheme,
    totalPages,
    currentPage,
    onPageChange,
    prevIcon,
    pageIcon,
    nextIcon,
    noMarker,
    markerSpacing,
    markerWidth,
    markerHeight,
    numberSize,
    boldActive,
    truncateLimit,
    endButtons,
    activeColor,
    inactiveColor,
    ...rest
  } = props;

  const page = currentPage || 1;
  const total = totalPages || 1;
  const onFirst = page === 1;
  const onLast = page === total;
  const prev = !onFirst && page - 1;
  const next = !onLast && page + 1;

  const changePage = num => {
    const isDifferent = page !== num;

    if (num && onPageChange && isDifferent) {
      onPageChange(num);
    }
  };

  const icon = (icon, fallback) => (
    iconValid(icon) || `fa-solid fa-${fallback}`
  );

  const pageElement = (i, workingPage) => {
    return (
      <PageNum
        theme={theme}
        selectedTheme={selectedTheme}
        key={i}
        active={i === page}
        numberSize={numberSize}
        boldActive={boldActive}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
        isSpread={_.isString(i)}
        onClick={() => _.isNumber(i) && changePage(i)}
      >
        {workingPage}

        {!noMarker && (
          <Marker
            theme={theme}
            selectedTheme={selectedTheme}
            active={i === page}
            markerSpacing={markerSpacing}
            markerWidth={markerWidth}
            markerHeight={markerHeight}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
          />
        )}
      </PageNum>
    );
  };

  const pageNum = () => {
    const first = pageElement(1, pageIcon ? <i className={icon(pageIcon, 'circle')} /> : 1);
    const last = pageElement(total, pageIcon ? <i className={icon(pageIcon, 'circle')} /> : total);
    const renderContent = [];

    for (let i = 1; i <= total; i++) {
      let workingPage = i;

      if (pageIcon) workingPage = <i className={icon(pageIcon, 'circle')} />;
      renderContent.push(pageElement(i, workingPage));
    }

    if (truncateLimit < total - 1) {
      if (page <= truncateLimit) {
        renderContent.splice(truncateLimit, total - truncateLimit);
        return [ ...renderContent, pageElement('endSpread', '...'), last ];
      }

      if (page > truncateLimit && page <= total - truncateLimit) {
        renderContent.splice(0, page - truncateLimit + 2);
        renderContent.splice(truncateLimit, total - page);
        return [ first, pageElement('startSpread', '...'), ...renderContent, pageElement('endSpread', '...'), last ];
      }

      if (page > total - truncateLimit) {
        renderContent.splice(0, total - truncateLimit);
        return [ first, pageElement('startSpread', '...'), ...renderContent ];
      }
    }

    return renderContent;
  };

  return (
    <StyledPagination
      theme={theme}
      selectedTheme={selectedTheme}
      {...rest}
    >
      {(endButtons || truncateLimit) && (
        <EndButton
          theme={theme}
          selectedTheme={selectedTheme}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
        >
          <i
            className={`prev ${icon(prevIcon, 'chevron-left')}`}
            onClick={() => changePage(prev)}
          />
          <Spacer size={0.5} across={true} />
        </EndButton>
      )}

      {pageNum()}

      {(endButtons || truncateLimit) && (
        <EndButton
          theme={theme}
          selectedTheme={selectedTheme}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
        >
          <Spacer size={0.5} across={true} />
          <i
            className={`next ${icon(nextIcon, 'chevron-right')}`}
            onClick={() => changePage(next)}
          />
        </EndButton>
      )}
    </StyledPagination>
  );
};

export { Pagination };