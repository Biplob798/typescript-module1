{
    // nullable type /unknown type
    const searchName=(value:string|null)=>{
        if(value){
            console.log("searching");
        }else{
            console.log("no searching");
        }
    }

    // searchName("person")
    searchName(null)

    // unknown type 
    const getSpeedInMeterPerSecond=(value:unknown)=>{
        if(typeof value==="number"){
            const convertedSpeed=(value*1000)/3600
            console.log(`The speed of is ${convertedSpeed}ms^-1`);
        }
        if(typeof value==="string"){
            const [result,unit]=value.split(" ")
            const convertedSpeed=(parseFloat(result) *1000)/3600
            console.log(`The speed of is ${convertedSpeed}ms^-1`);
        }
        else{
            console.log('wrong input');
        }
    }
    // getSpeedInMeterPerSecond(1000)
    getSpeedInMeterPerSecond(`1000 kmh^-1`)



    // never type 
    const  throwError=(msg:string):never=>{
        throw new Error(msg);
    }
    throwError("b")

    // 
}