import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import {
  Appbar,
  Card,
  Button,
  Searchbar,
  ActivityIndicator,
  withTheme,
} from 'react-native-paper';
import * as actions from '../../actions/homeScreenActions';
import PokimonList from './pokimonList/pokimonList';
import Loader from '../../components/loader/loader';
import debounce from 'lodash.debounce';
const mapStateToProps = ({homeReducer}) => {
  return {
    pokimonsList: homeReducer.pokimonsList,
    search: homeReducer.search,
    isLoadingMore: homeReducer.isLoadingMore,
    isLoading: homeReducer.isLoading,
    isRefreshing: homeReducer.isRefreshing,
    isSearching: homeReducer.isSearching,
    searchedPokimon: homeReducer.searchedPokimon,
  };
};
const _handleInputChange = debounce((props) => {
  props.dispatch(actions.handleSearching());
}, 400);
const Home = (props) => {
  useEffect(() => {
    props.dispatch(actions.fetchInitialData());
  }, []);
  const handleInputChange = (value) => {
    props.dispatch({type: 'homeScreen-search', data: value});
    if (value.trim() === '') {
      props.dispatch({type: 'homeScreen-searchedPokimon', data: null});
      return;
    }
    if (value.trim() !== props.search.trim()) {
      _handleInputChange(props);
    }
  };
  const handleLoadMore = () => {
    props.dispatch(actions.handleLoadMore());
  };
  const handlePullToRefresh = () => {
    props.dispatch(actions.handlePullToRefresh());
  };
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="pokedex" />
      </Appbar.Header>
      {!props.isLoading ? (
        <View style={styles.container}>
          <SafeAreaView>
            <Searchbar
              placeholder="Search by name"
              onChangeText={handleInputChange}
              value={props.search}
            />
          </SafeAreaView>
          {props.search !== '' && props.isSearching ? (
            <View style={{alignItems: 'center', padding: 5}}>
              <ActivityIndicator color={props.theme.colors.primary} />
            </View>
          ) : props.search !== '' &&
            !props.isSearching &&
            !props.searchedPokimon ? (
            <View style={{alignItems: 'center', padding: 5}}>
              <Text>no resutls!</Text>
            </View>
          ) : null}
          {props.searchedPokimon && (
            <Card style={{marginTop: 10}}>
              <Card.Title title={props.searchedPokimon.name} />
              <Card.Cover
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.searchedPokimon.id}.png`,
                }}
              />
              <Card.Actions>
                <Button
                  onPress={() => {
                    props.navigation.navigate('PokimonDetailsScreen', {
                      id: props.searchedPokimon.id,
                    });
                  }}>
                  show details
                </Button>
              </Card.Actions>
            </Card>
          )}
          {props.search === '' && (
            <PokimonList
              isRefreshing={props.isRefreshing}
              handlePullToRefresh={handlePullToRefresh}
              {...props}
              isLoadingMore={props.isLoadingMore}
              pokimonsList={props.pokimonsList}
              handleLoadMore={handleLoadMore}
            />
          )}
        </View>
      ) : (
        <Loader />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  searchInput: {
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 0,
  },
});
export default connect(mapStateToProps)(withTheme(Home));
