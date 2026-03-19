import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import GradientButton from "./shared/GradientButton";

/**
 * CTASection - Call-to-action section with gradient background
 */
const CTASection = () => {
  return (
    <Box
      sx={{
        py: 12,
        background: "linear-gradient(135deg, #FF6B9D 0%, #C06C84 100%)",
        color: "white",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        {/* Headline */}
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 900,
            mb: 2,
          }}
        >
          Ready to Start Cooking?
        </Typography>

        {/* Subheadline */}
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.95, fontWeight: 400 }}>
          Join thousands of home cooks organizing their recipes with Recipely
        </Typography>

        {/* CTA Button */}
        <GradientButton
          variant="white"
          size="large"
          endIcon={<ArrowForward />}
          sx={{ fontSize: "1.1rem", fontWeight: 700, px: 5, py: 2 }}
        >
          Get Started Free
        </GradientButton>

        {/* Fine print */}
        <Typography variant="body2" sx={{ mt: 3, opacity: 0.8 }}>
          No credit card required • Free forever
        </Typography>
      </Container>
    </Box>
  );
};

export default CTASection;
