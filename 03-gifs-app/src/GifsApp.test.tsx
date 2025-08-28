import {describe, test, expect} from 'vitest';
import { render/* , screen */ } from '@testing-library/react';
import {GifsApp}from './GifsApp';
describe('GifsApp', () => {
    test('should render component properly', () => {
        const {container}= render(<GifsApp/>);
        expect(container).toMatchSnapshot();
    });
})