const person = {
    name:'Tony',
    age: 45,
    key:'Ironman',
};

const { name,age,key} = person;

console.log({name,age,key});

interface Hero{
    name:string;
    age:number;
    key:string;
    rank?: string;
}


const userContext = ({key,name,age,rank = 'sin rango'}:Hero) =>{
    return{
        keyName :key,
        user:{
            name,
            age,
        },
        rank
    };
};

const {keyName,rank,user:{name:Nombre, age:Edad}} = userContext(person);

console.log(keyName,rank,Nombre,Edad)


