#### Redux의 기본 요소들 알아보기

**Redux는 한 방향으로만 흐름**

- Redux 데이터 Flow(strict **unidurectuinal** data flow)
  1. Component(에서 어떠한 이벤트가 발생하면)
  2. Action(리듀서 함수에게 액션을 하라고 dispatch 시킴)
  3. Reducer(스토어 내부 상태 업데이트)
  4. Redux Store(새롭게 업데이트 된 상태를 이용해서 다시 렌더링)

---

**1. Action**

- Atcion은 간단한 **Javascript 객체**이고, 여기에는 우리가 수행하는 작업의 유형을 지정하는 **type 속성**이 있으며 선택적으로 Redux 저장소 일부 데이터를 보내는데 사용되는 **payload 속성**을 가질 수도 있다.

  `{type: 'FETCH_USER_SUCCESS}, response: {id: 3, name: 'JinYeong}`

  `{type: 'FETCH_USER_SUCCESS, text: 'Read the Redux docs'}`

**2. Reducer**

- 리듀서는 애플리케이션 상태의 변경 사항을 결정하고 **업데이트 된 상태를 반환**하는 함수이고, 그들을 인수로 조치를 취하고 **store 내부의 상태를 업데이트**한다.
  `(previousState, action) => nextState`
- 이전 State와 action object를 받은 후 next state를 return함.
- **Reducer는 pure function이기에 reducer 내부에서 하지 말아야 할 것들!**
  - Mutate its arguments;
  - Perform side effects like API calls and routing transitions;
  - Call non-pure functions, e.g.`Data.now()` or `Math.random()`

**3. Redux Store**

- 객체 저장소 Redux Store는 애플리케이션의 **전체 상태 트리를 보유**함.
- **내부 상태를 변경하는 유일한 방법은 해당 상태에 대한 Action을 전달 하는 것.**
- Redux Store는 클래스가 아님 몇 가지 Methods가 있는 객체일 뿐.

**4. Dispatch**

- Dispatch는 스토어의 내장 함수중 하나로 리듀서 함수에 Action을 발생하라고 시킴.
- dispatch(action) 이런 식으로 Action을 인자로 넘겨서 사용.
