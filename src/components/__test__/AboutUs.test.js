import { render, screen, cleanup } from '@testing-library/react';
import AboutUs from '../AboutUs/AboutUs'

test('should render AboutUs component', () => {
    render(<AboutUs />)
    const AboutUsElement = screen.getByTestId('AboutUs-1');
    expect(AboutUsElement).toBeInTheDocument();
    expect(AboutUsElement).toHaveTextContent('Restaurant');

})