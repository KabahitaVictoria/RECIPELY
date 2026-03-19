import React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import { Favorite, Timer } from "@mui/icons-material";

/**
 * RecipeCard - Displays a recipe preview with image
 *
 * Props:
 * - img: Image URL
 * - title: Recipe name
 * - time: Cooking time
 * - color: Accent color for the favorite icon
 */
const RecipeCard = ({ img, title, time, color }) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
        transition: "all 0.3s",
        minWidth: 180, // <-- set minimum width
        maxWidth: 240, // <-- set maximum width
        width: "100%", // keeps it responsive inside the Grid
        "&:hover": {
          transform: "translateY(-8px) rotate(2deg)",
          boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          height: 140,
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Favorite Button */}
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            bgcolor: "white",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            "&:hover": { bgcolor: "white" },
          }}
        >
          <Favorite sx={{ fontSize: 18, color }} />
        </IconButton>
      </Box>

      {/* Content Section */}
      <CardContent sx={{ p: 2 }}>
        <Typography fontWeight={700} sx={{ fontSize: "0.95rem", mb: 0.5 }}>
          {title}
        </Typography>

        {/* Time indicator */}
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Timer sx={{ fontSize: 16, color: "#999" }} />
          <Typography variant="caption" sx={{ color: "#999" }}>
            {time}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
