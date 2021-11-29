import Navbar from './NavBar';
import { renderWithProviders } from '../utils/renderWithProviders';

describe('Navbar Component', () => {

    test('should render correctly', () => {
        const { asFragment } = renderWithProviders(<Navbar />);
        expect( asFragment() ).toMatchSnapshot();
    })
    
})

