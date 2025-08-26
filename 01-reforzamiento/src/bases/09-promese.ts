

const myPromise = new Promise<number>((resolve, reject)=>{
    setTimeout(() => {
        //! yo quiero mi dinero !!
        reject('Mi amigo se perdio');
    }, 2000);
    resolve(100);
});

myPromise.then((myMoney)=>{
    console.log(`Tengo mi dinero ${myMoney}`);
}).catch((reason)=>{
    console.warn(reason);
}).finally(()=>{
    console.log('Pues a seguir con mi vida');
})