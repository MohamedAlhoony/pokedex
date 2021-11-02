import React from 'react';
import {withTheme} from 'react-native-paper';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
const Loader = (props) => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator color={props.theme.colors.primary} size="large" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default withTheme(Loader);
