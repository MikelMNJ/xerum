
export const getColor = (props, key, fallback) => {
  const { theme, selectedTheme } = props;


  if (theme && selectedTheme) {
    const colors = theme.modes[selectedTheme];
    return colors[key];
  }

  return fallback;
};

export const resetPage = pathname => {
  window.location.href = pathname || '/';
  window.scrollTo(0, 0);
};

export const addEvent = (name, func) => {
  window.addEventListener(name, e => func(e));
};

export const removeEvent = (name, func) => {
  window.removeEventListener(name, e => func(e));
};