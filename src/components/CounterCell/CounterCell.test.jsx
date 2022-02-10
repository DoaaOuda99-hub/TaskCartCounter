import {render , screen , waitFor ,fireEvent } from '@testing-library/react';
import CounterCell from './CounterCell';

describe('Test for Counter Cell' , () => {
    test('Test for Counter Cell' , async () => {
        render(<CounterCell/>)
        screen.debug()
        screen.getAllByText('+')
    })
})