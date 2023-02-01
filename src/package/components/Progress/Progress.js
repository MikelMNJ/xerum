import React, { useRef, useEffect, useState } from 'react';
import { StyledProgressBar, StyledProgress, ProgressPercent } from './styles';

const buffer = 8;

const Progress = props => {
  const {
    theme,
    selectedTheme,
    color,
    bgColor,
    pctColor,
    noPct,
    fixedPct,
    current,
    total,
    pctSize,
    height,
    ...rest
  } = props;

  const [ transform, setTransform ] = useState(0);

  const progress = +(current) / +(total) * 100;
  const widthRef = useRef();
  const pctRef = useRef();

  const pctBarPos = () => {
    if (!fixedPct) {
      const barWidth = widthRef.current?.clientWidth;
      const pctWidth = pctRef.current?.clientWidth;
      const posX = barWidth >= pctWidth + buffer ? barWidth - pctWidth - buffer : 0;

      setTransform(posX);
    }
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(pctBarPos);
    const elements = [ widthRef.current, pctRef.current ];

    elements.forEach(element => resizeObserver.observe(element));
  }, [ widthRef, pctRef ]);

  return (
    <StyledProgressBar
      theme={theme}
      selectedTheme={selectedTheme}
      bgColor={bgColor}
      noPct={noPct}
      height={height}
      {...rest}
    >
      <StyledProgress
        ref={widthRef}
        theme={theme}
        selectedTheme={selectedTheme}
        color={color}
        progress={progress}
        >
        {!noPct && (
          <div ref={pctRef}>
            <ProgressPercent
              theme={theme}
              selectedTheme={selectedTheme}
              current={current}
              total={total}
              color={pctColor}
              transform={transform}
              pctSize={pctSize}
            />
          </div>
        )}
      </StyledProgress>
    </StyledProgressBar>
  );
};

export { Progress };