import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ height: "92vh", borderRightWidth: 1, borderRightColor: "#3d3d3d", paddingHorizontal: 2 }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Text style={{ marginTop: 1.5, color: "#fff" }}>
          Copyright © 2022 JSM Media
        </Text>
      </View>

      <ScrollView style={{ flex: 2, height: "90vh", paddingHorizontal: 2 }}>
        <Text style={{ fontWeight: "bold", marginBottom: 2, color: "white" }}>
          {selectedCategory} <Text style={{ color: "#FC1503" }}>videos</Text>
        </Text>

        <Videos videos={videos} />
      </ScrollView>
    </View>
  );
};

export default Feed;
