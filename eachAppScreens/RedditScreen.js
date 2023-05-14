import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking, StatusBar, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const API_URL = 'https://www.reddit.com/r/popular.json';

const RedditScreen = () => {
  const [topics, setTopics] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        const data = response.data.data.children;
        const topicsData = data.map(item => ({
          id: item.data.id,
          title: item.data.title,
          url: item.data.url,
          subreddit: item.data.subreddit,
          thumbnail: item.data.thumbnail,
          ups: item.data.ups,
          downs: item.data.downs,
        }));
        setTopics(topicsData);
      })
      .catch(error => console.error(error));
  }, []);

  const handleTopicPress = (url) => {
    // Open the URL in a browser or webview
    const fullUrl = url.startsWith('http') ? url : `https://www.reddit.com${url}`;
    Linking.openURL(fullUrl);

    // Navigate back to the Reddit screen
    navigation.goBack();
  }

  const renderTopicItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleTopicPress(item.url)} style={styles.topic}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.subredditContainer}>
            <Text style={styles.subredditText}>{item.subreddit}</Text>
          </View>
          <View style={styles.votesContainer}>
            <Text style={styles.votesText}>👍 {item.ups}  👎 {item.downs}</Text>
          </View>
        </View>
        <View style={styles.separator} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Text style={styles.heading}>#Trending Subreddits</Text>
      <FlatList
        data={topics}
        keyExtractor={item => item.id}
        renderItem={renderTopicItem}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  list: {
    marginVertical: 8,
  },
  topic: {
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 16,
  },
  image: {
    width: 110,
    height: 110,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subredditContainer: {
    backgroundColor: '#E0E1E2',
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 6,
    alignSelf: 'flex-start',
  },
  subredditText: {
    fontSize: 12,
    color: '#333333',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  votesContainer: {
    marginTop: 8,
  },
  votesText: {
    fontSize: 14,
  },
});

export default RedditScreen;
