
export const getColor = (props, key, fallback) => {
  const { theme, selectedTheme } = props;

  if (theme && selectedTheme) {
    const colors = theme.modes[selectedTheme];
    return colors[key];
  }

  return fallback;
};

export const truncate = (num, limit = 2) => {
  num = num === 0 || !num ? '0.00000000' : num.toString();
  const hasFloatVal = num?.includes('.');

  if (hasFloatVal) {
    const split = num.split('.');
    const int = (+(split[0])).toLocaleString('en-US');
    let float = split[1].slice(0, limit ?? 2);

    if (float.length < (limit)) {
      float = +float * 10 ** (limit - float.length);
    }

    const truncatedVal = `${int}${limit === 0 ? '' : '.'}${float}`;

    console.log({ split, int, float, truncatedVal });

    return truncatedVal;
  }

  return (+(num)).toLocaleString('en-US');
};

export const resetPage = (e, clearHash) => {
  e.preventDefault();

  if (clearHash) {
    const title = document.title;
    const pathname = window.location.pathname;
    const search = window.location.search;
    history.pushState('', title, `${pathname}${search}`);
  }

  window.scrollTo(0, 0);
};

export const addEvent = (name, func) => {
  window.addEventListener(name, e => func(e));
};

export const removeEvent = (name, func) => {
  window.removeEventListener(name, e => func(e));
};
