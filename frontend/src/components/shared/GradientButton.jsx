import React from "react";
import { Button } from "@mui/material";

/**
 * GradientButton - A reusable button with gradient background
 *
 * Props:
 * - children: The button text/content
 * - variant: 'gradient' (default) or 'white'
 * - All other MUI Button props (onClick, size, etc.)
 */
const GradientButton = ({ children, variant = "gradient", ...props }) => {
  const styles = {
    gradient: {
      background: "linear-gradient(135deg, #FF6B9D 0%, #CO6C84 100%",
      color: "white",
      "&:hover": {
        boxShadow: "0 12px 32px rgba(255, 107, 157, 0.4)",
        transform: "translateY(-2px)",
      },
    },
    white: {
      bgcolor: "white",
      color: "#FF6B9D",
      "&:hover": {
        bgcolor: "white",
        transform: "translateY(-2px)",
        boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
      },
    },
  };

  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "none",
        fontWeight: 600,
        px: 4,
        py: 1.75,
        borderRadius: 2,
        boxShadow:
          variant === "gradient"
            ? "0 8px 24px rgba(255, 107, 157, 0.3)"
            : "0 8px 24px rgba(0,0,0,0.15)",
        transition: "all 0.3s",
        ...styles[variant],
        ...props.sx, // Allow overriding styles via props
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default GradientButton;
