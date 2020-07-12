import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'

import Album from './Album';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { 
    id: 1, 
    imageURL: "https://cdn.mos.cms.futurecdn.net/mnV9eZvGn96ocimedMVDfg.jpg",
  },
  { 
    id: 2, 
    imageURL: "https://cf.shopee.vn/file/31afe487127853e9aaaaff72828619b4",
  },
  { 
    id: 3, 
    imageURL: "https://2sao.vietnamnetjsc.vn/images/2018/09/13/10/16/anh-the-02.jpg",
  },
  { 
    id: 4, 
    imageURL: "https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/sm86swd3xblaftc7_1589441088.jpeg?tr=w-812,h-464",
  },
];

export default function Account({inforAccount}) {
  return(
    <View>
      <View style={styles.account}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://znews-photo.zadn.vn/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg" }}
          resizeMode="contain"
        >
        </Image>
        <View style={styles.information}>
          <Text style={styles.name} > {inforAccount.name} </Text>
          <Text style={styles.job} > {inforAccount.job} </Text>
          <View style={styles.wrapperConnection}>
            <View style={styles.wrapperFollow}>
              <Text style={styles.Follow}> Follow </Text>
            </View>
            <View style={styles.wrapperIconSend}>
              <Feather name="send" style={styles.iconSend}></Feather>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.countAll}>
        <View style={styles.countWrapper}>
          <Text style={styles.count}>210</Text>
          <Text style={styles.countText}>Photos</Text>
        </View>
        <View style={styles.countWrapper}>
          <Text style={styles.count}>15k</Text>
          <Text style={styles.countText}>Followers</Text>
        </View>
        <View style={styles.countWrapper}>
          <Text style={styles.count}>605</Text>
          <Text style={styles.countText}>Following</Text>
        </View>
      </View>
      {/* Album */}
      <View style={styles.album}>
        <Album imgData={imgData}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  account: {
    flexDirection: "row",
    height: 80,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  information: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  job: {
    fontSize: 16,
    color: "#aaa",
    marginVertical: 4,
  },
  wrapperConnection: {
    flexDirection: "row",
  },  
  wrapperFollow: {
    backgroundColor: FOLLOW_COLOR,
    paddingVertical: 5,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginRight: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },  
  Follow: {
    color: "#fff",
  },
  wrapperIconSend: {
    backgroundColor: SEND_MESSAGE_COLOR,
    paddingHorizontal: 18,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  iconSend: {
    fontSize: 16,
    color: "#fff"
  },
  countAll: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  countWrapper: {
    alignItems: "center",
    marginVertical: 20,
  },
  count: {
    fontSize: 24,
    fontWeight: "500",
  },
  countText: {
    fontSize: 15,
    color: "#aaa"
  },
  album: {
    flex: 1,
  }
});