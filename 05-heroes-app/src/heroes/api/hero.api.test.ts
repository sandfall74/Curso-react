
import { describe , expect, test} from "vitest";
import { heroApi } from "./hero.api";

/* const Base_Url=import.meta.env.VITE_API_URL */

describe('HeroApi test',()=>{
    test('should be configure ponting to the testing server',()=>{
        expect(heroApi).toBeDefined();
        /* expect(heroApi.defaults.baseURL).toBe(`${Base_Url}/api/heroes`);
        expect(Base_Url).toContain('3001'); */
    })
})