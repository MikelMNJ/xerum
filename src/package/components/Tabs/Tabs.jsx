import React, { useCallback, useState, useEffect, useRef } from 'react';
import { StyledTabs, TabSlider, TabNames, Name, TabContent, Content } from './styles';

const Tabs = props => {
  const {
    theme,
    selectedTheme,
    content,
    activeColor,
    activeTextColor,
    inactiveColor,
    inactiveTextColor,
    fontFamily,
    ...rest
  } = props;

  const [ activeTab, setActiveTab ] = useState(content?.[0]?.name);
  const [ posData, setPosData ] = useState({ buffer: 0.5, margin: 0.5 / 2 });

  const slider = useRef();
  const tabNames = useRef();
  const index = content?.findIndex(tab => activeTab === tab.name);

  const posX = useCallback(() => {
    if (slider?.current && tabNames?.current) {
      const sliderWidth = slider.current?.clientWidth / 16;
      const tabNamesHeight = tabNames.current?.clientHeight / 16;
      const posX = sliderWidth * index;
      const posXMargin = posData.buffer * index;
      const updatedPosX = posX + posXMargin + posData.margin;

      setPosData({
        ...posData,
        tabNamesHeight,
        updatedPosX,
      });
    }
  }, [ index, posData ]);

  useEffect(() => {
    if (slider.current && tabNames.current) {
      const resizeObserver = new ResizeObserver(posX);
      resizeObserver.observe(slider.current);
    }
  }, [ activeTab, posX ]);

  const buildTabs = () => (
    <div>
      <TabNames
        ref={tabNames}
        theme={theme}
        selectedTheme={selectedTheme}
        inactiveColor={inactiveColor}
      >
        {content?.map((tab, index) => {
          return (
            <Name
              key={index}
              theme={theme}
              selectedTheme={selectedTheme}
              fontFamily={fontFamily}
              activeTab={activeTab === tab.name}
              inactiveTextColor={inactiveTextColor}
              activeTextColor={activeTextColor}
              onClick={() => activeTab !== tab.name && setActiveTab(tab.name)}
            >
              {tab.name}
            </Name>
          );
        })}
      </TabNames>

      <TabSlider
        ref={slider}
        theme={theme}
        selectedTheme={selectedTheme}
        index={index}
        activeTab={activeTab}
        activeColor={activeColor}
        content={content}
        posData={posData}
      />
    </div>
  );

  const buildContent = () => (
    <TabContent>
      {content?.map((tab, index) => {
        if (tab && activeTab === tab.name) {
          return (
            <Content theme={theme} selectedTheme={selectedTheme} key={index}>
              {tab.content}
            </Content>
          );
        }
      })}
    </TabContent>
  );

  return (
    <StyledTabs {...rest}>
      {buildTabs()}
      {buildContent()}
    </StyledTabs>
  );
};

export { Tabs };