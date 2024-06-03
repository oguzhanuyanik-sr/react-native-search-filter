import { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: 20,
        marginTop: 50,
      }}
    >
      <TextInput
        placeholder='Search'
        clearButtonMode='always'
        style={styles.searchBox}
        autoCapitalize='none'
        autoCorrect={false}
        value={searchQuery}
        onChangeText={(query) => handleSearch(query)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
});
