import { heroes , type Hero, type Owner} from "../data/heroes.data"

const getHeroById=(id:number): Hero|undefined =>{
    const hero = heroes.find((hero)=>{
        return hero.id === id;
    });
    
    return hero;
}

console.log(getHeroById(5));


export const getHeroByOwner=(owner:Owner)=>{
    const heroesByOwner = heroes.filter((hero)=>hero.owner===owner);
    return heroesByOwner;
}

