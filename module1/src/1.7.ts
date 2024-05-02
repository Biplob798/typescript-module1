{
    // spread operator
    // rest operator
    // destructing


    // learn spread operator 

    const bros1:string[]=['rav','kav','cha']
    const bros2:string[]=['met','red']
    bros1.push(...bros2)


    const mentor1={
        typescript:'Mez',
        redux:'Mir',
        dbms:'Miz'
    }
    const mentor2={
        prisma:'Fir',
        next:'Ton',
        cloud:'Nah'
    }
const mentorList={...mentor1,...mentor2}




// learn rest operator

// const greetFriends=(friend1:string,friend2:string,friend3:string
// )=>{
//     console.log(`Hi ${friend1} Hi ${friend2} Hi ${friend3}`);
// }
// greetFriends('mna','kam','jam')
const greetFriends=(...friends:string[]
)=>{
    // console.log(`Hi ${friend1} Hi ${friend2} Hi ${friend3}`);

    friends.forEach((friend:string )=> console.log(`Hi ${friend}`));
}
greetFriends('mna','kam','jam')












    const porUser={
    name:'Mr.Z'
}
}