import React from "react";
import { Card, Box, Typography, alpha } from "@mui/material";

/**
 * FeatureCard - Displays a single feature with icon
 *
 * Props:
 * - icon: React element (MUI icon)
 * - title: Feature name
 * - description: Feature description
 * - color: Accent color for the icon background
 */
const FeatureCard = ({ icon, title, description, color }) => {
  return (
    <Card
      sx={{
        p: 4,
        height: "100%",
        borderRadius: 3,
        border: "none",
        boxShadow: "none",
        bgcolor: "white",
        transition: "all 0.3s",
        "&:hover": {
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
          transform: "translateY(-4px)",
        },
      }}
    >
      {/* Icon Container */}
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: 2,
          background: alpha(color, 0.1), // 10% opacity of the color
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
        }}
      >
        {/* Clone the icon element and add color */}
        {React.cloneElement(icon, {
          sx: { fontSize: 28, color },
        })}
      </Box>

      {/* Title */}
      <Typography variant="h6" fontWeight={700} sx={{ mb: 1.5 }}>
        {title}
      </Typography>

      {/* Description */}
      <Typography sx={{ color: "#666", lineHeight: 1.7 }}>
        {description}
      </Typography>
    </Card>
  );
};

export default FeatureCard;
