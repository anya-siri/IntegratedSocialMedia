import { WebView } from 'react-native-webview';

function SnapchatScreen(){

return (
    <WebView
      source={{ uri: 'https://www.snapchat.com/discover?web_client_id=8fbad764-dfa0-4155-9592-fc80aeb9cec7' }}
      style={{ flex: 1 }}
    />
  );
};

export default SnapchatScreen;

// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import axios from 'axios';

// const SNAP_CLIENT_ID = 'cb0ca0b2-1c1c-4eea-8b77-3a5156dcd4c7';
// const SNAP_CLIENT_SECRET = 'fIPUzLvnDJ7rgYyTw3g4s16eNSRleC6fA1mkCibo2pc';

// const SnapchatScreen = () => {
//   const [trendingPosts, setTrendingPosts] = useState([]);

//   useEffect(() => {
//     getTrendingPosts();
//   }, []);

//   const getTrendingPosts = async () => {
//     try {
//       const accessToken = await getAccessToken();
//       const spotlightUrl = `https://adsapi.snapchat.com/v1/campaigns/${accessToken.ad_account_id}/ads?status=ACTIVE`;
//       const response = await axios.get(spotlightUrl, {
//         headers: {
//           Authorization: `Bearer ${accessToken.access_token}`,
//         },
//       });
//       setTrendingPosts(response.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getAccessToken = async () => {
//     const accessTokenUrl = 'https://oauth2-api.snapchat.com/oauth2/token';
//     const response = await axios.post(accessTokenUrl, {
//       grant_type: 'client_credentials',
//       client_id: SNAP_CLIENT_ID,
//       client_secret: SNAP_CLIENT_SECRET,
//     });
//     return response.data;
//   };

//   return (
//     <View style={styles.container}>
//       {trendingPosts.map(post => (
//         <View key={post.id} style={styles.postContainer}>
//           <Image source={{ uri: post.thumbnail_url }} style={styles.postImage} />
//           <Text style={styles.postTitle}>{post.name}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   postContainer: {
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   postImage: {
//     width: 300,
//     height: 300,
//   },
//   postTitle: {
//     marginTop: 10,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default SnapchatScreen;
