# UseEffect와 생명주기
  클래스형 컴포넌트는 생명주기 메서드를 가지고 있고, 이를 활용해서 컴포넌트가 마운트 되었을때 발생하는 리렌더링을 조작할 수 있다.
  반면에, 훅스에서는 이러한 생명주기 메서드가 없기 때문에 useEffect 함수를 통해서 생명주기 메서드와 유사하게 조작할 수 있다.
  
 ```js
 useEffect(() => { // componentDidMount, componentDidUpdates 역할
  return () => {} // componentWillUnmount 역할 
 }, [])
 ```
