import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRoute } from '@react-navigation/native';
import Video from "react-native-video";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { params: { id } } = useRoute();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <ScrollView style={{ minHeight: "95%" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <View style={{ width: "100%", position: "sticky", top: 0 }}>
            <Video source={{uri: `https://www.youtube.com/watch?v=${id}`}} style={{height: 200}} controls />
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", padding: 10 }}>
              {title}
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", color: "#fff", paddingVertical: 10, paddingHorizontal: 20 }}>
              <TouchableOpacity onPress={() => navigation.navigate('Channel', { channelId })}>
                <Text style={{ fontSize: 16, color: "#fff", marginRight: 5 }}>
                  {channelTitle}
                </Text>
                <Icon name="check-circle" size={12} color="gray" />
              </TouchableOpacity>
              <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
                <Text style={{ fontSize: 14, opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Text>
                <Text style={{ fontSize: 14, opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 5, justifyContent: "center", alignItems: "center" }}>
          <Videos videos={videos} direction="column" />
        </View>
      </View>
    </ScrollView>
  );
};

export default VideoDetail;
