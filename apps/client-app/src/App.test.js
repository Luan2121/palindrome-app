import App from './App';
import { renderWithProviders } from './utils/renderWithProviders';

describe('App Component', () => {

    test('it should render without crashing', () => {
        const { asFragment } = renderWithProviders(<App />);
        expect( asFragment() ).toMatchSnapshot();
    })

})

