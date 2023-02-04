import React from 'react';
import { iconValid } from '../../helpers';
import { Spacer } from '../Spacer/Spacer';
import { StyledPagination, PageNum, Marker, EndButton } from './styles';

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
        onClick={() => i && changePage(i)}
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
    const renderContent = [];

    for (let i = 1; i <= total; i++) {
      let workingPage = i;

      if (truncateLimit && i > truncateLimit) {
        renderContent.push(pageElement(0, '...'));
        renderContent.push(pageElement(total, pageIcon ? <i className={icon(pageIcon, 'circle')} /> : total));
        break;
      }

      if (pageIcon) {
        workingPage = <i className={icon(pageIcon, 'circle')} />
      }

      renderContent.push(pageElement(i, workingPage));
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