import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useMovieStore } from '@/store/MovieStore/useMovieStore';



export const MovieModal = () => {
  const { selectedMovie, setSelectedMovie } = useMovieStore();

  const handleClose = () => setSelectedMovie(null);

  return (
    <Modal open={!!selectedMovie} onClose={handleClose}>
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: { xs: '90%', sm: 380 }, bgcolor: 'background.paper',
        boxShadow: 24, p: 4, borderRadius: 2, outline: 'none'
      }}>
        {selectedMovie && (
          <>
            <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
              <CloseIcon />
            </IconButton>
            
            <img 
              src={`${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}${selectedMovie.poster_path}`} 
              alt={selectedMovie.title}
              style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }}
            />
            
            <Typography variant="h4" gutterBottom>{selectedMovie.title}</Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {selectedMovie.overview}
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 'bold' }}>
              Rating: {selectedMovie.vote_average} | Release: {selectedMovie.release_date}
            </Typography>
          </>
        )}
      </Box>
    </Modal>
  );
};
