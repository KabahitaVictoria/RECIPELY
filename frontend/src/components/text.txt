import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  alpha,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Restaurant } from "@mui/icons-material";
import GradientButton from "./shared/GradientButton";

/**
 * Navigation - Top app bar with logo and menu
 *
 * Features:
 * - Fixed position with blur effect
 * - Responsive menu (hides on mobile)
 * - Custom logo with gradient background
 */
const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // menu items for the navigation
  const menuItems = ["Features", "Recipes", "About"];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: alpha("#fff", 0.9),
        backdropFilter: "blur(20px)", // this creates a frosted glass effect
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 3, md: 6, lg: 8 } }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {/* Logo Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Logo Icon with gradient background */}
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                background: "linear-gradient(135deg, #FF6B9D 0%, #C06C84 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Restaurant sx={{ color: "white", fontSize: 24 }} />
            </Box>

            {/* Logo Text */}
            <Typography
              variant="h6"
              sx={{
                color: "#1a1a1a",
                fontWeight: 800,
                fontSize: "1.25rem",
              }}
            >
              Recipely
            </Typography>
          </Box>

          {/* Spacer to push items to the right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Menu Items - hidden on mobile */}
          {!isMobile &&
            menuItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#666",
                  mx: 1,
                  textTransform: "none",
                  fontWeight: 500,
                }}
              >
                {item}
              </Button>
            ))}

          {/* CTA Button */}
          <GradientButton sx={{ ml: 2, fontSize: "0.9rem" }}>
            Get Started
          </GradientButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
