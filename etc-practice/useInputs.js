import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state, // name:~, nickname:~,
    [action.name]: action.value, // action -> e.target
  };
}

// initialForm 초기값 - name:~, nickname:~,
export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target); // dispatch(action);
  };
  return [state, onChange];
}
