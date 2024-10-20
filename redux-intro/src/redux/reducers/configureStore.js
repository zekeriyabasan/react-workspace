import { configureStore } from '@reduxjs/toolkit'; // Redux Toolkit'i içe aktar
import reducers from './index'; // Reducers'ınızı içe aktar

// configureStore fonksiyonu
const storeConfi = () => {
  return configureStore({
    reducer: reducers, // Reducer'ları yapılandırmada kullanın
    // Diğer yapılandırma seçeneklerini buraya ekleyebilirsiniz
    // Örneğin:
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //     serializableCheck: false, // Özellikle API çağrıları için devtools uyumluluğunu devre dışı bırakın
    //   }),
    // devTools: process.env.NODE_ENV !== 'production', // Geliştirme ortamında devtools'u etkinleştirin
  });
};

export default storeConfi;
