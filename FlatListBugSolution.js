// FlatListBugSolution.js
import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 100 }, (_, i) => ({ id: i, title: `Item ${i}` }));

const FlatListBugSolution = () => {
  const [data, setData] = useState(DATA);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  const updateData = () => {
    const newData = data.map((item) => ({ ...item, title: item.title + ' updated' }));
    setData(newData); 
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text onPress={updateData}>Update Data</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default FlatListBugSolution;