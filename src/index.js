import React from 'react';
import AppJS from '../App';
import { persistor, store } from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Store from './app/store';

export default function App() {
  return (
     <Provider store={Store}>
     <PersistGate loading={null} persistor={persistor}>
       <AppJS />
     </PersistGate>
   </Provider>
  // <Provider store={Store}>
  //   <AppJS/>
  // </Provider>

  );
}