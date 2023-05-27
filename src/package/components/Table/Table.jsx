import React, { useState } from 'react';
import { buildRows, buildHeaders } from '../../helpers';
import { StyledTable } from './styles';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';

const Table = props => {
  const {
    theme,
    selectedTheme,
    content,
    sortable,
    defaultSort,
    draggable,
    dragIcon,
    columnLayout,
    headerTextColor,
    headerBGColor,
    labelTextColor,
    labelBGColor,
    evenTextColor,
    evenBGColor,
    evenHoverTextColor,
    evenHoverBGColor,
    oddTextColor,
    oddBGColor,
    oddHoverTextColor,
    oddHoverBGColor,
  } = props;

  const [ ascending, setAscending ] = useState(!sortable);
  const [ sortedColumn, setSortedColumn ] = useState(sortable && defaultSort);
  const args = {
    theme,
    selectedTheme,
    content,
    sortable,
    defaultSort,
    draggable,
    dragIcon,
    columnLayout,
    headerTextColor,
    headerBGColor,
    labelTextColor,
    labelBGColor,
    evenTextColor,
    evenBGColor,
    evenHoverTextColor,
    evenHoverBGColor,
    oddTextColor,
    oddBGColor,
    oddHoverTextColor,
    oddHoverBGColor,

    ascending, setAscending,
    sortedColumn,
    setSortedColumn,
  };

  const handleDragEnd = result => {
    if (result.source && result.destination) {
      const { source: { index: fromIndex }, destination: { index: toIndex } } = result;

      if (fromIndex !== toIndex) {
        const workingArr = [ ...content.rows ];
        const [ reordered ] = workingArr.splice(fromIndex, 1);
        workingArr.splice(toIndex, 0, reordered);

        if (sortedColumn) setSortedColumn(null);
        draggable(workingArr);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='rows'>
        {provided => (
          <StyledTable
            $theme={theme}
            $selectedTheme={selectedTheme}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {buildHeaders(args)}
            {content && buildRows(args)}
            {provided.placeholder}
          </StyledTable>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export { Table };