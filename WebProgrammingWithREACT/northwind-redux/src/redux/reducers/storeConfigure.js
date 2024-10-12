import { configureStore } from '@reduxjs/toolkit'; // Redux Toolkit'i içe aktar
import rootReducer from './index'; // Reducers'ınızı içe aktar
import { thunk } from 'redux-thunk';

// configureStore fonksiyonu
const storeConfigure = () => {
  return configureStore({
    reducer: rootReducer, // Reducer'ları yapılandırmada kullanın
    // Diğer yapılandırma seçeneklerini buraya ekleyebilirsiniz
    // Örneğin:
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, 
        thunk// Özellikle API çağrıları için devtools uyumluluğunu devre dışı bırakın
      }),
    // devTools: process.env.NODE_ENV !== 'production', // Geliştirme ortamında devtools'u etkinleştirin
  });
};

export default storeConfigure;