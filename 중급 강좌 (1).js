//(1)
// var 는 한번 선언된 변수를 다시 선언할 수 있다.
let name1 = 'Mike';
console.log(name1); // Mike
let name2 = 'Jane'; // error!
console.log(name2);

// var는 선언하기 전에 사용할 수 있다.
var name; //생략 가능하다. , 호이스팅
console.log(name3); // undefined, ReferenceError
var name3 = 'Mike'; // 할당
// 호이스팅 이란 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동한다.

// 호이스팅
// TDZ ( Temporal Dead Zone )
console.log(name4) //TDZ 할당이 끝날 때 까지 사용불가
const name = "Mike" // 함수 선언 및 할당
console.log(name5) // 사용 가능하다.
let age = 30; 
function showAge() {
    console.log(age); // 사용 가능
    let age = 20; // 사용 불 가능
}
showAge();

// var 변수의 생성과정
//1. 선언 및 초기화 단계  2. 할당 관계
//초기화 : undefined를 할당 해주는 단계
// var : 함수 스코프 (function-scoped)
var age;
age = 30;

// let 변수의 생성 과정
// 1. 선언 단계 2. 초기화 단계 3. 할당 단계
//let, const: 블록 스코프(block-scoped)
let name6;
name6 = 'Mike';

// const 변수의 생성과정
// 1. 선언 + 초기화 + 할당
const gender;
gender = 'male';

// 스코프
const age = 30;
if(age>19) {
    var txt = '성인';
}
console.log(txt); // '성인'


// 객체 리터럴
let user = {
    name : 'Mike',
    age : 30,
}

// 생성자 함수 : 상품 객체를 생성해보자.
function User(title, price) {
    this.thtle = title;
    this.price = price;
    // this = {};
    this showprice = function( {
        console.log('가격은 $(price) 원 입니다.')
    })
 }
 // return this
 const item1 = new Item('인형', 3000);
 const item1 = new Item('가방', 4000);
 const item1 = new Item('지갑', 3000);

 console.log (item1, Item2, Item3);
 Item3.showprice();

let user1 = new user ('Mike', 30);
let user2 = new User ('jane', 22);
let user3 = new User ('Tom', 17)


//(2)
// Computed property : 계산된 프로퍼티
let a = 'age';
const User = {
    name : 'Mike',
    age : 30
   // [a] : 30 이라고 쓸 수 있다.
}

// Methods
Object.assign() //  객체 복제
const User = {
    name : "Carissa"
    age : 28
} 
const cloneUser = User; // X
const newUser = Object.assign({}, user);
{ } + { name : 'Carissa', age : 28} = 
{
    name: Carissa,
    age : 28,
}
// 이름을 바꿔도 객체 복제의 변함은 없다.
const newUser = Object.assign( {}, user);
newUser.name = 'Tom';
console.log(user.name); // 'Carissa'
newUser != user
// 두개 이상을 합칠 수 있다.
const User = {
    name : 'IsIa'
}
const info1 = {
    age : 20,
}
const info2 = {
    gender : 'male',
}
Object.assign(user, info1, info2)


Object.keys() // 키 배열 반환
const User = {
    name : 'Alice'
    age : 18,
    gender : 'male',
}
Object.entries()// 키와 값을 모두 배열로 반환하고 싶다면
const User = {
    name : 'Alice'
    age : 18,
    gender : 'male',
} // [ ["name", "Alice"],
//      ["age",18],
//      [ "gender", "male"] ]
Object.entries(user);
Object.keys(user)


Object.fromEntries() // 키/값 배열을 객체
const arr =
[   ["name", "Alice"],
    ["age",18],
    [ "gender", "male"] ];
    Object.fromEntries(arr)

// (2) 번 총 정리
let n = "name";
let a = "age";
const User = {
    [n] : "Maeve",
    [a] : 28,
};
console.log(user);

function makeobj(key, val) {
    return {
        [key] : val
    }
}
const obj = makeobj ('나이', 33);
console.log(obj);

const User = {
    name : "Maeve",
    age : 30,
};
const User2 = user;
user2.name = "Tom";
console. log(user);
console.log(user2);

const User = {
    name : "Maeve",
    age : 30,
};
const user2 = Object.assign( {}, user);
user2.name = "Tom";
console.log(user);
console.log(user2);

const User = {
    name : "Maeve",
    age : 30,
};
const result = Object.keys(user);
console.log(result);

let arr = {
    ["mon", "월"],
    ["tue", "화"],
};
const result = Object.fromEntries(arr);
console.log(result);


// (3)
// property key : 문자형
const obj = {
    1: '1입니다.',
    false : '거짓'
}
Object.keys(obj); // ["1", "false"]
obj['1'] // "1 입니다."
obj['false'] // "거짓"

// 심볼 (Symbol) = 유일한 식별자
const a = Symbol(); // new를 붙이지 않습니다.
const b = Symbol();
// 값은 console.log (a)  Symbol()
//      console.log(b)  Symbol()
a === b; // false
a == b; // flase

// Symbol : 유일성 보장
const id = Symbol('id');
const id2 = Symbol('id');
//  값은 id => Symbol(id)        id === id2 => false
//      id2 => Symbol(id)        id == id2 => flase


// property key : 심볼형
const id3 = Symbol('id');
const user14 = {
    name : 'Hazel',
    age : 29,
    [id4] : 'myid'
}
// 값은 user => {name : 'Hazel', age : 29, symbol(id): "myid"}
Object.keys(user);  ["name", "age"]
Object,valuse(user);
Object.entries(user);


// Symbol.for(): 전역 심볼
// 1. 하나의 심볼만 보장 받을 수 있습니다.
// 2. 없으면 만들고, 있으면 가져오기 떄문입니다.
// 3. Symbol 함수는 매번 다른 Symbol 값을 생성한다.
// 4. Symbol.for 매소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유합니다.
const id5 = Symbol.for('id');
const id6 = Symbol.for('id');
id5 === id6 // true
Symbol.keyFor(id5) // "id"


// description
const id7 = Symbol('id 입니다.');
id.description; // "id 입니다."


// 숨겨진 Symbol key 보는 법
const id8 = Symbol('id');
const User = {
    name : 'Hazel'
    age : 14,
    [id] : 'myid'
}
Object.getOwnPropertySymbols(user); // [Symbol(id)]
Reflect.ownKeys(user); // {"name", "age", Symbol(id)}

//(3) 실습 총 정리
// 다름 개발자가 만들어 놓은 객체
 const User = {
    name:'Hazel'
    age: 30,
 };
 // 내가 작업
 // user.showName = function () {};
 const showName = Symbol("show name");
 user[showName] = function() {
    console.log(this.name);
 };
 user[showName] ();
 // 사용자가 접속하면 보는 메세지
 for(let key in user) {
    console.log('His ${key} is ${user[key]}.');
 } // 값은  His age is 30.


//(4)
// toString() => 10 진수 -> 2 진수 / 16 진수
let nem = 10;
Num.toString(); // "10"
Num.toString(2); // "1010"
let num2 = 255;
num2.toString(16) // "ff"

// Math 
Math.PI // 3.141592653589793


let num1 = 5.1;
let num2 = 5.7;
// Math.ceil : 올림
Math.ceil(num1); // 6
Math.ceil(num2); // 6

// Math.floor() : 내림
Math.floor(num1) // 5
Math.floor(num2) // 5

// Math.round() : 반올림
Math.round(num1) // 5
Math.round(num2) // 6


// 소수점 자릿수
let userRate = 30.1234;
// 요구사항 : 소수점 둘째자리 까지 표현 (셋째 자리에서 반올림)
Math.round(userRate * 100) / 100 // 30.12

// 소수점 자릿수: toFixed()
userRate.toFixed(2) // "30.12"

// isNaN() : 어떤 값이 NAN인지 판별하는 함수입니다.
let x = Number('x') // NaN
x == NaN // false
x == NaN // false
NaN == NaN // flase
isNaN(x) // true
isNaN(3) // flase

// parselnt()
let margin = '10px';
parseInt(margin); // 10
Number(margin); //NAN

let redColor = 'f3';
parseInt(redcolor); // NaN

let redColor = 'f3'
parseInt(redColor,16); //243

parseInt('11',2) // 3


// parseFloat() : 소수점 특정 자리까지 표시하기
let padding = '18.5%';
parseInt(padding); // 18
parseInt(padding); //18.5


// Math.random() : 0 ~ 1 사이 무작위 숫자 생성
Math.random() // 0.2457723435547
// 1 ~ 100 사이 임의의 숫자를 뽑고 싶다면?
Math.floor(Math.random() *100)+1



// 문자열 메소드
let html = <'div class = "Box_title"> 제목 영역 </div?';
let desc = "It's 3 o'clock"

// 여러줄
let desc = '오늘은 맑고 화창한 날씨가 계속 되겠습니다. 내일은 비 소식이 있습니다.';
let desc = '오늘은 맑고 화창한 \n날씨가 게속 되겠습니다.'
let desc = '오늘은 맑고 화창한 // error!'
내일은 비소식이 있습니다.;

// length : 문자열 길이
let desc = '안녕하세요.';
desc.length // 6

// 특정 위치에 접근
let desc = '안녕하세요.'
//          0 1 2 3 4 5
desc[2] // '하'
desc[4] = '용';
console.log(desc); 
안녕하세요.

// toUpperCass(대문자로 return) / toLowerCase(소문자로 return)
let desc = "Hi guys. Nice to meet you.";
desc.toUpperCase();
"HI GUYS NICE TO MEET YOU"
desc.toLowerCase();
"hi guys. nice to meet you"

//str.indexOf(text) : 특정 문자의 index를 return 하는 method입니다.   
let desc = "Hi guys. Nice to meet you.";
desc.indexOf('to'); // 14
desc.indexOf('man'); // -1
if(desc.indexOf('Hi')) (> -1){
    console.log('Hi가 포함된 문장입니다.')
}

// str.sclice (n,m) 
//  n은 시작점 
// m은 없으면 문자열 끝까지 양수면 그 숫자까지 (포함하지 않는다.) 
// 음수면 끝에서 부터 숫자를 센다.
let desc = "abcdefg"
desc.slice(2) // "cdefg"
desc.slice(0.5) // "abcde"
desc.slice(2, -2) // "cde"

// str.substring(n,m)
// n과 m사이 문자열 반환, n 과 m 을 바꿔도 동작을 한다. 음수는 0으로 인식한다.
let desc = "abcdefg";
desc.substring(2,5); // "cde"
desc.substring(5,2); // "cde"

// str.substr(n,m)
// n 부터 시작 m개를 가져온다.
let desc = "abcdefg";
desc.substr(2,4); // "cdef"
desc.substr(-4,2); // "de"

// str.trim() : 앞 뒤 공백 제거
let desc = " coding         ";
desc.trim(); // "coding"

// str.repeat(n) : n번 반복
let hello = "hello!";
hello.repeat(3); //"hello!hello!hello!"

// 문자열 비교
1 < 3 // true
"a" < "c" // true
"a". codePointAt(0); //97
String.fromCodePoint(97) // "a"

// 예시
let list = {
    "01. 들어가며"
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열"
};
let newList = [];

for (let i = 0; i < list.length; i++) {
    newList.push(list[i].slice(4));
}
console.log(newList);

// 금칙어 : 콜라
// includes : 문자가 있으면 true 없으면 flase 로 반환
function hasCola(str) {
    if str.indexOf ("콜라") >-1{
        console.log("금칙어가 있습니다.");
    } else {
        console.log("통과");
    }
}
hasCola("와 사이다가 짱이야!"); // 통과 -1
hasCola("무슨소리, 콜라가 최고") // 금칙어가 있습니다.
hasCola("콜라") // 금칙어가 있습니다. 0


// 배열 메소드
// Array
// push(): 뒤에 삽입
// pop() : 뒤에 삭제
// unshift() : 앞에 삽입 
// shift() : 앞에 삭제

// arr.splice(n(시작), m(개수)) : 특정 요소 지움
let arr = [1,2,3,4,5];
arr.splice(1,2);
console.log(arr); // [1,4,5]

// arr.splice(n,m,x) : 특정 요소 지우고 추가
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 3, 100, 200);
console.log(arr); // [1, 100, 200, 5]

// arr.splice() : 삭제된 요소 반환
let arr = [1, 2, 3, 4, 5];
let result = arr.splice(1, 2);
console.log(arr); // [1,4,5]
console.log(result); // [2,3]
 
// arr.slice(n,m) : n부터 m 까지 반환
let arr = [1,2,3,4,5];
arr.slice(1,4); // [2,3,4]
let arr2 = arr.slice();
console.log(arr2); // [1,2,3,4,5]

arr.concat(arr2, arr3, ..) : 합쳐서 새배열 반환
let arr = [1,2];
arr.concat([3,4]); // [1,2,3,4]
arr.concat([3,4], [5,6]); // [1,2,3,4,5,6]
arr.concat([3,4],5,6); // [1,2,3,4,5,6]

// arr.forEach(fn) : 배열 반복
let users = ['Mike', "Tom", "Jane"];
users.forEach((item, index, arr)) => {
//..           Mike    0     users
};         //  Tom     1
           // Jane     2

let users = ['Mike', "Tom", "Jane"];
arr.forEach((name, index)) => {
    console.log('${index}. ${name}');
};

// arr.indexOF / arr.lastIndexOf : 배열 특정 값 위치 찾기
let arr = [1,2,3,4,5,1,2,3];
arr.indexOf(3); // 2
arr.indexOf(3,3) // 7
arr.lastIndexOf(3); // 7

// arr.includes() : 포함하는지 확인
let arr = [1,2,3];
arr.includes(2); // true
arr.includes(8); // false

// arr.find(fn) / arr.findIndex(fn)
// 첫번째 true 값만 반환하고 끝
// 만약 없으면 undefined를 반환
let userList = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Tom", age: 310},

];
const result = userList.findIndex(user) => {
  if (user.age < 19) {
    return true;
  }
  return false; 
};
console.log(result);

// arr.reverse () : 역순으로 재정렬
let arr = [1,2,3,4,5];
arr.reverse(); // [5,4,3,2,1]

// arr.map(fn)
// 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환한다.
let userList = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Tom", age: 310},

];
let newUserList = userList.map((user, index)) => {
    return Object,assign({}, user, {
        isAdult: user.age > 19,
    });
}
console.log(newUserList);

//split
const Users = "Mike, Jane, Tom, Tony";
let str = 'Hello, My name is Mike';
const result = users.split(",");
console.log (result);

// Array, isAyrray()
let User = {
    name : "Mike",
    age : 30,
};
let userList = {"Mike", "Tom", "Jane"};
console.log(typeof user);
console.log(typeof userList);
console.log(Array.isArray(user));
console.log(Array userList);