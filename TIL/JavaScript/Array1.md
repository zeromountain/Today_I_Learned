# 배열
- 자료구조의 하나
- 같은 종류의 값 여러 개를 묶어서 저장하고 관리하기 위해 사용
- 자바스크립트의 배열은 객체

[mdn 배열](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)

# 배열 만들기

기본적으로 변수에 빈 배열이나 원소가 들어 있는 배열을 할당해준다.
배열은 `mutable`하기 때문에 빈 배열에 원소를 추가,삭제,수정이 가능하다.

```js
var score = [50, 60, 80, 95];
console.log(score); // 배열 출력
console.log(score.length); // 배열의 길이(===원소의 갯수)를 알고 싶을 때 length 메소드 사용
```

# 인덱스를 이용한 원소 찾기
```js
var score = [50, 60, 80, 95];
// 배열의 인덱스는 0부터 시작
console.log(score[0]); // 50
console.log(score[1]); // 60
console.log(score[2]); // 80
console.log(score[3]); // 95
```

# 배열에 값 쓰기
자바스크립트에서 배열은 mutable한 속성이기 때문에 원소를 추가하거나 변경 할 수 있음
```js
var score = [50, 60, 80, 95];
score[0] = 100;
score[4] = 86;
console.log(score); // [100, 60, 80, 95, 86]
```

# 배열의 타입 알아보기
`typeof`연산자는 변수의 타입을 알아보기 위함
배열이 맞는지 확인하고 싶다면 `Array.isArray`메서드를 사용
```js
var score = [50, 60, 80, 95];
console.log(typeof score); // object
console.log(typeof score[0]); // number
```

# 문자열과 배열

- 문자열과 배열은 비슷한 성질을 많이 가지고 있음

|문자열|배열|
|:--:|:--:|
|immutable|mutable|

# 배열의 메서드
## push(), pop() 메서드

|push|pop|
|:--:|:--:|
|배열의 끝 인덱스에 원소 삽입|배열의 끝 인덱스의 원소를 뺌|

- 스택처럼 동작하는데 사용되기도 함

## shift(),unshift() 메서드

|shift|unshift|
|:--:|:--:|
|배열의 첫번째 인덱스에 원소 삽입|배열의 첫번째 인덱스의 원소를 뺌|
