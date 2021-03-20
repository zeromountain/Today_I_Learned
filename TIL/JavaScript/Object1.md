# 객체란 무엇인가
- 현실의 물체에 대응되는 개념
- 객체를 사용하면 변수와 함수를 묶어서 관리할 수 있음(클래스)
- 객체는 속성과 메소드를 가짐

# 객체 만들기
- 빈 객체 `var object = {}`
- 속성(객체는 mutable하기 때문에 속성을 변경할 수 있다.) 
```js
var object = {};
// 빈 객체에 속성 추가
object.name = "zeromountain";/
console.log(object.name); // zeromountain
object.name = "yeongsan";
console.log(object.name); // yeongsan
```
- 메소드
```js
var person = {
  name: "zeromountain"
};
person.eat = function(food) {
  console.log(`${this.name}님이 ${food}를 먹습니다.`)
}

person.eat("피자"); // zeromountain님이 피자를 먹습니다.
```
- 메소드 대신에 일반함수를 사용한다면
```js
eat(person, "피자");
```

# 객체지향 프로그래밍
- 유지보수가 쉬워짐
- 가독성이 높아짐
- 대규모 프로그램을 짜기 수월함

# 객체에서의 this 키워드
메소드 안에서 사용시 함수를 소유한 객체를 가르킴
```js
var pserson = {};
person.name = "zeromountain";
person.height = 170;
person.weight = 68;
person.eat = function(food) {
  console.log(`${this.name}이 ${food}를 먹습니다.`);
  this.weight += 0.5; 
}
person // {name: "zeromountain", height: 170, weight: 68, eat: function(food)~~~~~}
person.eat("피자"); // 문장을 출력함과 동시에 몸무게를 0.5 증가시킨다.
person // {name: "zeromountain", height: 170, weight: 68.5, eat: function(food)~~~~~}
```
