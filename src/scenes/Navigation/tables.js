import React, { Fragment } from 'react';
import { headers } from 'helpers/tableHelpers';

export const menuTable = {
  headers,
  rows: [
    {
      tData1: "links",
      tData2: "Array of objects that describes links, sub-menu's etc.",
      tData3: null
    },
    {
      tData1: "openIcon",
      tData2:
        <Fragment>
          Font Awesome i.e. "<strong>fa-solid fa-caret-down</strong>".
        </Fragment>,
      tData3: <i className="fa-solid fa-caret-down" />
    },
    {
      tData1: "closeIcon",
      tData2:
        <Fragment>
          Font Awesome i.e. "<strong>fa-solid fa-caret-right</strong>".
        </Fragment>,
      tData3: <i className="fa-solid fa-caret-right" />
    },
  ],
};

export const paginationTable = {
  headers,
  rows: [
    {
      tData1: "totalPages",
      tData2: "Total page count, as received from your server.",
      tData3: 1
    },
    {
      tData1: "currentPage",
      tData2: "Current page, as received from your server.",
      tData3: 1
    },
    {
      tData1: "onPageChange",
      tData2:
        <Fragment>
          Generic event handler when page number/icons or prev/next buttons
          are clicked. Receives new page number for your API page data request.
        </Fragment>,
      tData3: null
    },
    {
      tData1: "prevIcon",
      tData2:
        <Fragment>
          Font Awesome i.e. "<strong>fa-solid fa-angles-left</strong>".
        </Fragment>,
      tData3: <i className="fa-solid fa-angles-left" />
    },
    {
      tData1: "pageIcon",
      tData2:
        <Fragment>
          Font Awesome i.e. "<strong>fa-solid fa-circle</strong>".
        </Fragment>,
      tData3: <i className="fa-solid fa-circle" />
    },
    {
      tData1: "nextIcon",
      tData2:
        <Fragment>
          Font Awesome i.e. "<strong>fa-solid fa-angles-right</strong>".
        </Fragment>,
      tData3: <i className="fa-solid fa-angles-right" />
    },
  ],
};