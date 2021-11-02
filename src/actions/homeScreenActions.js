import {fetchPokimonDetails} from './pokimonDetailsScreenActions';
export const fetchInitialData = () => {
  return async (dispatch, getState) => {
    const {limit, offset} = getState().homeReducer;
    try {
      dispatch(isLoading(true));
      const body = await fetchPokimons({limit, offset});
      dispatch(isLoading(false));
      dispatch({
        type: 'homeScreen-pokimonsList',
        data: normalizePokimonsResults(body.results),
      });
    } catch (error) {
      dispatch(isLoading(false));
      alert('network error');
    }
  };
};
export const handlePullToRefresh = () => {
  return async (dispatch, getState) => {
    dispatch({type: 'homeScreen-offset', data: 0});
    dispatch({type: 'homeScreen-limit', data: 5});
    const {limit, offset} = getState().homeReducer;
    dispatch({
      type: 'homeScreen-pokimonsList',
      data: [],
    });
    try {
      dispatch({type: 'homeScreen-isRefreshing', data: true});
      const body = await fetchPokimons({limit, offset});
      dispatch({
        type: 'homeScreen-pokimonsList',
        data: normalizePokimonsResults(body.results),
      });
      dispatch({type: 'homeScreen-isRefreshing', data: false});
    } catch (error) {
      alert('network error');
      dispatch({type: 'homeScreen-isRefreshing', data: false});
    }
  };
};
const isLoading = (value) => {
  return (dispatch) => {
    dispatch({
      type: 'homeScreen-isLoading',
      data: value,
    });
  };
};
const normalizePokimonsResults = (results) => {
  // extract id from url
  return results.map((item) => {
    const splitedURL = item.url.split('/');
    const id = splitedURL[splitedURL.length - 2];
    return {...item, id};
  });
};
export const handleSearching = () => {
  return async (dispatch, getState) => {
    try {
      const search = getState().homeReducer.search.toLowerCase();
      if (search === '') {
        return;
      }
      dispatch({type: 'homeScreen-searchedPokimon', data: null});
      dispatch({type: 'homeScreen-isSearching', data: true});
      const body = await fetchPokimonDetails({name: search});
      if (body) {
        dispatch({type: 'homeScreen-searchedPokimon', data: body});
      }
      dispatch({type: 'homeScreen-isSearching', data: false});
    } catch (error) {
      dispatch({type: 'homeScreen-isSearching', data: false});
    }
  };
};
export const handleInputChange = (value) => {
  return (dispatch) => {
    dispatch({type: 'homeScreen-search', data: value});
  };
};

const fetchPokimons = ({limit, offset}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
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

export const handleLoadMore = () => {
  return async (dispatch, getState) => {
    const {limit, offset, pokimonsList} = getState().homeReducer;
    const newOffset = offset + limit;
    dispatch({
      type: 'homeScreen-offset',
      data: newOffset,
    });
    dispatch({type: 'homeScreen-isLoadingMore', data: true});
    try {
      const body = await fetchPokimons({limit, offset: newOffset});
      dispatch({
        type: 'homeScreen-pokimonsList',
        data: pokimonsList.concat(normalizePokimonsResults(body.results)),
      });
      dispatch({type: 'homeScreen-isLoadingMore', data: false});
    } catch (error) {
      alert('network error');
    }
  };
};
