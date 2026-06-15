# CineGrid

Simple movie explorer built with React, TypeScript, Vite, and Material UI.
Time Spent
Total time spent: approximately 4 hours.
## Live demo

- Netlify: https://6a302af6719359e476c2d527--hilarious-duckanoo-686bc8.netlify.app/

## Project overview

The app demonstrates a Material UI `DataGrid` with:

- sortable and filterable columns
- automatic row height between `100px` and `300px`
- custom styled text columns
- poster image preview modal
- row click movie details modal
- light/dark theme toggle
- persisted table state and theme using `zustand`


## Features

- `DataGrid` with at least 4 columns: poster image, title, release date, rating
- image column opens a modal preview on click
- row click opens a modal with movie details
- filter and sort support across columns
- themed UI with saved preference
- state persistence across page reloads

## Run locally

```bash
npm install
npm run dev
```

Open the app at `http://localhost:5173`.

## Notes

- The project uses TMDB image base URL from environment configuration.
- The current UI is built with MUI components and custom styled cells.
- The repository is ready to deploy to Netlify or GitHub Pages.
