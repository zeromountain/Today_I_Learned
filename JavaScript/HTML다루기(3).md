# 브라우저의 구조
## window 객체

![윈도우객체](https://images.velog.io/images/zero_mountain/post/5ef306fe-ea6d-423e-ac70-84563c009b60/image.png)

- 브라우저를 전반적으로 관리하며 자바스크립트 최상단에 존재하는 전역 객체(global object)

## DOM 
![DOM구조](https://images.velog.io/images/zero_mountain/post/98d361a3-834c-4e22-bb40-643f522a783b/image.png)

- 문서객체모델(Document Object Model)
- HTML 문서 전체를 객체로 표현
- 각 계층의 개체를 노드라고 표현: 태그-요소노드, 문자-텍스트노드
### DOM 트리
- DOM의 계층 구조를 나무에 비유해 DOM 트리라 칭함
- 각 노다 간의 관계는 부모, 자식, 형제로 나뉨

### 1. DOM 이동 시 활용 가능한 프로퍼티

|프로퍼티|유형|결과|
|:---:|:---:|:---:|
|element.children|자식 요소 노드|element의 자식 요소 모음(HTMLCollection)|
|element.firstElementChild|	자식 요소 노드|	element의 첫 번째 자식 요소 하나|
|element.lastElementChild|	자식 요소 노드|	element의 마지막 자식 요소 하나|
|element.parentElement|	부모 요소 노드|	element의 부모 요소 하나|
|element.previousElementSibling|	형제 요소 노드|	element의 이전(previous) 혹은 좌측(left)에 있는 요소 하나|
|element.nextElementSibling|	형제 요소 노드|	element의 다음(next) 혹은 우측(right)에 있는 요소 하나|
|node.childNodes|	자식 노드|	node의 자식 노드 모음(NodeList)|
|node.firstChild|	자식 노드|	node의 첫 번째 자식 노드 하나|
|node.lastChild|	자식 노드|	node의 마지막 자식 노드 하나|
|node.parentNode|	부모 노드|	node의 부모 요소 하나|
|node.previousSibling|	형제 노드|	node의 이전(previous) 혹은 좌측(left)에 있는 노드 하나|
|node.nextSibling|	형제 노드|	node의 다음(next) 혹은 우측(right)에 있는 노드 하나|

### 2. 주요 요소 노드 프로퍼티

|프로퍼티|내용|참고사항|
|:---:|:---:|:---:|
|element.innerHTML|	요소 노드 내부의 HTML코드 문자열로 리턴|요소 안의 정보를 확인할 수도 있지만, 내부의 HTML 자체를 수정할 때 좀 더 자주 활용|
|element.outerHTML|	요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴| outerHTML은 새로운 값을 할당하면 요소 자체가 교체되어 버리기 때문에 주의|
|element.textContent|요소 노드 내부의 내용들 중에서 HTML을 제외하고 텍스트만 리턴|textContent는 말그대로 텍스트만 다루기 때문에 HTML태그를 쓰더라도 모두 텍스트로 처리됨|

## 요소 노드 다루기
|기능|문법|설명|
|:---:|:---:|:---:|
|요소 노드 만들기|document.createElement(<생성할요소>)|HTML 문서에 <생성할요소>에 해당하는 HTML element를 생성|
|요소 노드 꾸미기|element.textContent, element.innerHTML, element.outerHTML|해당 element에 요소 노드를 삽입(각 속성별 차이점 구분할 필요가 있음)|
|요소 노드 추가 혹은 이동하기|element.prepend|기준 element 자식요소 앞에 내용 삽입|
|요소 노드 추가 혹은 이동하기|element.append|기준 element 자식 요소 뒤에 내용 삽입|
|요소 노드 추가 혹은 이동하기|element.after|기준 element의 뒤에 내용 삽입|
|요소 노드 추가 혹은 이동하기|element.before|기준 element의 앞에 내용 삽입|
|요소 노드 삭제하기|element.remove()|기준 element를 삭제|

## HTML 속성 다루기

|기능|문법|
|:---:|:---:|
|속성에 접근하기|element.getAttribute('속성')|
|속성 추가(수정)하기|element.setAttribute('속성', '값')|
|속성 제거하기|element.removeAttribute('속성')|

## 자바스크립트로 태그의 스타일을 다루는 방법

- style 프로퍼티 활용하기: element.style.styleName = 'value';
- class 변경을 통해 간접적으로 스타일 적용하기: element.className, element.classList

|메소드|내용|참고사항|
|:---:|:---:|:---:|
|classList.add|	클래스 추가하기|	여러 개의 값을 전달하면 여러 클래스 추가 가능|
|classList.remove|	클래스 삭제하기|	여러 개의 값을 전달하면 여러 클래스 삭제 가능|
|classList.toggle|	클래스 없으면 추가, 있으면 삭제하기|	하나의 값만 적용 가능하고, 두 번째 파라미터로 추가 또는 삭제 기능을 강제할 수 있음|

