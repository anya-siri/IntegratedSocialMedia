import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';
import { categories } from '../eachAppTrendings/YoutubeCategories';

function CountryList({ onSelectCountry }) {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function fetchCountries() {
            const API_KEY = 'AIzaSyDVelgUBXyK3Y6ll5wE0teW-U-gaAWkLs4';
            const response = await axios.get('https://www.googleapis.com/youtube/v3/i18nRegions', {
                params: {
                    part: 'snippet',
                    key: API_KEY
                }
            });
            setCountries(response.data.items);
        }

        fetchCountries();
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.countryItem} onPress={() => onSelectCountry(item.id)}>
            <Text style={styles.countryName}>{item.snippet.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.countryList}>
            <FlatList
                data={countries}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

function YoutubeScreen() {
    const [videos, setVideos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedCountry, setSelectedCountry] = useState('IN');
    const [showCountryList, setShowCountryList] = useState(false);

    useEffect(() => {
        if (selectedCategory) {
            async function fetchVideos() {
                const API_KEY = 'AIzaSyDVelgUBXyK3Y6ll5wE0teW-U-gaAWkLs4';
                const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
                    params: {
                        part: 'snippet,statistics',
                        chart: 'mostPopular',
                        regionCode: selectedCountry,
                        videoCategoryId: selectedCategory.categoryId,
                        maxResults: 50,
                        key: API_KEY
                    }
                });

                setVideos(response.data.items);
            }

            fetchVideos();
        }
    }, [selectedCategory, selectedCountry]);

    const handleCategoryPress = (category) => {
        setSelectedCategory(category);
    };

    const handleCountryPress = (country) => {
        setSelectedCountry(country);
        setShowCountryList(false);
    };

    const toggleCountryList = () => {
        setShowCountryList(!showCountryList);
    };


    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => handleVideoPress(item.id)}>
            <Image source={{ uri: item.snippet.thumbnails.high.url }} style={styles.thumbnail} />
            <View style={styles.details}>
                <Text style={styles.title}>{item.snippet.title}</Text>
                <Text style={styles.channel}>{item.snippet.channelTitle}</Text>
                <Text style={styles.views}>{item.statistics.viewCount} views</Text>
            </View>
        </TouchableOpacity>
    );

    const handleVideoPress = (videoId) => {
        const url = `https://www.youtube.com/watch?v=${videoId}`;
        Linking.openURL(url);
    };

    const renderCategory = ({ item }) => (
        <TouchableOpacity style={[styles.category, item.categoryId === selectedCategory.categoryId ? styles.selectedCategory : null]} onPress={() => handleCategoryPress(item)}>
            <Text style={styles.categoryTitle}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.trendtitle}>Trending on Youtube                                      </Text>
                <TouchableOpacity style={styles.countryButton} onPress={toggleCountryList}>
                    <Text style={styles.countryButtonText}>{selectedCountry}</Text>
                </TouchableOpacity>
            </View>
            {showCountryList && <CountryList onSelectCountry={handleCountryPress} />}
            <View style={styles.categoryList}>
                <FlatList
                    data={categories}
                    renderItem={renderCategory}
                    horizontal={true}
                    keyExtractor={(item) => item.categoryId}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <FlatList
                data={videos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    trendtitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
        color: '#282828'
    },
    countryButton: {
        backgroundColor: '#ECD3D3',
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    countryButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    categories: {
        height: 50,
        marginBottom: 30,
    },
    category: {
        backgroundColor: '#E6E6E6',
        padding: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 5,
        minWidth: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedCategory: {
        borderBottomWidth: 4,
        borderBottomColor: '#FF4545',
        paddingBottom: 6
    },
    categoryTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333333',
        textAlign: 'center'
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        elevation: 2
    },
    thumbnail: {
        width: 120,
        height: 80,
        borderRadius: 5
    },
    details: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
        color: '#333333'
    },
    channel: {
        fontSize: 14,
        color: '#555555'
    },
    views: {
        fontSize: 14,
        color: '#555555'
    },
    countryList: {
        maxHeight: '50%'
    },
    countryItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EAE8E8'
    },
    countryName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default YoutubeScreen;

