const ROUTE_CHANGE_EVENT = 'ROUTE_CHANGE';

export const init = (onRouteChange) => {
  window.addEventListener(ROUTE_CHANGE_EVENT, () => {
    onRouteChange();
  });
};

export const routeChange = (url, params) => {
  const { pathname } = location;
  if (url !== pathname) {
    history.pushState(null, '', url);
    window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params));
  }
};
