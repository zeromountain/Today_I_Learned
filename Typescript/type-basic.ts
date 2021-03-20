// JS 문자열 선언
var str = 'hello';

// TS 문자열 타입 선언
// str이라는 변수는 문자열 타입으로 정의하겠다.
var str: string = 'hello';
// TS 숫자 타입 선언
var num: number = 10;
// TS 배열 타입 선언
// 배열 안의 요소의 타입을 숫자 타입으로 정의
var arr: Array<number> = [1, 2, 3];
// 배열 안의 요소의 타입을 정의한 타입으로 입력하지 않으면 오류 발생
var heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10];
// 배열 리터럴을 활용한 타입 표현
var a: number = 10;
var items: number[] = [1, 2, 3, a];

//TS 튜플: 배열의 특정 인덱스의 타입을 정의하는 방법
let address: [string, number] = ['gangnam', 'pangyo'];
address = ['gangnam', 10];

// TS 객체
let obj: object = {};

let capt: object = {
  name: 'capt',
  age: 100
}

let thor: {name: string, age: number} = {
  name: 'thor',
  age: 1000
}

// TS 진위값: 불린타입
let show: boolean = true; 
