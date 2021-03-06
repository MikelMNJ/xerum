import React, { Fragment, useState, useEffect } from 'react';
import { tableCode } from './codeSamples';
import { tableTable } from './tables';
import { columnLayout } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import SampleBox from 'components/SampleBox/SampleBox';
import Table from 'components/Table/Table';
import colors from 'theme/colors.scss';


const customGrid = `.yourClassName li {
  grid-template-columns: 10rem 1fr 7rem !important;
}

/* ========== Media Query ========== */
@media screen and (max-width: 520px) {
  .yourClassName li {
    grid-template-columns: 1fr !important;
  }
}`;

const tableContent = setRowClicked => ({
  headers: [ "Bird Name", "Flight Speed (MPH)" ],
  rows: [
    {
      td1: "Sparrow",
      td2: null,
      onClick: () => setRowClicked("Sparrow row clicked."),
      label: "Small",
    },
    {
      td1: "Golden Eagle",
      td2: 200,
      onClick: () => setRowClicked("Eagle row clicked."),
      label: "Large",
    },
    {
      td1: "Raven",
      td2: 50,
      onClick: () => setRowClicked("Raven row clicked."),
      label: "Medium",
    },
  ]
});

const defaultCallback =
  <Fragment>
    <span className="headerInstructions">Use headers or drag rows to sort &mdash;</span>
    <span className="dragInstructions">Drag row to sort or</span> click row for callback.
  </Fragment>;

const SectionTable = props => {
  const [ rowClicked, setRowClicked ] = useState(defaultCallback);
  const [ content, setContent ] = useState(tableContent(setRowClicked));

  const receivedArr = sortedArr => {
    setContent({ ...content, rows: sortedArr });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setRowClicked(defaultCallback);
    }, 3000);

    return () => clearTimeout(timer);
  }, [rowClicked]);

  return (
    <Fragment>
      <div>
        <h3 id="table">{`<Table />`}</h3>

        <Table content={tableTable} className="xTable" columnLayout={columnLayout} />

        <p>*Required Prop.</p>

        <strong>Note</strong>: Add an <strong>onClick</strong> function to
        your row object; {codeSnippet("rows: [{ ...tData, onClick }]")} or a&nbsp;
        <strong>label</strong> key/value for labels; {codeSnippet('rows: [{ ...tData, label }]')}&nbsp;
        &mdash; ideal labels are under six characters.

        <p />

        <strong>Tip</strong>: You can target the following CSS heirarchy for custom
        styling: <br />
        {codeSnippet(".yourClassName {}", false, "css")}<br />
        {codeSnippet(".yourClassName .header {}", false, "css")}<br />
        {codeSnippet(".yourClassName li {}", false, "css")}<br />

        <p />
        Your custom <i>className</i> will apply to the&nbsp;
        {codeSnippet("<Table />")} container by default.
        <p />
      </div>

      <SampleBox name="Table" code={tableCode}>
        <Table
          content={content}
          defaultSort={content.headers?.[1]}
          sortable={receivedArr}
          draggable={receivedArr}
        />

        <strong style={{ color: colors.blue }} className="fullWidth center">
          {rowClicked}
        </strong>
      </SampleBox>
    </Fragment>
  );
};

export default SectionTable;