import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const id = 'insert_your_channel_id_here';

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.channelCardContainer}>
        <View style={styles.gradientBackground} />
        <ChannelCard channelDetail={channelDetail} marginTop={-93} />
      </View>
      <View style={styles.videosContainer}>
        <Videos videos={videos} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '95%',
    flex: 1,
  },
  channelCardContainer: {
    position: 'relative',
  },
  gradientBackground: {
    height: 300,
    backgroundColor: 'rgba(0,238,247,1)',
    backgroundGradient: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
    zIndex: 10,
  },
  videosContainer: {
    padding: 10,
    flex: 1,
  },
});

export default ChannelDetail;
