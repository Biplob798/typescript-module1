{// Learning function 

// Normal function


// Arrow function



function add(num1:number,num2:number=23):number{
    return num1 +num2
}
add(1,3)
// add(1,'4')


const addArrow=(num1:number,num2:number):number=>num1+num2


// object ---> function --> method

const porUser ={
    name:'Bip',
    balance:0,
    // addBalance(balance:number):number{
    //     return this.balance+balance;
    // }
    addBalance(balance:number):string{
        return `my new balance is :${this.balance+balance}`;
    }
}


const arr:number[]=[1,2,4]
const newArr =arr.map((elem:number):number=>elem*elem)
console.log(newArr);

}