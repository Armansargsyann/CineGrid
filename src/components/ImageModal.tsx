import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ImageModalProps {
  imageUrl: string | null;
  open: boolean;
  onClose: () => void;
}

export const ImageModal = ({ imageUrl, open, onClose }: ImageModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "70%", md: "55%" },
          maxHeight: "90vh",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 1,
          borderRadius: 2,
          outline: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8, color: "text.primary" }}
        >
          <CloseIcon />
        </IconButton>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Poster Preview"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
        )}
      </Box>
    </Modal>
  );
};
