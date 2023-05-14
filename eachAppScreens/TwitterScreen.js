// import React, { useState, useEffect, useCallback } from 'react';
// import { View, Text, FlatList, TextInput, Button } from 'react-native';
// import axios from 'axios';

// const API_URL = 'https://api.twitter.com/2';
// const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAMGwnQEAAAAAH7vRXV7RULyXt9xgC3glQ7UQ7CA%3D2VsvvJ3Ay1d3457XY00fcfim0FctJGjPuJuGmZRwYkUbIlDcYu';

// const TwitterScreen = () => {
//   const [trendingTopics, setTrendingTopics] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [tweets, setTweets] = useState([]);

//   useEffect(() => {
//     // Fetch the trending topics for the United States
//     const fetchTrendingTopics = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/trends/place.json?id=23424977`, {
//           headers: {
//             Authorization: `Bearer ${BEARER_TOKEN}`
//           }
//         });
//         setTrendingTopics(response.data[0].trends);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };
//     fetchTrendingTopics();
//   }, []);

//   const handleSearch = useCallback(async () => {
//     console.log('Search term:', searchTerm);
//     if (searchTerm) {
//       // Search for tweets containing the entered search term
//       try {
//         const response = await axios.get(`${API_URL}/2/tweets/search/recent`, {
//           headers: {
//             Authorization: `Bearer ${BEARER_TOKEN}`
//           },
//           params: {
//             query: searchTerm
//           }
//         });
//         console.log('Response:', response.data);
//         setTweets(response.data.data);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     }
//   }, [searchTerm]);  

//   const renderItem = ({ item }) => (
//     <View style={{ borderWidth: 1, borderColor: 'gray', margin: 5, padding: 5 }}>
//       <Text>{item.user.name}</Text>
//       <Text>{item.text}</Text>
//     </View>
//   );

//   const renderTopicItem = ({ item }) => (
//     <View style={{ borderWidth: 1, borderColor: 'gray', margin: 5, padding: 5 }}>
//       <Text>{item.name}</Text>
//       <Text>{item.url}</Text>
//       <Text>{item.tweet_volume} tweets</Text>
//     </View>
//   );

//   return (
//     <View>
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//         onChangeText={text => setSearchTerm(text)}
//         value={searchTerm}
//       />
//       <Button
//         title="Search"
//         onPress={handleSearch}
//       />
//       <FlatList
//         data={trendingTopics}
//         renderItem={renderTopicItem}
//         keyExtractor={item => item.name}
//       />
//       <FlatList
//         data={tweets}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </View>
//   );
// };

// export default TwitterScreen;


import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function TwitterScreen() {
  const [trendingTweets, setTrendingTweets] = useState([]);

  useEffect(() => {
    axios.get('https://api.twitter.com/1.1/trends/place.json', {
      headers: {
        'Authorization': 'AAAAAAAAAAAAAAAAAAAAAMGwnQEAAAAAH7vRXV7RULyXt9xgC3glQ7UQ7CA%3D2VsvvJ3Ay1d3457XY00fcfim0FctJGjPuJuGmZRwYkUbIlDcYu'
      },
      params: {
        id: '1' // Use 1 for global trends, or get the WOEID for other locations
      }
    })
    .then(response => {
      const trends = response.data[0].trends;
      setTrendingTweets(trends);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending Tweets and Hashtags</Text>
      <View style={styles.trendingContainer}>
        {trendingTweets.map((trend, index) => (
          <View key={index} style={styles.trendingItem}>
            <Text style={styles.trendingRank}>{index + 1}</Text>
            <Text style={styles.trendingText}>{trend.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  trendingContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  trendingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  trendingRank: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  trendingText: {
    fontSize: 16,
  },
});

