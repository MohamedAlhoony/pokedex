const defaultState = {
  isLoading: true,
  pokimonDetails: null,
};

const pokimonDetailsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'pokimonDetailsScreen-isLoading':
      return {
        ...state,
        isLoading: action.data,
      };
    case 'pokimonDetailsScreen-pokimonDetails':
      return {
        ...state,
        pokimonDetails: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default pokimonDetailsReducer;
