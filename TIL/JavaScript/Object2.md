# 생성자를 이용한 객체 만들기
생성자를 이용해서 객체를 만들 때는 `new` 키워드를 사용한다.

- 공통된 속성을 가진 객체들을 생성할때 재사용할 수 있음
- 객체를 하나만 만들 때는 간단히 json 표기법으로 생성
- 여러 객체를 만들고 싶을 때는 생성자를 통해서 생성

```js
var Person = function(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.eat = function(food) {
    console.log(`${this.name}님이 ${food}를 먹습니다.`)
  }
  this.interview = function () {
    console.log(`${this.name}님이 면접을 봅니다.`);
  }
}

// 생성자 함수를 이용한 객체 생성
var Sonny = new Person("영산", 31, "구직중"); //{name: "영산", age: 31, job: "구직중", eat: ƒ, interview: ƒ}
Sonny.eat("닭가슴살"); // "Sonny님이 닭가슴살를 먹습니다."
Sonny.interview(); // "Sonny님이 면접을 봅니다."
```
### ※ Sonny는 참조변수

# 참조변수
객체(함수, 배열 포함)를 변수에 할당하면 참조변수가 되고, 기본 타입을 변수에 할당하면 일반 변수가 된다.

## 참조변수의 동작 방식
같은 사람을 이름으로도 부르고, 별명으로도 부르고, 직위, 관계에 따라서 다양한 호칭으로 부르는것과 참조 변수라는 의미를 비슷한 관점에서 바라볼 수 있다.

-  ※객체를 참조하는 변수에서 변경할 경우 원본도 변경된다. 


```js
var Sonny = {name: "영산", age: 31};
var zeromountain = Sonny;
Sonny === zeromountain; // true
zeromountain.name = "yeongsan";
Sonny === zeromountain; // true
```

## 함수 호출시의 변수
- 값 전달 (Call by value)

```js
var foo_v = function(v) {
  v = v * 2;
  console.log(v);
}
var a = 10;
foo_v(a); // 20
console.log(a); // 10
```


- 참조 전달 (Call by reference)

```js
var diet = function(ref) {
    ref.w -= 1;
    console.log(`${ref.name}, ${ref.w}`);
}

var Sonny = {name: "영산", w: 70};
diet(Sonny);
console.log(Sonny); // {name: "영산", w: 69}
```

# 객체와 프로토타입

- 생성자로 만든 객체는 프로토타입이라는 속성을 가진다.
- 프로토타입을 이용해 객체의 메서드 생성하면 메모리를 절약하고 효율적으 메서드를 생성할 수 있다.

```js
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

Human.prototype.work = function() {
  console.log(`${this.name}님은 ${this.job} 일을 합니다.`);
}

var Sonny = new Person("영산", 31, "프로그래머");
Sonny.work(); // "영산님은 프로그래머 일을 합니다."
```
