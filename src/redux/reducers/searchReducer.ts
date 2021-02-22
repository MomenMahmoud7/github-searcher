import { searchActionsTypes } from '../actions/searchActions';

const initialState = {
  searchType: { value: 'repositories', label: 'Repository' },
  searchText: '',
  pageNumber: 1,
};

const searchReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case searchActionsTypes.setSearchType:
      return { ...state, searchType: action.payload };
    case searchActionsTypes.setSearchText:
      return { ...state, searchText: action.payload };
    case searchActionsTypes.setPageNumber:
      return { ...state, pageNumber: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
