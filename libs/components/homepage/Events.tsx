import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

export default function Events() {
  return (
    <Box
      sx={{
        width: "1300px",
        maxWidth: "false", // Kenglikni 1300px ga moslash
        backgroundColor: "#181818",
        color: "#fff",
		marginLeft: "15%",
        padding: "16px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100px",
        position: "relative", // Rasmni joylash uchun
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="body2" sx={{ color: "#b0b0b0" }}>
          1,6 млн просмотров 6 месяцев назад
        </Typography>
        <Button
          variant="text"
          sx={{
            color: "#b0b0b0",
            fontSize: "14px",
            textTransform: "none",
            padding: "0",
          }}
        >
          Ещё
        </Button>
      </Stack>
      <Typography
        variant="body2"
        sx={{
          color: "#b0b0b0",
          marginTop: "8px",
          fontSize: "14px",
          display: "inline-block",
          width: "80%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        В этом видео нет описания.
      </Typography>

      {/* Rasmni o'ng burchakka joylash */}
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          width: "40px",
          height: "40px",
        }}
      >
        <img
          src="/icons/video-thumbnail.jpg" // O'zingizga kerakli rasm manzilini qo'ying
          alt="Thumbnail"
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }}
        />
      </Box>
    </Box>
  );
}
