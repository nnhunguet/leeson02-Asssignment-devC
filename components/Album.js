import React, { useState, Component, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

export default function Album({imgData}) {
  
  // function getSize(imageUrl) {
  //   Image.getSize(imageUrl, (width, height) => {
  //     const aspectRatio = Math.floor(height / width);
  //   });
  // }

  return (
      <FlatList
        numColumns="2"
        data={imgData}
        renderItem={ 
          ({item}) =>
            // <View 
            //   getSize={getSize(item.imageURL)}  
            //   style={{
            //       width: width, 
            //       height: height
            //   }}
            // >
              <Image 
                style={styles.image}  
                source={{uri: item.imageURL}} 
              />
            // </View>
        }
        keyExtractor={ item => item.id}
      >
      </FlatList>
  )

};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "46%",
    height: 200,
    resizeMode: "cover",
    // width: 200,
    // height: 200, 
    marginRight: 12,
    marginBottom: 12,
    borderRadius: 16,
  }
})