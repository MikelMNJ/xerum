import React, { Fragment } from "react";
import { aggTimerCode } from './codeSamples';
import { aggTimerTable } from './tables';
import { codeSnippet } from 'helpers/utilityHelpers';
import { columnLayout } from 'helpers/tableHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import AggTimer from 'components/AggTimer/AggTimer';

const SectionAggTimer = props => {
  return (
    <Fragment>
      <div>
        <h2 id="agg-timer">Utility</h2>
        <h3>{`<AggTimer />`}</h3>

        <Table content={aggTimerTable} className="xTable" columnLayout={columnLayout} />
      </div>

      <SampleBox name="AggTimer" code={aggTimerCode}>
        <AggTimer
          details
          timeframe="months"
          aggregate={3}
        />
      </SampleBox>
    </Fragment>
  );
};

export default SectionAggTimer;