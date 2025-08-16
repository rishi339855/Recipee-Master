## Recipe Generator (Forkify)

Search over 1,000,000 recipes, view details, adjust servings, bookmark favorites, and upload your own recipes. Built with modern JavaScript and Parcel.

### Features

- **Search recipes**: Query the Forkify API and browse paginated results
- **Recipe details**: Cooking time, servings, ingredients, and source link
- **Adjust servings**: Auto-recalculate ingredient quantities
- **Bookmarks**: Save and persist favorite recipes to `localStorage`
- **Upload recipes**: Add your own via the in-app modal

### Tech Stack

- **JavaScript (ES Modules)**
- **Parcel v2** (bundler) with Sass support
- **Sass/SCSS** for styles
- **Core‑JS** and **regenerator-runtime** polyfills

### Getting Started

#### Prerequisites

- Node.js 16+ and npm

#### Install

```bash
npm install
```

#### Development

```bash
npm start
```

This starts Parcel and serves `index.html` with hot reloading.

#### Production Build

```bash
npm run build
```

Outputs a minified build to `dist/`.

### Configuration

Update API settings in `src/js/config.js` if needed:

```js
export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
export const RES_PER_PAGE = 10;
export const KEY = '<your-api-key>'; // already set in this repo
export const MODAL_CLOSE_SEC = 2.5;
```

The repo includes a working API key; you can replace it with your own.

### Scripts

- `npm start`: Run dev server (Parcel)
- `npm run build`: Build for production into `dist/`

### Project Structure

```
recipe-generator/
  index.html
  src/
    img/
    js/
      config.js
      controller.js
      helpers.js
      model.js
      views/
        View.js
        addRecipeView.js
        bookmarksView.js
        paginationView.js
        previewView.js
        recipeView.js
        resultsView.js
        searchView.js
    sass/
      _*.scss
      main.scss
```

### How to Use

1. Start the app (`npm start`) and open the browser (Parcel will open automatically)
2. Enter a search term (e.g., "pizza") and submit
3. Click a result to view full details
4. Adjust servings using +/- buttons; ingredients update automatically
5. Click the bookmark button to save/unsave a recipe
6. Add your own recipe via the “Add recipe” button and form
