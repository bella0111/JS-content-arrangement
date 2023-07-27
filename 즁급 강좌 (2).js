// 배열 메소드 (2)
// arr.sort() :  배열 재정렬 
//(주의! 배열 자체가 변경됨)
let arr = [27, 8, 5, 13];
// 8, 27, 5, 13
// 5, 8, 27, 13
// 5, 8, 13, 27
arr.sort(a,b) > {
    return a - b;
};
console.log(arr);


// arr.reduce() : 인수로 함수를 받는다.
// ( 누적 계산값, 현재값 ) => { return 계산값 };
// 배열의 모든 수 합치기
let arr1 = [1, 2, 3, 4, 5];
//Lodash : 라이브러리
// _.sortBy(arr);
// for, for of, forEach
let result = 0;
arr.forEach(num) => {
    result += num;
};
console.log(result);

const result = arr.reduce(prev, cur) => {
    return prev + cur;
}, 0) // 누산값:0,1,3,6,10,15
console.log(result);

let userList = [
    { name: "Mike", age: 30 },
    { name: "Tom", age: 30 },
    { name: "Jane", age: 30 },
    { name: "Sue", age: 30 },
    { name: "Marry", age: 30 },
    { name: "Steve", age: 30 },
];

let result = userList(prev, cur)=>{
    // 방법 (1)
    if(cur.age > 19){
        prev.push(cur.name);
    }
    return prev;
}, []) // 누산값 : ["Mike"]
     // 방법(2)
    if(cur.name.length === 3){
        prev.push(cur.name);
    prev.push(cur.name);
     }
    return prev;
}, []) 


// 구조 분해 할당 (Destruchuring assigment)
// 구조 분해 할당 구문은 배열이나 
//객체의 속성을 분해해서 그  값을 변수에 담을 수 있게 하는 표현식 입니다.
let [x, y] = [1, 2];
console.log(x); // 1
console.log(y); // 2
let users = ['Mike', 'Tom', 'Jane']; 
let [user1, user2, user3] = users; // str.split('-');
      => let user1 = users[0]
    
console.log(user1); // 'Mike
console.log(user2); // 'Tom'
console.log(user3); // 'Jane'

// 배열 구조 분해 : 기본값
let [a, b, c] = [1. 2];
let [a=3, B=4, C=5] = [1,2];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 5

let [user1, ,user2] = ['Mike', 'Tom', 'jane', 'Tony'];
console.log(user1); // 'Mike'
console.log(user2); // 'Jane'

// 배열 구조 분해 : 바꿔치기
let a = 1;
let b = 2;
let c = a;
a = b;
b = c;
[a, b] = [b, a];

// 객체 구조 분해
let User = {name: 'Mike', age: 30};
let {name, age} = user;
//let name = user.name
// let age = user.age
console.log(name); // 'Mike'
console.log(age); // 30

// 객체 구조 분해 : 새로운 변수 이름으로 할당한다.
let User = {name: 'Mike', age: 30};
let {name, age} = user; 
// let {name: userName, age: userAge} = user;
console.log(userName); // 'Mike'
console.log(userAge); // 30

// 객체 구조 분해 : 기본값
let user = {name: 'Mike', age: 30};
let {name, age, gender} = user;
//              undefined
let {name, agem gender = 'male'} = user;

let user {
    name: 'Jane',
    age: 19,
    gender: 'female'
};
let {name, agem gender = 'male'} = user;
console.log(gender); // 'female'


// 나머지 매개변수, 전개 구문 (Rest parameters, Spread syntax)
// 인수 전달
function showName (name) {
    console.log(name);
}
showName('Nike'); // 'Mike'
showName('Mike', 'Tom'); // ?
showName(); // undefined

// arguments
/**
 * 함수로 넘어온 모든 인수에 접근한다.
 * 함수내에서 이용 가능한 지역 변수가 있다.
 * length / index
 * Array 형태의 객체이다.
 * 배열의 내장 메서드는 없다. (forEach, map)
 */
function showName(name) {
    console.log(attguments.length);
    console.log(attguments[0]);
    console.log(attguments[1]);
}
showName('Mike', 'Tom');
// 2  'Mike'   'Tom'

// 나머지 매개 변수
// 전달 받은 모든 수를 더해야 한다.
function add (...numbers) {
    let result = 0;
    numbers,forEach(num) => (result += num);
}
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function User (name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
}
const User1 = new User('Mike', 30, 'Html', 'css');
const User2 = new User ('Tom', 20, 'JS', 'React');
const User3 = new User ('Jane', 10, 'English');
console.log(user1);
console.log(user2);
console.log(user3);

// 전개 구문 (Spread syntax) : 배열
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let result = [...arr1, ...arr2];
console.log(result); // [1,2,3,4,5,6]

let result = [...arr1, ...arr2, 7, 8, 9];
// [0,1,2,3,4,5,6,7,8,9]
// arr.push()/ arr.splice() / arr.concat();...
let arr1 = [1,2,3];
let arr2 = [...arr]; //[1,2,3]
let user = {name:'Mike', age:30};
let user2 = {...user};
user2.name = 'Tom';
console.log(user.name); // "Mike"
console,log(user2.name); // "Tom"

let arr1 = [1, 2, 3];
let arr2 [4, 5, 6];
arr2.reverse().forEach((num) => {
    arr1.unshift(nim);
});
arr1 = [...arr2, ...arr1];
console.log(arr1); //(9) {6,5,4,4,5,6,1,2,3}

let user = {name: "Mike"};
let info = { age:30 };
let fe = ["JS", "React"];
let lang = ["koran", "English"];
/**
 * user = Object.assign{}, user, info, {
    skills: [],
};
fe.forEach(item) => {
    user.skills.push(item);
};
lang.forEach(item) => {
    user.skills.push(item);
};
 */
 user = {
    ...user,
    ,,,info
    skills: [...fe, ...lang],
 };
 console.log(user);

 // 클로저 (Closure) : 
 // 함수와 렉시컬 환경의 조합
 // 함수와 생성될 당시의 변수를 기억한다.
 // 생성 이후에도 계속 접근 가능하다.
 // 어휘적 환경 (Lexical Environment)
 /**
  * Lexcial 환경
  * one: 초기화 X => 사용 불가
  *    : 1
  * num: 5
  *  ↑  참조
  * addOne: function => 사용 가능
  */
 let one;
 one = 1;
 function addOne(num) {
    console.log(one + num);
 }
addOne(5);

function makeAdder(x) {
    return function(y){ // y를 가지고 있고 상위함수인 makeAdder의 x에 접근 가능하다.
        return x + y;
    }
}
const add3 = makeAdder(3);
console.log(add3(2)); // 5  add3함수가 생성된 이후에도
//                          상위함수인 makeAdder의 x에 접근 가능하다.
/**
 *  전역 Lexical 환경
 * makeAdder: function
 *  ↑ 참조
 * add3: 초기화 X (funxtion)
 * MakeAdder Lexcal 횐경
 * x:3
 *  ↑ 참조
 * 익명함수 Lexical 환경
 * y:2
 */
const add10 = makeAdder(10);
console.log(add10(5)); // 15
console.log(add3(1)); // 14

function makeCounter() {
    let num = 0; // 은닉화

    return function() {
        return num++;
    };
}
let count = makeCounter();
console.log(count()); // 0
console.log(count()); // 1
console.log(count()); // 2

//SetTimeout : 일정 시간이 지난 후 함수를 실행
function fn () {
    console.log(3)
}
setTimeout(fn, 3000);
//     ↓          =3s 
setTimeout(function()) {
    console.log(3)
}, 3000);

const tId = function showName(name) {
    console.log(name);
}
setTimeout(showName, 3000, 'Mike')
//           함수     시간   인수
clearTimeout(tId);


// setlnterval : 일정 시간 간격으로 함수를 반복
function showName(name) {
    console.log(name);
}
const tId = setInterval(showName, 3000, 'Mike')
// 'Mike'   'Mike'    'Mike'   clearInterval(tId);

// delay = 0 ?
setTimeout(function() {
    console.log(2)
}, 0 );
console.log(1);

let num = 0;
function showName() {
    console.log{'안녕하세요. 접속하신지 ${'num++'}초가 지났습니다.'};
    if (num > 5) {
        clearInterval(tId);
    }
}
const tId = setInterval (showTime, 1000);