import { useLayoutEffect, useReducer } from 'react';

interface stateType {
  loading: boolean,
  error: string | null,
  data: [],
}

const useAxiosPromise = (
  promiseToResolve: () => Promise<any>,
  deps : [],
) => {
  const reducer = (prev: stateType, next: stateType) => ({ ...prev, ...next });
  const [state, setState] = useReducer(reducer, {
    loading: true,
    error: null,
    data: [],
  });

  useLayoutEffect(() => {
    (async () => {
      try {
        const result = await promiseToResolve();
        setState({ loading: false, error: null, data: result });
      } catch ({ response }) {
        if (response) {
          setState({ loading: false, error: response, data: [] });
        } else {
          setState({ loading: false, error: 'NetworkError', data: [] });
        }
      }
    })();
  }, deps);

  return state;
};

export default useAxiosPromise;
