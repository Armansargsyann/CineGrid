import { useMemo } from 'react';
import { createTheme, ThemeProvider, CssBaseline, Box, Button } from '@mui/material';

import { MoviesTable } from '@/components/MoviesTable';
import { MovieModal } from '@/components/MovieModal';
import { useThemeStore } from '@/store/LightDarkStore/useThemeStore';

function App() {
  const { mode, toggleTheme } = useThemeStore();

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
    },
  }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: 3, maxWidth: 1200, margin: '0 auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <h1>Movie Explorer</h1>
          <Button variant="contained" onClick={toggleTheme}>
            {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </Box>
        <MoviesTable />
        <MovieModal />
      </Box>
    </ThemeProvider>
  );
}

export default App;
