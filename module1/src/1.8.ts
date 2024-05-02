// destructuring

const users={
    id:345,
    name:{
        firstName:'Md',
        middleName:'Bip',
        lastName:'Islam'
    },
    contactNo:"01521436261",
    address:"Bad",
};

// const {
//     contactNo:phoneNumber,//alious kora
//     name:{middleName:midName},
// }=user;


// array destructuring 

const myFriends=['A','B','C','D']
const [a,b,c,...rest]=myFriends