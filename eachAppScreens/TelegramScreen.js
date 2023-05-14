import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const TelegramScreen = () => {
  const [hashtags, setHashtags] = useState([]);

  const fetchTrendingHashtags = async () => {
    const API_TOKEN = '6066526361:AAFuM4aNFthrF5FX03xS9ZtnVlSsG19M8D0';
    const response = await axios.get(`https://api.telegram.org/bot${API_TOKEN}/getUpdates`);
    const hashtags = response.data.result;
    return hashtags.slice(0, 10);
  }

  useEffect(() => {
    fetchTrendingHashtags().then((hashtags) => {
      setHashtags(hashtags);
    });
  }, []);

  const renderHashtag = ({ item }) => (
    <Text>{item}</Text>
  );

  return (
    <View>
      <Text>Trending Hashtags:</Text>
      <FlatList
        data={hashtags}
        renderItem={renderHashtag}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default TelegramScreen;


// import testApiToken from '../eachAppTrendings/TeleTestApiToken';

// function TelegramScreen(){

// const API_TOKEN = '6066526361:AAFuM4aNFthrF5FX03xS9ZtnVlSsG19M8D0';

// testApiToken(API_TOKEN);
// }
// export default TelegramScreen;