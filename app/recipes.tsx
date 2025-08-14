import MenuBar from '@/components/MenuBar';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { API } from 'aws-amplify';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Banner from '../components/Banner';
import { listPublicData } from '../src/graphql/queries';

type PublicData = {
  id: string;
  title: string;
  description: string;
  image: string; // Change from image URL to image ID
  tags?: string[];
  cookTime?: number;      // in minutes
  servingSize?: number;   // number of servings
  ingredients?: string[];
  prepSteps?: string[];
};

type ListPublicDataQuery = {
  listPublicData: {
    items: PublicData[];
  };
};

function RecipesScreen() {
  const [data, setData] = useState<PublicData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await API.graphql({
        query: listPublicData,
        authMode: 'API_KEY', // Use API_KEY for public access
        authToken: 'da2-n5dkyfb2mveb5flj74slv44irq' // Replace with your actual API key
      }) as GraphQLResult<ListPublicDataQuery>;
      if (result.data) {
        setData(result.data.listPublicData.items);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({ item }: { item: PublicData }) => {
    const imageUrl = `https://mbct4sgb77c6c1879ac42f09d62cb2cfc68fbb4b8279-dev.s3.us-east-2.amazonaws.com/public/${item.image}`; // Generate URL using image ID

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        {item.tags && item.tags.length > 0 && (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 5 }}>
            {item.tags.map((tag, idx) => (
              <Text key={idx} style={{ backgroundColor: '#eee', marginRight: 5, padding: 3, borderRadius: 5 }}>{tag}</Text>
            ))}
          </View>
        )}
        {item.cookTime !== undefined && (
          <Text>Cook Time: {item.cookTime} min</Text>
        )}
        {item.servingSize !== undefined && (
          <Text>Serving Size: {item.servingSize}</Text>
        )}
        {item.ingredients && item.ingredients.length > 0 && (
          <View>
            <Text style={{ fontWeight: 'bold' }}>Ingredients:</Text>
            {item.ingredients.map((ing, idx) => (
              <Text key={idx}>- {ing}</Text>
            ))}
          </View>
        )}
        {item.prepSteps && item.prepSteps.length > 0 && (
          <View>
            <Text style={{ fontWeight: 'bold' }}>Preparation Steps:</Text>
            {item.prepSteps.map((step, idx) => (
              <Text key={idx}>{idx + 1}. {step}</Text>
            ))}
          </View>
        )}
        {item.image && (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
              onError={(e) => console.error('Error loading image:', e.nativeEvent.error)}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Banner />
      <Text style={styles.welcomeText}>this is recipes screen</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container} // Corrected style referencetainer}
      />
      <MenuBar />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeText: {
    color: 'black',
    fontFamily: 'Avenir Next',
    fontWeight: '700',
    fontSize: 30,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  container: {
    padding: 10,
    width: '100%', // Ensure the container takes full width
    paddingBottom: 100,
  },
  itemContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '90%', // Ensure the item container is not too narrow
    alignSelf: 'center', // Center the item container
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  imageContainer: {
    backgroundColor: '#D9E0F3',
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  gridsContainer: {
    backgroundColor: 'white',
    width: '70%',
    height: '12%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RecipesScreen;