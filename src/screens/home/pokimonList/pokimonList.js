import React from 'react';
import {withTheme} from 'react-native-paper';
import PokimonItem from '../pokimonItem/pokimonItem';
import {
  FlatList,
  SafeAreaView,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const pokimonList = (props) => {
  const renderFooter = () => {
    return (
      <View>
        <ActivityIndicator
          color={
            props.isLoadingMore ? props.theme.colors.primary : 'transparent'
          }
          size={'large'}
        />
      </View>
    );
  };
  const renderItem = ({item}) => <PokimonItem {...props} item={item} />;

  return (
    <SafeAreaView>
      <FlatList
        refreshing={props.isRefreshing}
        onRefresh={props.handlePullToRefresh}
        style={styles.pokimonList}
        data={props.pokimonsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={props.handleLoadMore}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  pokimonList: {marginBottom: 50},
});
export default withTheme(pokimonList);
