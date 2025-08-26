interface Person {
    firstName: string;
    lastName: string;
    age : number;
    address: Address;
}
interface Address{
    
        postalcode:string,
        city:string

}

const ironman:Person = {
    firstName : 'Tony',
    lastName : 'Stark',
    age: 45,
    address:{
        postalcode:'ABC123',
        city:'New York'
    }
};

const spiderman : Person={
    firstName: 'Peter',
    lastName: 'Parker',
    age: 22,
    address:{
        postalcode:'ABC123',
        city:'New York'
    }
}

console.log(spiderman, ironman)

//const spiderman=structuredClone(ironman);

//spiderman.fisrtName='Peter';
//spiderman.lastName='Parker';
//spiderman.age=22;
//spiderman.address.city='San José';

//console.log(ironman,spiderman);



