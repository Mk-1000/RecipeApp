// src/screens/RecipeDetailScreen.js
import React from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{recipe.strMeal}</Text>
      <Text style={styles.subtitle}>Ingrédients</Text>
      <Text style={styles.text}>{recipe.strIngredient1}, {recipe.strIngredient2}, {recipe.strIngredient3}, etc.</Text>
      <Text style={styles.subtitle}>Instructions</Text>
      <Text style={styles.text}>{recipe.strInstructions}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default RecipeDetailScreen;
