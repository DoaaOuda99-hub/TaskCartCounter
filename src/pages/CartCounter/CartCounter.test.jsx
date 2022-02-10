import {render , fireEvent , waitFor , screen} from '@testing-library/react';
import CartCounter from './CartCounter';

describe('Test Cart Counter' , () => {
    test('Test Cart Counter'  , async () => {
        render(<CartCounter/>)
        screen.debug()
        screen.getAllByText('+')
        screen.getAllByText('-')
    })
})