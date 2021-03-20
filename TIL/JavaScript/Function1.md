# 함수란
수학의 함수와 상당히 유사하다
```js
// 수학에서의 함수
f(x) = 2x + 3
f(2) = 7 
f(3) = 9
// 매개변수(인풋)의 값에 따라서 반환되는 값(아웃풋)이 달라진다.
```

```js
var foo = function(x) {
  return 2 * x + 3
}
var y = foo(2);
var z = foo(3);
// y와 z를 출력해 보면 매개변수에 따라 다른 결과 값이 출력되는 것을 확인할 수 있다.
console.log(y); // 7 
console.log(z); // 9
```

# 함수 만들기
```js
// 매개변수가 없는 함수
var foo = function() {
  console.log("Hello, Function!");
}
// 함수 호출
foo(); // "Hello, Function!"

// 매개변수가 있는 함수
var foo2 = function(name) {
  console.log("Hello, " + name + "!");
}

foo2(Sonny); // "Hello, Sonny!"
```

# 리턴 값이 있는 함수
리턴 값이 있는 함수일 경우 함수를 호출해 변수에 값을 넣을 수 있다.
리턴 값이 없는 함수를 변수에 할당할 경우 변수에는 undefined가 할당된다.
```js
var five = function(){
  return 5;
}

var num = five();
console.log(num); // 5
```

# 리턴의 활용
- `return`은 함수를 종료시킨다.!
- 반복문에서 `break`는 루프 하나를 빠져나가지만
- 함수의 `return`을 이용하면 2중 루프를 한 번에 종료할 수 있음(루프가 함수 안에 있어야 함)
```js
var test1 = function(text) {
  if (text === "exit") {
    return;
  }   
  console.log("보이나요?");    
}

test1("Sonny"); // "보이나요?"
test1("exit"); // undefined
```

# 함수의 장점
- 가독성이 좋아지고
- 유지보수에 용이함

# How to make Function
- 매개 변수와 리턴을 적극 활용
- 반복되는 코드, 들여쓰기가 많은 코드는 함수로 재사용이 가능하도록 구현
- 함수는 반드시 한 가지의 처리만 하도록 구현
