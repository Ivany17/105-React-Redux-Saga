import {applyMiddleware, createStore} from 'redux'; // Я смотрю видео-урок за 14 декабря 2021 года, и там createStore ещё работает
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'reducers';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();
// const enhancer = applyMiddleware(sagaMiddleware);  
// const store = createStore(rootReducer, enhancer);
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;