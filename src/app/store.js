import { configureStore ,getDefaultMiddleware} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from '../features';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
  } from 'redux-persist';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    blacklist: ['age'], //blacklisting a store attribute name, will not persist that store attribute.
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);


  const store = configureStore({
    reducer: persistedReducer,
    // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });


// const store = configureStore({
//   reducer: {
//     counter: counterReducer,

//   }
// })

export const persistor = persistStore(store);
export default store;
