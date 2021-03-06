import React, { Fragment } from "react";
import { percentCode } from './codeSamples';
import { percentTable } from './tables';
import { columnLayout } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import Table from 'components/Table/Table';
import SampleBox from 'components/SampleBox/SampleBox';
import Percent from 'components/Percent/Percent';
import colors from 'theme/colors.scss';

const SectionPercent = props => {
  return (
    <Fragment>
      <div>
        <h3 id="percent">{`<Percent />`}</h3>

        <Table content={percentTable} className="xTable" columnLayout={columnLayout} />

        <p />
      </div>

      <SampleBox name="Percent" code={percentCode}>
        <strong>
          <Percent
            current={3483.432}
            total={60}
            positiveColor={colors.blue}
            usePlus
          />
        </strong>
      </SampleBox>
    </Fragment>
  );
};

export default SectionPercent;