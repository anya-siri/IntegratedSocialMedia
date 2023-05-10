import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const route = useRoute();
  const { searchTerm } = route.params;

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <View style={{ padding: 16, minHeight: "95%" }}>
      <Text style={{ fontWeight: "bold", fontSize: 20, color: "white", marginBottom: 16 }}>
        Search Results for <Text style={{ color: "#FC1503" }}>{searchTerm}</Text> videos
      </Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={{ marginRight: 100 }} />
        {videos && <Videos videos={videos} />}
      </View>
    </View>
  );
};

export default SearchFeed;
