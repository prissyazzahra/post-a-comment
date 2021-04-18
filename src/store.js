// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import { createBrowserHistory } from 'history';
// import reducer from './reducer';
// const history_config = { basename: '/' };
// export const history = process.env.NODE_ENV === 'development' ? createBrowserHistory() : createBrowserHistory(history_config);

// const initialState = {};
// const enhancers = [];
// const middleware = [
//   thunk,
//   routerMiddleware(history)
// ];

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.devToolsExtension;

//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension());
//   }
// }

// const composedEnhancers = compose(
//   applyMiddleware(...middleware),
//   ...enhancers
// );

// const store = createStore(
//   connectRouter(history)(reducer),
//   initialState,
//   composedEnhancers
// );

// export default store;

