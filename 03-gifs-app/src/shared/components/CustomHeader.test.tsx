
import {describe, test, expect} from 'vitest';
import { render, screen } from '@testing-library/react';
import { CustomHeader } from './CustomHeader';

describe('CustomHeader', () => {
  const tittle='Hola Mundo';
  const description='Soy una descripcion';
    test('should title be render correctly', () => {
        
        render(<CustomHeader tittle={tittle} />);
        expect(screen.getByText(tittle)).toBeDefined();
    });
    test('should render component without description', () => {
        
        render(<CustomHeader tittle={tittle} description={description}/>);
        expect(screen.getByText(description)).toBeDefined();
        expect(screen.getByText(tittle)).toBeDefined();
    });
    test('should not render the descripcion when not provided', () => {
        
        render(<CustomHeader tittle={tittle} />);
        expect(screen.queryByText(description)).toBeNull();
    }); 
})
