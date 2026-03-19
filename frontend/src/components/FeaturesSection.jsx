import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  MenuBook,
  Category,
  Restaurant,
  Favorite,
  Search,
  Timer,
} from "@mui/icons-material";
import FeatureCard from "./FeatureCard";

/**
 * FeaturesSection - Grid of feature cards
 */
const FeaturesSection = () => {
  // Features data array
  const features = [
    {
      icon: <MenuBook />,
      title: "Recipe Library",
      description: "Store unlimited recipes with beautiful organization",
      color: "#FF6B9D",
    },
    {
      icon: <Category />,
      title: "Smart Tags",
      description: "Organize with categories and custom collections",
      color: "#4ECDC4",
    },
    {
      icon: <Restaurant />,
      title: "Ingredients",
      description: "Track ingredients with precise measurements",
      color: "#FFD93D",
    },
    {
      icon: <Favorite />,
      title: "Favorites",
      description: "Save and share your most-loved recipes",
      color: "#FF6B9D",
    },
    {
      icon: <Search />,
      title: "Quick Search",
      description: "Find any recipe instantly by name or ingredient",
      color: "#95E1D3",
    },
    {
      icon: <Timer />,
      title: "Cook Mode",
      description: "Step-by-step guidance while you cook",
      color: "#C06C84",
    },
  ];

  return (
    <Box sx={{ py: 12, bgcolor: "#fafafa" }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, md: 6, lg: 8 } }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 900,
              mb: 2,
              color: "#1a1a1a",
            }}
          >
            Everything You Need
          </Typography>
          <Typography variant="h6" sx={{ color: "#666", fontWeight: 400 }}>
            Powerful features designed for home cooks
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center", // center content horizontally
            px: { xs: 3, md: 6, lg: 8 },
          }}
        >
          {features.map((feature, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
