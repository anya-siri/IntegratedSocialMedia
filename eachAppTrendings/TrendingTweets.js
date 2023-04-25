import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import { TwitterApi } from 'twitter-api-v2';
import Twitter from 'twitter-lite';

const TrendingTweets = () => {
  const BEARTOKEN='AAAAAAAAAAAAAAAAAAAAAPbbmwEAAAAArGoxam8vHAjepzRSayYTkiSQV4M%3DHKWztPxFL3dKQAS1aebsFLtxbmVMtyDDIGpaYH4c7kEEP1xNV2'
  const TOKEN = process.env.BEARTOKEN

  const endpointUrl= "https://api.twitter.com/2/tweets/search/recent";
  const endpointUri= "https://api.twitter.com/1.1/trends/place.json";
  // useEffect(() => {
  //   axios.get('https://api.twitter.com/1.1/trends/place.json?id=1', {
  //     headers: {
  //       'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAPbbmwEAAAAAoijOos3NrQV4MJCmcD4z%2BiE4yN8%3D6TtPEFIJjWwYijuDEjGNm2uh1ZaSHpasFCOypu3mWoYxa4gZ1o',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(response => {
  //       setTrendingTweets(response.data[0].trends);
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);



  useEffect(async ()=>{
    const params = {
      'id':tweet
    }
    const res= await axios.get(endpointUrl,params,{
      headers: {
          "User-Agent": "v2RecentSearchJS",
          "authorization": `Bearer ${TOKEN}`
      }
    })

    if (res.body) {
      return res.body;
    } else {
      throw new Error('Unsuccessful request');
    }
  }, [])

  return (
    <View>
      <Text>Trending Tweets:</Text>
      {trendingTweets.map((tweet, index) => (
        <Text key={index}>{tweet.name}</Text>
      ))}
    </View>
  );
};

export default TrendingTweets;
