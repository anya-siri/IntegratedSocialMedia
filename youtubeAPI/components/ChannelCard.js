import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <View
    style={{
      backgroundColor: '#000',
      borderRadius: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 320,
      height: 326,
      margin: 'auto',
      marginTop,
    }}
  >
    <TouchableOpacity onPress={() => { }}>
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
        <Image
          source={{ uri: channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }}
          style={{ borderRadius: 90, height: 180, width: 180, marginBottom: 2, borderWidth: 1, borderColor: '#e3e3e3' }}
        />
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
          {channelDetail?.snippet?.title}{' '}
          <MaterialIcons name="check-circle" style={{ fontSize: 14, color: 'gray', marginLeft: 5 }} />
        </Text>
        {channelDetail?.statistics?.subscriberCount && (
          <Text style={{ fontSize: 15, fontWeight: '500', color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Text>
        )}
      </View>
    </TouchableOpacity>
  </View>
);

export default ChannelCard;
