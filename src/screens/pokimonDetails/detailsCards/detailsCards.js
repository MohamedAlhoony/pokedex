import React from 'react';
import {Card, Paragraph} from 'react-native-paper';
import {
  FlatList,
  SafeAreaView,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
const renderItem = item => {
  return (
    <Card style={{marginTop: 10}}>
      <Card.Title title={item.item.title} subtitle={item.item.subtitle} />
      <Card.Content>
        <Paragraph>{item.item.value}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const DetailsCards = ({cards}) => {
  return (
    <FlatList
      data={cards}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />
  );
};

export default DetailsCards;
