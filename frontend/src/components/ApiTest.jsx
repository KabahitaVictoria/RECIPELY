import React, { useState } from "react";
import { Box, Button, Paper, Typography, Stack, Alert } from "@mui/material";
import { testConnection, getServerStatus } from "../services/api";

/**
 * ApiTest Component
 *
 * Simple component to test backend connectivity
 */
const ApiTest = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Test the /test endpoint
   */
  const handleTestConnection = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const data = await testConnection();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Test the / endpoint
   */
  const handleGetStatus = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const data = await getServerStatus();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: 600, margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom fontWeight={700}>
        API Connection Test
      </Typography>

      <Stack spacing={2} sx={{ mb: 3 }}>
        <Button
          variant="contained"
          onClick={handleTestConnection}
          disabled={loading}
          sx={{
            background: "linear-gradient(135deg, #FF6B9D 0%, #C06C84 100%)",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 600,
          }}
        >
          {loading ? "Testing..." : "Test Connection (/test)"}
        </Button>

        <Button
          variant="outlined"
          onClick={handleGetStatus}
          disabled={loading}
          sx={{
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 600,
            borderColor: "#FF6B9D",
            color: "#FF6B9D",
            "&:hover": {
              borderColor: "#C06C84",
              bgcolor: "rgba(255, 107, 157, 0.05)",
            },
          }}
        >
          {loading ? "Loading..." : "Get Server Status (/)"}
        </Button>
      </Stack>

      {/* Error Display */}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          <Typography variant="body2" fontWeight={600}>
            Error:
          </Typography>
          <Typography variant="body2">{error}</Typography>
          <Typography variant="caption" sx={{ mt: 1, display: "block" }}>
            Make sure your backend is running on http://localhost:3000
          </Typography>
        </Alert>
      )}

      {/* Success Response */}
      {response && (
        <Paper
          elevation={2}
          sx={{
            p: 3,
            bgcolor: "#f5f5f5",
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            fontWeight={700}
            color="success.main"
          >
            ✅ Success!
          </Typography>
          <Box
            component="pre"
            sx={{
              bgcolor: "#1a1a1a",
              color: "#00ff00",
              p: 2,
              borderRadius: 1,
              overflow: "auto",
              fontSize: "0.875rem",
              fontFamily: "monospace",
            }}
          >
            {JSON.stringify(response, null, 2)}
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default ApiTest;