import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices';

// Store configuration
const store = configureStore({
    reducer: rootReducer,
});

export default store;