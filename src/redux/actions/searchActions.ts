import { SearchType } from '../../types';

export const searchActionsTypes = {
  setSearchType: 'SET_SEARCH_TYPE',
  setSearchText: 'SET_SEARCH_TEXT',
  setPageNumber: 'SET_PAGE_NUMBER',
};

export const setSearchType = (searchType:SearchType) => ({
  type: searchActionsTypes.setSearchType,
  payload: searchType,
});

export const setSearchText = (searchText:string) => ({
  type: searchActionsTypes.setSearchText,
  payload: searchText,
});

export const setPageNumber = (pageNumber:number) => ({
  type: searchActionsTypes.setPageNumber,
  payload: pageNumber,
});
