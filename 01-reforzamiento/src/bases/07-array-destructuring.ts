
const characterNames:string[] = ['Goku','Vegeta','Trunks'];

const [ ,,P3 ]= characterNames;

console.log(P3);

const retunsArrayFn=()=>{
    return['ABC',123] as const;
}
const[letters,numbers] = retunsArrayFn();
console.log(letters,numbers)



//tarea:
const useState=(name:string)=>{
    
    return [name,(newValue:string)=>{
        console.log(newValue);
    }] as const;
}

const [name,setName]=useState('Goku');
console.log(name);
setName('hola');

//
