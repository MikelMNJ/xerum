
export const getColor = (props, key, fallback) => {
  const { theme, selectedTheme } = props;


  if (theme && selectedTheme) {
    const colors = theme.modes[selectedTheme];
    return colors[key];
  }

  return fallback;
};

export const truncate = (num, limit) => {
  num = num === 0 || !num ? '0.00000000' : num.toString();
  const hasFloatVal = num?.includes('.');

  if (hasFloatVal) {
    const split = num.split('.');
    const int = (+(split[0])).toLocaleString('en-US');
    const float = split[1].slice(0, limit ?? 2);
    const truncatedVal = `${int}${limit === 0 ? '' : '.'}${float}`;

    return truncatedVal;
  };

  return (+(num)).toLocaleString('en-US');
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
