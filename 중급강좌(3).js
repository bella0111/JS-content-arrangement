// call, apply, bind : 함수 호출 방식과 관계없이 this를 지정할 수 있다.
const nums = [3, 10, 1, 6, 4];
// const minNun = Math.min(...nums);
// const maxNum = Math.max(...nums);
const minNum = Math.min.apply(null,nums);
// = Math.min.apply(null, 3, 10, 1, 6, 4);
const maxNum = Math.min.call(null,...nums);
// = Math.min.apply(null, 3, 10, 1, 6, 4);
console.log(minNum);
console.log(maxNum);

/**
 * const mike = {
    name: 'Mike'
};
const tom = {
    name: "Tom",
};
function showThisName() {
    console.log(this.name)
}
function update(birthYear, occipation) {
    this.birthYear = birthYear;
    this.occipation = occipation;
}
update.call(mike, 1999, "singer");
console.log(mike);
update.call(tom, 2002, "teacher");
console.log(tom);

apply
 apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같습니다. 
 call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받습니다.
 */

 // bind: 함수의 this 값을 영구히 바꿀수 있습니다.
 const mike = {
    name: "Mike",
 };

 function update(birthYear, occipation) {
    this.birthYear = birthYear;
    this.occipation = occipation;
 }
 const update = update.bind(mike);

 updateMike(1980, 'police')
 console.log(mike);

 const user = {
    name: "Mike",
    showName: function() {
        console.log('hello, ${this.name');
    },
 };
 user.showName();
 let fn = user.showName;
 fn(); // hello,
 // fn() 을 바꾸면
 fn.call(user); // hello, Mike
 fn.apply(user); // hello, Mike

let boundFn = fn.bind(user);
boundFn();

// 상속, prototype
/**
 * console 창에 사용하는 코드
const User = {
    name : 'Mike'
}
<- undefined
user.name
<- "mike"
user.hasOwnProperty('name')
<- true
user.hasOwnProperty('age');
<- false 

const user = {
    name: 'Mike'
    hasOwnProperty : function() {
        console.log('haha')
    }
}
<- undefined
user.hasOwnProperty()
haha
<- undefined
/**
 */

const bmw = {
    color: "red",
    wheels: 4,
    navigator: 1.
    drive() {
        console.log("drive..");
    },
};
const benz = {
    color: "black",
    wheels: 4,
    navigator: 1.
    drive() {
        console.log("drive..");
    },
};
const audi = {
    color: "blue",
    wheels: 4,
    navigator: 1.
    drive() {
        console.log("drive..");
    },
};
bmw._proto_ = car;
const x5 = {
    color: "whilte",
    name: "x5"
};
x5._proto_ = bmw;
benz._proto_ = car;
benz._proto_ = car;
/**
 * car
 * wheels: 4, drive()
 * _proto_
 * 
 * bmw
 * color: 'red', navigation : 1
 * _proto_
 * 
 * x5
 * color: 'while', name: 'x5'
 * _proto_
 */

/**
 * const car = {
    wheels: 4,
    drive() {
        console.log("drive..");
    },
};
 */
const Bmw = function (color) {
    this.color = color;
};

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function() {
    console.log("drive..");
};
Bmw.prototype.navigator = 1;
Bmw.prototype.drive = function() {
    console.log("STOP!");
};
const x5 = new Bmw("red");
const z4 = new Bmw("blue");
// x5._proto_ = car;
// z4._proto_ = car;

const Bmw = function (color) {
    const c = color;
    this.getColor = function () {
        console.log(c);
    };
};
const x5 = new Bmw("red");

// class : ES6에 추가된 스펙
const User = function (name, age) {
    this.name = name;
    this.age = age;
    this.showName = function() {
        console.log(this.name)
    };
};
User.prototype.showName = function() {
    console.log(this.name);
};
const mike = new User('MIke',30)

Class User2 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name)
    }
}
const tom = new User2('Tom', 19)

// class : 상속
//extends
class car{
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive..");
    }
    stop(){
        console.log("STOP!");
    }
}
class bmw extends Car {
    park() {
        console.log("PAPK");
    }
}
stop() {
    console.log("OFF");
} // class : 메소드 오버라이딩
const z4 = new Bmw("blue");

// Promise
const pr = new Promise((resolve , reject) => {
 // code                  성공      실패 
});

/** 구조
 * new Promise 는 resolve 와 reject로 나눌수 있습니다.
 * new Promise는
 * stare: pending(대기)
 * result: undefined
 * 입니다.
 * 그리고 resolve(value)는
 * stare: fulfilled(이행됨)
 * result: value
 * 입니다.
 * 그리고 reject(error)는
 * stare: rejecred(거부됨)
 * result: error
 */
// new Promise -> 3s resolve
const Pr = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve('OK')
    }, 3000)
});
pr.then(
    function(result){}, // => 이행 되었을때 실행
    function(err){} // => 거부 되었을떄 실행
);
// ↓
pr.then(
    function(result){}
).catch(
    function(err){}
).finally(
    function(){
        console.log('--주문 끝 --')
    }
)

// new Promise - > 3s reject
resolve('OK')
// 바꾸기
reject(new Error('error...'))

const Pr = new Promise((resolve, reject) => {
    setTimeout(()=> {;
        // resolve("Ok");
        reject(new Error("err....."));
    }, 1000);
})
console.log("시작");
pr.then((result) => {
    console.log(err);
}) .catch((err) => {
    console.log(err);
}) .finally(( ) => {
    console.log("끝";)
});

const F1 = (callbake) => {
    setTimeout(function() {
        console.log("1번 주문 완료");
        callbake();
    }, 1000);
};
const F2 = (callbake) => {
    setTimeout(function() {
        console.log("2번 주문 완료");
        callbake();
    }, 3000);
};
const F3 = (callbake) => {
    setTimeout(function() {
        console.log("3번 주문 완료");
        callbake();
    }, 2000);
};
/**console.log("시작");
f1(function( {
    f2(function ( ) {
        F3(function () {
            console.log("끝")
        });
    });/
})); **/
//promise.all
console.time("x");
Promise.all([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd("x");
});
console.log("시작");

f1()
.then((res) => F2(res))
.then((res) => F3(res))
.then((res) => console.log(res));
.catch(console.log)
.finally(() => {
    console.log("시작");
}); 

//astnc await
async function getName( ) {
   // return Promise.resolve("TOM")
   throw new Error("err...");
}

getName().catch(err) => {
    console.log(err);
};

function getName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 1000);
    })
}
async function showName() {
    const result = await getName("MIke");
    console.log(result);
    }
console.log("시작");
showName();

// Generator : 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
/** next() 에 인수 전달
 * iterable
 * Symbol.iterator메소드가 있다.
 * Symbol,iteratir는 iterator를 반환해야 한다.
 * iteraror은
 * next 메서드를 가진다.
 * next 메서드는 value와 done속성을 가진 객체를 반환한다.
 * 작업이 끝나면 done은 true가 된다.
 */
function* fn() {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    console.log(4);
    yield 3;
    return "finish"
} catch.log(e);
const a = fn();

function fn() {
    const num1 = yield "첫번째 숫자를 입력해주세요";
    console.log(num1);
    const num1 = yield "두번째 숫자를 입력해주세요";
    console.log(num2);

    return num1 + num2;
}
const a = fn()

function* fn() {
    let index = 0;
    while(true) {
        yield index++;
    }
}
const a = fn();

function* gen1(){
    yield "W";
    yield "o";
    yield "r";
    yield "i";
    yield "d";
}
function* gen2() {
    yield "Hello,"
    yield* gen1();
    yield"!";
}