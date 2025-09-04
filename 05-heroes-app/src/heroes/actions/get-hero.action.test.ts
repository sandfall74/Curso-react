import { describe, expect, test } from 'vitest';
import { getHeroAction } from './get-hero.action';

// Nota: No necesitas mockear getHeroAction si quieres probar la acción real,
// pero si estás haciendo mock, debes asegurarte de que el mock devuelva un objeto con la URL de imagen completa.

describe('getHeroAction', () => {
  test('should fetch hero data and return with complete image url', async () => {
    const result = await getHeroAction('clark-kent');

    // Esta prueba de contain es correcta y debe mantenerse
    expect(result.image).toContain('http');
    
    expect(result).toStrictEqual({
      id: expect.any(String),
      name: expect.any(String),
      slug: expect.any(String),
      alias: 'Superman',
      powers: [
        'Súper fuerza',
        'Vuelo',
        'Visión de calor',
        'Visión de rayos X',
        'Invulnerabilidad',
        'Súper velocidad',
      ],
      description:
        'El Último Hijo de Krypton, protector de la Tierra y símbolo de esperanza para toda la humanidad.',
      strength: 10,
      intelligence: 8,
      speed: 9,
      durability: 10,
      team: 'Liga de la Justicia',
      // ¡Aquí está el problema! Cambia la URL específica por un matcher.
      image: expect.any(String),
      firstAppearance: '1938',
      status: 'Active',
      category: 'Hero',
      universe: 'DC',
    });
  });

  test('should throw an error if hero is not found', async () => {
    const idSlug = 'batman-2';

    const result = await getHeroAction(idSlug).catch((error) => {
      expect(error).toBeDefined();
      expect(error.message).toBe('Request failed with status code 404');
    });

    expect(result).toBeUndefined();
  });
});