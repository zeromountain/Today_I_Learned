`if`,`for`,`while`과 같이 조건식이 필요한 부분에서 `boolean` 타입의 값들을 사용해야하지만 Falthy와 Truthy 값으로 이러한 부분을 대체할 수 있다.

# Falthy
- false로 평가되는 값 => `false` `null` `undefined` `NaN` `0` `''`

## falthy값 체크
```js
Boolean(false);
Boolean(null);
Boolean(undefined);
Boolean(NaN);
Boolean(0);
Boolean('');
```

# Truthy
- true로 평가되는 값 => false로 평가되는 값을 제외한 나머지
- `[]` , `{}` 빈 배열과 빈 객체도 true로 평가

## truthy값 체크
```js
Boolean(true);
Boolean('velog');
Boolean(123);
Boolean(-123);
Boolean({});
Boolean([]);
```

# 활용
```js
const language = ['JavaScript', 'Java', 'C', 'Go', 'Ruby'];

if('javascript') {
  console.log(language[0])
}

if(Number('javascript')) {
  console.log(language[0])
}
```
- 문자열 'javascript'는 true로 평가되어 출력되지만
- 문자열을 숫자로 형변환한 'javascript'는 false로 평가되어 출력되지 않음
