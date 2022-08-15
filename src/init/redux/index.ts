// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import toggles from '../../bus/client/toggles';
// import __entityName__ from '../../bus/__entityName__/slice';

// Middleware
import {
    middleware,
    // sagaMiddleware, /* If you chose saga */
} from './middleware';

// Saga
// import { rootSaga } from './rootSaga'; /* If you chose saga */

export const store = configureStore({
    reducer: {
        toggles,
        // __entityName__,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>

// sagaMiddleware.run(rootSaga); /* If you chose saga */
