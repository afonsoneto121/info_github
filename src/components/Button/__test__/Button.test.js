import { render, screen, fireEvent } from '@testing-library/react';

import Button from '../index'

const props = {
    children: 'Button',
    onClick: jest.fn()
}
describe('Button Test', () => {
    test('Should render with default props', () => {
        render(<Button {...props} />)

        const buttonTest = screen.getByRole('button');
        fireEvent.click(buttonTest);
        expect(buttonTest).toBeInTheDocument();
        expect(props.onClick).toBeCalledTimes(1);
    })
})