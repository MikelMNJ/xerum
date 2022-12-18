
export const getColor = (props, key, fallback) => {
  const { theme, selectedTheme } = props;

  if (theme && selectedTheme) {
    const colors = theme.modes[selectedTheme];
    return colors[key];
  }

  return fallback;
};