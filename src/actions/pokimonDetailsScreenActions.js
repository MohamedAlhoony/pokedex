export const fetchInitialData = ({id}) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const body = await fetchPokimonDetails({id});
      dispatch({
        type: 'pokimonDetailsScreen-pokimonDetails',
        data: body,
      });
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(isLoading(false));
      alert('network error');
    }
  };
};
const isLoading = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'pokimonDetailsScreen-isLoading',
      data: value,
    });
  };
};

export const fetchPokimonDetails = ({id, name}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id || name}`,
      );
      const body = JSON.parse(await response.text());
      if (response.status === 200) {
        resolve(body);
      } else {
        reject();
      }
    } catch (error) {
      reject(error);
    }
  });
};
