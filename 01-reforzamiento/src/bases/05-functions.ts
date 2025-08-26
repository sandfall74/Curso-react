

function greet(name:string){
    return `Hola ${name} como estas?`
}

const greet2 = (name : string): string=>`Hola ${name} como estas?`;



console.log(greet('Goku'),greet2('Vegeta'));

interface User {
    uid : string;
    username:string;
}


function getUser():User{
    return{
        uid:'ABC-123',
        username: 'El_Pusc21',
    };
}


const getUser2 = () =>({
        uid:'ABC-123',
        username: 'El_Pusc21',
    });
let user = getUser();
user = getUser2();
console.log(user);


const myNumber: number[] = [1,2,3,4,5];

myNumber.forEach((value)=>{
    console.log(value)
});

myNumber.forEach(
    console.log
);