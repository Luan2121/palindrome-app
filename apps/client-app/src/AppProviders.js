// Here we put all providers we need in order to
// make the app work fine

import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from './redux/store';

const AppProviders = ({ children }) => {
    const store = configureStore();
    return (
        <ReduxProvider store = {store}>
            {children}
        </ReduxProvider>
    )
}

export default AppProviders;