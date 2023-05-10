import React from "react";
import { View } from "react-native";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;

  return (
    <View style={{ flexDirection: direction || "row", flexWrap: "wrap", justifyContent: "flex-start", alignItems: "flex-start", marginVertical: 8 }}>
      {videos.map((item, idx) => (
        <View key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </View>
      ))}
    </View>
  );
}

export default Videos;
