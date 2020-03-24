'use strict';

// const addTwoNum =(x,y) => {
//     return x+y;
// };

// console.log(addTwoNum(3,4));

// class Calculator {
//     constructor(x,y) {
//         this.x=x;
//         this.y=y;
//     }
//     addTwoNum (){
//         return this.x+ this.y;
//     }
// }

// const Calc = new Calculator (3,4);
// let num = Calc.addTwoNum();
// console.log(num);

class SuperNameing{
    constructor(){
        this.name ='田中';
    }
    outputName() {
        return this.name;
    }
}

class subGreeting extends SuperNameing {
    outputName(){
        return super.outputName() + '太郎';
    }
    outputHello () {
        return 'Hello!';
    }
}

const Greeting = new subGreeting
console.log(Greeting.outputHello()+ Greeting.outputName());