{
    // conditional type 

    type a1 =null
    type b1=undefined

    type x =a1 extends null ?true:false//conditional type

    type y = a1 extends null?true:b1 extends undefined? undefined:any;
    // console.log(y);
    type Sheikh={
        bike:string;
        car:string;
        ship:string;
        plane:string

    }
    // keyof Sheikh

    // type CheckVehicle<T>=T extends "bike"|"bike"|"ship"?true:false
    // type HasBike = CheckVehicle<"ship">
    type CheckVehicle<T>=T extends keyof Sheikh?true:false
    type HasBike = CheckVehicle<"ship">

    // 
}