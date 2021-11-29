import Results from './Results';
import { renderWithProviders } from '../utils/renderWithProviders';

describe('Results Component', () => {

    test('should render correctly', () => {
        const { asFragment } = renderWithProviders(<Results />);
        expect( asFragment() ).toMatchSnapshot();
    })
    
})

