export const fetchActionsTypes = {
  setLoading: 'SET_LOADING',
  setScrollLoading: 'SET_SCROLL_LOADING',
  setError: 'SET_ERROR',
  setData: 'SET_DATA',
};

export const setLoading = (loading:boolean) => ({
  type: fetchActionsTypes.setLoading,
  payload: loading,
});

export const setScrollLoading = (loading:boolean) => ({
  type: fetchActionsTypes.setScrollLoading,
  payload: loading,
});

export const setError = (error:string|null) => ({
  type: fetchActionsTypes.setError,
  payload: error,
});

export const setData = (data:any[]) => ({
  type: fetchActionsTypes.setData,
  payload: data,
});
