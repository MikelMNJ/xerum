import React, { Fragment } from 'react';
import { tabsCode } from './codeSamples';
import { tabsTable } from './tables';
import { columnLayout } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import SampleBox from 'components/SampleBox/SampleBox';
import Tabs from 'components/Tabs/Tabs';
import Table from 'components/Table/Table';

const content = [
  { name: "Tab 1", content: "Content 1" },
  { name: "Tab 2", content: "Content 2" },
  { name: "Tab 3", content: "Content 3" },
];

const SectionTabs = props => {
  return (
    <Fragment>
      <div>
        <h3 id="tabs">{`<Tabs />`}</h3>

        <Table content={tabsTable} className="xTable" columnLayout={columnLayout} />

        <p>*Required prop.</p>

        <strong>Tip</strong>: You can target the following CSS heirarchy for custom
        styling: <br />
        {codeSnippet(".yourClassName {}", false, "css")}<br />
        {codeSnippet(".yourClassName .tabNames {}", false, "css")}<br />
        {codeSnippet(".yourClassName .tabNames .name {}", false, "css")}<br />
        {codeSnippet(".yourClassName .tabNames .name.active {}", false, "css")}<br />
        {codeSnippet(".yourClassName .tabSlider {}", false, "css")}<br />

        <p />
          Your custom <i>className</i> will apply to the&nbsp;
          {codeSnippet("<Tabs />")} container by default.
        <p />
      </div>

      <SampleBox name="Tabs" code={tabsCode}>
        <Tabs content={content} />
      </SampleBox>
    </Fragment>
  );
};

export default SectionTabs;