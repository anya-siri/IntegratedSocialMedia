import React, { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (searchTerm) {
      navigation.navigate('Search', { term: searchTerm });
      setSearchTerm('');
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleSubmit}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Icon name="search" size={24} color="red" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    padding: 0,
    marginRight: 10,
  },
});

export default SearchBar;
