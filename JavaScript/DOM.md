# HTML
- HyperText Markup Language
- World Wide Web의 3요소
- 팀 버너스리

## 엘리먼트(Element)
- open tag와 close tag로 구성
- tag 사이에 contents를 가짐
- tag 안에 속성과 속성의 값을 가질 수 있음
- close tag가 없는 tag도 있음 (img, br, input)

## 속성(Attributes)
객체의 속성과 비슷하게 엘리먼트도 속성을 가질 수 있다.

```html
<a href="google.com" title="구글">
```

## 블록 엘리먼트
`p, h1, div`와 같이 줄바뀜이 있는 엘리먼트

## 인라인 엘리먼트
`span, img, input, a` 처럼 줄바뀜이 없는 엘리먼트

# HTML과 JS 분리하기
- dom.html
```html
<!DOCTYPE html>
<meta charset="UTF-8">
<html>
  <head>
    <title>HTML Tutorial</ttle>
  </head>
  <body>
    <h1>This is a heading</h1>
    <h1>Another h1 heading</h1>
    <p id='main'>This is a paragraph.</p>

    <script src="./dom_test.js"></script>
  </body>
</html>
```

- dom_test.js
```js
var msg = "Hello";
alert(msg);
```

# DOM
- 문서를 객체를 이용해 계층 구조로 표현
- 표준: W3CDOM
- 구현체: Gecko, Webkit

## html 객체
HTML 문서도 객체로 간주
- window: 최상위 객체
- document: dom의 최상위 객체이면서 window의 하위 객체
```js
var list = document.getElementsByTagName('h1');
list[0].innerHTML;
list[0].innerHTML = "Hello";
```

```js
var list = document.getElementById('main');
main.innerHTML = "Hello";
```

# JS로 DOM 제어하기
모든 HTML 엘리먼트는 객체이므로 다른 객체와 마찬가지로 JS로 제어 가능

## DOM 객체의 값 바꾸기

```js
var element = document.getElementById('id')
element.innerHTML = '값'
```

```html
<h2>My First Page</h2>
<p id="test"></p>

<script>
var p = document.getElementById("test");
p.innerHTML = "Hello World!";
</script>
```
