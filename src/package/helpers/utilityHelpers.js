
export const getColor = (props, key) => {
  const { theme, selectedTheme } = props;
  const colors = theme?.modes[selectedTheme];

  return colors[key];
};