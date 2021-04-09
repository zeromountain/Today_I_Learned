# Why need Promise
- 비동기 처리에서 발생하는 콜백 지옥으로부터 안구와 두뇌를 보호하기 위해서
``` js

function sleep(callback) {
  setTimeout(function() {
    callback();
  }, 1000);
}

// 함수 호출
sleep(function() {
  console.log('A');
  sleep(function(){
    console.log('B');
    sleep(function() {
      console.log('C');
    });
  });
});
```

# basic of Promise
- `Promise`는 비동기 처리를 실행하고 처리가 끝난 후에 다음 처리를 실행하기 위한 용도로 사용
- `Peomise` 생성자 사용법
```js
const promise = new Promise(function(resolve, reject) {// (1) ...});
```

- resolve: 함수 안(1)의 처리가 끝났을 때 호출해야 하는 콜백 함수
- reject: 함수 안(1)의 처리가 실패했을 때 호출해야 하는 콜백 함수
- then: `promise` 내부에서 resolve로 처리될 콜백 함수를 넘겨줌

```js
  const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
      const name = prompt("이름을 입력하세요.");
      resolve(name);
    }, 1000); 
  });
  promise.then( (name) => {
    console.log(`안녕하세요, ${name} 님!`);
  });
  // then 메서드의 콜백 함수는 프롬프트 창에서 이름을 성공적으로 입력받았을 때 실행된다.
```

- catch: `promise` 내부에서 reject로 처리될 경우 콜백 함수를 넘겨줌
`promise.catch(onRejected);`

```js
  const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
      const n = parseInt(prompt("10 미만의 숫자를 입력하세요.");
      if(n <= 10) {
        resolve(n);
      } else {
        reject(`오류 : ${n}은 10보다 큽니다.`);
      }
    }, 1000);
  });
  
  promise
  .then((num) => {
    console.log(`2^&{num} = ${Math.pow(2, num)}`);
  })
  .catch( (err) => {
    console.log(err);
  });
  
  // 프롬프트로 받은 숫자가 10 이하이면 then이 실행되고 10보다 크면 catch가 실행됨
```

# advanced Promise
- `Promise`로 비동기 처리 연결하기
```js

const buyAsync = (mymoney) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var payment = parseInt(prompt("지불할 금액을 입력하세요."));
      var balance = mymoney - payment;
      if( balance > 0) {
        console.log(`${payment}원을 지불했습니다.`);
        resolve(balance);
      } else {
        reject(`잔액은 ${mymoney}원 입니다. 구매할 수 없습니다.`);
      }
    }, 1000);
  });
};

buyAsync(500)
.then((balance) => {
  console.log(`잔액은 ${balance}원 입니다.`);
  return buyAsync(balance);
})
.then((balance) => {
  console.log(`잔액은 ${balance}원 입니다.`);
  return buyAsync(balance);
})
.then((balance) => {
  console.log(`잔액은 ${balance}원 입니다.`);
  return buyAsync(balance);
})
.catch((err) => {
  console.log(err);
});
```

- all: 비동기 처리 여러개를 병렬로 실행
- `Promise.all(iterable);` => 인자: 반복 가능한 객체
```js
const buyAsync = (name, mymoney) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var payment = parseInt(prompt(`${name}님, 지불하실 금액을 입력하세요.`));
      var balance = mymoney - payment;
      if( balance > 0) {
        console.log(`${name}님 ${payment}원을 지불했습니다.`);
        resolve(balance);
      } else {
        reject(`${name}님의 잔액은 ${mymoney}원으로 구매할 수 없습니다.`);
      }
    }, 1000);
  });
};

Promise.all([
  buyAsync("sonny", 500);
  buyAsync("yeongsan", 500);
  buyAsync("zeromountain", 500);
])
  .then((balance) => {
    console.log(balance);
  })
  .catch((err) => {
    console.log(err);
  });
```

- race: 가장 먼저 종료된 Promise 객체의 결과만 다음 작업으로 전달
- `Promise.race(iterable)`
```js
const buyAsync = (name, mymoney) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var payment = parseInt(prompt(`${name}님, 지불하실 금액을 입력하세요.`));
      var balance = mymoney - payment;
      if( balance > 0) {
        console.log(`${name}님 ${payment}원을 지불했습니다.`);
        resolve(balance);
      } else {
        reject(`${name}님의 잔액은 ${mymoney}원으로 구매할 수 없습니다.`);
      }
    }, 1000);
  });
};

Promise.race([
  buyAsync("sonny", 500),
  buyAsync("yeongsan", 500),
  buyAsync("zeromountain", 500)
])
  .then((balance) => {
    console.log(balance);
  })
  .catch((err) => {
    console.log(err);
  });
```
