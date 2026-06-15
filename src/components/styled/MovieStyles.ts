import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const RatingTypography = styled(Typography)<{ rating: number }>(({ rating }) => ({
  color: rating > 7 ? '#2e7d32' : '#ed6c02',
  fontWeight: 'bold',
}));

export const TitleTypography = styled(Typography)({
  fontWeight: 600,
  color: '#1976d2',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});

export const PosterImage = styled('img')({
  width: '50px',
  height: '75px',
  borderRadius: '4px',
  cursor: 'pointer',
  objectFit: 'cover',
});