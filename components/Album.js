import React, { useState, Component, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

export default function Album({imgData}) {

  let [width, setWidth] = useState(0);
  let [height, setHeight] = useState(0);

  function getSize(imageUrl) {
    Image.getSize(imageUrl, (width, height) => {
      const aspectRatio = Math.floor(height / width);
      setWidth(200);
      setHeight(200 * aspectRatio);
      console.log(width);
      console.log(height);
    });
    
  }

  return (
      <FlatList
        numColumns="2"
        data={imgData}
        renderItem={ 
          ({item}) =>
            <View getSize={getSize(item.imageURL)}  style={{width: width, height: height}}>
              <Image 
                style={styles.image}  
                source={{uri: item.imageURL}} 
              />
            </View>
        }
        keyExtractor={ item => item.id}
      >
      </FlatList>
  )

};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    resizeMode: "cover",
    // width: 200,
    // height: 200, 
    marginRight: 12,
    marginBottom: 12,
    borderRadius: 16,
  }
})