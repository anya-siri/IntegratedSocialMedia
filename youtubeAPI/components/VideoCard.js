import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <TouchableOpacity onPress={() => videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
    <View style={{ width: '100%', height: 180 }}>
      <Image 
        source={{ uri: snippet?.thumbnails?.high?.url || demoThumbnailUrl }} 
        style={{ width: '100%', height: '100%' }} 
      />
    </View>
    <View style={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <TouchableOpacity onPress={() => videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Text style={{ fontWeight: 'bold', color: '#FFF', fontSize: 16, marginTop: 8, marginLeft: 8, marginRight: 8 }}>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8, marginTop: 4 }}>
          <Text style={{ color: 'gray', fontSize: 14 }}>
            {snippet?.channelTitle || demoChannelTitle}
          </Text>
          <Icon name="check-circle" size={12} color="gray" style={{ marginLeft: 5 }} />
        </View>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

export default VideoCard;
