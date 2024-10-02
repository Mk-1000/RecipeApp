import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RecipeCard = ({ recipe, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{recipe.strMeal}</Text>
        <Text style={styles.ingredients}>
          {recipe.strIngredient1}, {recipe.strIngredient2}, {recipe.strIngredient3}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
  },
  infoContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ingredients: {
    marginTop: 8,
    color: '#777',
  },
});

export default RecipeCard;
