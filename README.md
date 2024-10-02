# RecipeApp

RecipeApp is a React Native mobile application that allows users to browse and search for recipes. Each recipe includes ingredients, instructions, and an image of the dish.

## Features

- Browse a list of recipes.
- View recipe details including ingredients and instructions.
- Search for recipes by name.
- View recipe images for better visualization.

## Screens

- **Recipe List**: Displays a list of recipes fetched from an external API.
- **Recipe Details**: Shows detailed information about a specific recipe, including ingredients and instructions.
- **Search**: Users can search recipes by name.

## Tech Stack

- **React Native**: Cross-platform mobile app framework.
- **Expo**: To ease development and testing.
- **Axios**: To fetch data from an external API.
- **React Navigation**: For screen navigation.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/RecipeApp.git
   cd RecipeApp
   ```

2. **Install Dependencies**

   Make sure you have [Node.js](https://nodejs.org/) installed, then install the project dependencies:

   ```bash
   npm install
   ```

3. **Start the App**

   You can use Expo to run the app:

   ```bash
   npx expo start
   ```

   This will start the development server and give you the option to open the app in an emulator or on your phone using the Expo Go app.

4. **Run on iOS or Android Emulator**

   For iOS:

   ```bash
   npx expo run:ios
   ```

   For Android:

   ```bash
   npx expo run:android
   ```

## API

The app uses TheMealDB API to fetch recipes. You can find more information about the API [here](https://www.themealdb.com/).

- **API Endpoint**: https://www.themealdb.com/api/json/v1/1/search.php?s=

## File Structure

```bash
.
├── assets              # Images and static assets
├── src
│   ├── components      # Reusable components like RecipeCard
│   ├── screens         # Screens for RecipeList and RecipeDetail
│   ├── services        # API service to fetch recipes
│   └── AppNavigator.js # Navigation setup
├── app.json            # Expo configuration
├── package.json        # Project dependencies
└── README.md           # This file
```

## Contributing

If you'd like to contribute, feel free to open a pull request. For major changes, please open an issue first to discuss what you'd like to change.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.