import { fetchActionsTypes } from '../actions/fetchActions';

const initialState = {
  loading: false,
  scrollLoading: false,
  error: null,
  data: [],
};

const fetchReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case fetchActionsTypes.setLoading:
      return { ...state, loading: action.payload };
    case fetchActionsTypes.setScrollLoading:
      return { ...state, scrollLoading: action.payload };
    case fetchActionsTypes.setError:
      return { ...state, error: action.payload };
    case fetchActionsTypes.setData:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default fetchReducer;
