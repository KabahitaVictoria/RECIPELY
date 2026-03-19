import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { Restaurant } from "@mui/icons-material";

/**
 * Footer - Site footer with links
 */
const Footer = () => {
  // Footer link sections
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Recipes", "Mobile App"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Contact"],
    },
    {
      title: "Resources",
      links: ["Help Center", "Community", "Guides", "API"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security", "Cookies"],
    },
  ];

  return (
    <Box sx={{ py: 6, bgcolor: "#1a1a1a", color: "white" }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, md: 6, lg: 8 } }}>
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: 1.5,
                  background:
                    "linear-gradient(135deg, #FF6B9D 0%, #C06C84 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Restaurant sx={{ color: "white", fontSize: 20 }} />
              </Box>
              <Typography variant="h6" fontWeight={800}>
                Recipely
              </Typography>
            </Box>

            {/* Description */}
            <Typography sx={{ color: "rgba(255,255,255,0.6)", mb: 2 }}>
              Your digital recipe book for organizing and sharing delicious
              meals.
            </Typography>

            {/* Copyright */}
            <Typography
              sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}
            >
              © 2026 Recipely. Built by Victoria Kabahita
            </Typography>
          </Grid>

          {/* Link Sections */}
          {footerSections.map((section, idx) => (
            <Grid item xs={6} md={2} key={idx}>
              <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 2 }}>
                {section.title}
              </Typography>
              <Stack spacing={1}>
                {section.links.map((link) => (
                  <Typography
                    key={link}
                    sx={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.875rem",
                      cursor: "pointer",
                      transition: "color 0.2s",
                      "&:hover": { color: "white" },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
