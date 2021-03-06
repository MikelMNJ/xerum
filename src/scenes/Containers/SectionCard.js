import React, { Fragment } from 'react';
import { cardCode } from './codeSamples';
import { cardTable } from './tables';
import { columnLayout } from 'helpers/tableHelpers';
import { codeSnippet } from 'helpers/utilityHelpers';
import SampleBox from 'components/SampleBox/SampleBox';
import Card from 'components/Card/Card';
import Table from 'components/Table/Table';
import thumb from '../../../static/sample_thumb.jpg';

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const SectionCard = props => {

  return (
    <Fragment>
      <div>
        <h3 id="card">{`<Card />`}</h3>

        <Table content={cardTable} className="xTable" columnLayout={columnLayout} />

        <strong>Tip</strong>: You can target the following CSS heirarchy for custom
        styling: <br />
        {codeSnippet(".yourClassName {}", false, "css")}<br />
        {codeSnippet(".yourClassName .image {}", false, "css")}<br />
        {codeSnippet(".yourClassName .text .title {}", false, "css")}<br />
        {codeSnippet(".yourClassName .footer {}", false, "css")}<br />

        <p />
          Your custom <i>className</i> will apply to the&nbsp;
          {codeSnippet("<Card />")} container by default.
        <p />
      </div>

      <SampleBox name="Card" code={cardCode}>
        <p className="fullWidth">
          <strong>Horizontal</strong>:
        </p>

        <Card
          image={thumb}
          title="Card Title..."
          text={text}
          limit={96}
          footer="Image credit: iStock Photo"
          url="https://google.com"
        />

        <p className="fullWidth">
          <strong>Vertical</strong>:
        </p>

        <Card
          image={thumb}
          title="Card Title..."
          text={text}
          limit={96}
          footer="Image credit: iStock Photo"
          url="https://google.com"
          vertical
        />
      </SampleBox>
    </Fragment>
  );
};

export default SectionCard;