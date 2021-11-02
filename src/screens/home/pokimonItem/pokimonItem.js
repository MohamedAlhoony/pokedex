import React from 'react';
import {Card, Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const pokimonItem = props => {
  return (
    <Card style={styles.card}>
      <Card.Title title={props.item.name} />
      <Card.Cover
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.item.id}.png`,
        }}
      />
      <Card.Actions>
        <Button
          onPress={() => {
            props.navigation.navigate('PokimonDetailsScreen', {
              id: props.item.id,
            });
          }}>
          show details
        </Button>
      </Card.Actions>
    </Card>
  );
};
const styles = StyleSheet.create({card: {marginTop: 10}});
export default pokimonItem;
