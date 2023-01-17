const ROUTE_CHANGE_EVENT = 'ROUTE_CHANGE';

export const init = (onRouteChange) => {
  window.addEventListener(ROUTE_CHANGE_EVENT, () => {
    onRouteChange();
  });
};

export const routeChange = (url, params, type = null) => {
  const { pathname } = location;
  if (type === null) {
    if (url !== pathname) {
      history.pushState(null, '', url);
      window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
    }
  } else if (type === 're') {
    history.replaceState(null, '', url);
    window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
  }
};
