const defaultState = {
  isLoading: true,
  isLoadingMore: false,
  isRefreshing: false,
  search: '',
  pokimonsList: [],
  offset: 0,
  limit: 5,
  searchedPokimon: null,
  isSearching: false,
};

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'homeScreen-searchedPokimon':
      return {
        ...state,
        searchedPokimon: action.data,
      };
    case 'homeScreen-isSearching':
      return {
        ...state,
        isSearching: action.data,
      };
    case 'homeScreen-offset':
      return {
        ...state,
        offset: action.data,
      };
    case 'homeScreen-limit':
      return {
        ...state,
        limit: action.data,
      };
    case 'homeScreen-isLoadingMore':
      return {
        ...state,
        isLoadingMore: action.data,
      };
    case 'homeScreen-isLoading':
      return {
        ...state,
        isLoading: action.data,
      };
    case 'homeScreen-isRefreshing':
      return {
        ...state,
        isRefreshing: action.data,
      };
    case 'homeScreen-search':
      return {
        ...state,
        search: action.data,
      };
    case 'homeScreen-pokimonsList':
      return {
        ...state,
        pokimonsList: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default homeReducer;
