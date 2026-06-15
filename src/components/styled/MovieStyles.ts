import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const RatingTypography = styled(Typography)<{ rating: number }>(
  ({ rating }) => ({
    color: rating > 7 ? "#2e7d32" : "#ed6c02",
    fontWeight: "bold",
  }),
);

export const TitleTypography = styled(Typography)({
  fontWeight: 600,
  color: "#1976d2",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

export const OverviewTypography = styled(Typography)({
  fontSize: "0.9rem",
  color: "#424242",
  fontStyle: "italic",
  lineHeight: 1.4,
  maxWidth: "100%",
});

export const ReleaseTypography = styled(Typography)({
  color: "#9c27b0",
  fontWeight: 700,
});

export const PosterImage = styled("img")({
  width: "80px",
  minHeight: "100px",
  maxHeight: "300px",
  objectFit: "cover",
  borderRadius: "4px",
  cursor: "pointer",
});
