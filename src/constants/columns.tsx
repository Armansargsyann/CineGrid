import type { GridColDef } from '@mui/x-data-grid';
import { PosterImage, RatingTypography, TitleTypography } from '@/components/styled/MovieStyles';

export const columns: GridColDef[] = [
  { 
    field: 'poster_path', 
    headerName: 'Poster', 
    width: 120,
    renderCell: (params) => (
      <PosterImage 
        src={`${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}${params.value}`}
        alt="poster" 
      />
    )
  },
  { 
    field: 'title', 
    headerName: 'Title',
    flex: 1,
    renderCell: (params) => <TitleTypography>{params.value}</TitleTypography>
  },
  { 
    field: 'release_date', 
    headerName: 'Release Date', 
    width: 150 
  },
  { 
    field: 'vote_average', 
    headerName: 'Rating', 
    type: 'number',
    width: 120,
    renderCell: (params) => (
      <RatingTypography rating={params.value as number}>
        {params.value}⭐
      </RatingTypography>
    )
  }
];
