# 1 이벤트 핸들러 등록
- `Eelement.addEventListener(type, handler:function)`

# 2 이벤트 핸들러 삭제
- addEventListener 사용한 경우: `Element.removeEventListener(type, handler:function)`

# 3 이벤트 객체
- 이벤트가 발생하면 핸들러 함수에 파라미터로 이벤트 객체가 전달
- 이벤트 종류마다 프로퍼티 별개

# 4 이벤트 버블링
- 부모 요소로 이벤트가 전파
- 버블링 막는 메소드: `event.stopPropagation`

# 5 이벤트 위임
- 자식 요소에서 일일히 이벤트 핸들러를 등록할 필요 없이 부모 요소에서 이벤트를 한번에 관리 가능

# 6 브라우저의 기본 동작
- 링크(a태그) 클릭 시 href 경로로 이동함
- 마우스 우 클릭 시 메뉴창
- input 태그에 입력되는 문자
- 등등...
- 기본 브라우저 동작을 막는 방법: `event.preventDefault()`
