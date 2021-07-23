import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import InputField from '../index';

const props = {
	placeholder: 'Pesquisar',
	onChange: jest.fn(),
}
describe('InputField', () => {

	test('should render with default props', () => {
		render(<InputField {...props} />);
		const inputTest = screen.getByPlaceholderText(props.placeholder);
		fireEvent.change(inputTest, { target: { value: 'Teste' } });

		expect(inputTest).toBeInTheDocument();
		expect(props.onChange).toBeCalled();
	});
})
