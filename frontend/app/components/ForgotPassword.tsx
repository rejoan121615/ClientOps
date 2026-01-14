import React from "react";
import Link from "next/link";
import {
  Box,
  Paper,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";

const ForgotPassword = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ padding: 4, width: 600 }} component={"form"} elevation={3}>
        <Typography variant="h4" sx={{ marginBottom: 1 }}>
          Recover your account
        </Typography>
        <Typography>
          Don't worry! It happens. Please enter your email address to
          recover your password. Remember Password ? <Link href={"/login"}>Login</Link>
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <TextField
          size="small"
          label="Email"
          type="email"
          fullWidth
          sx={{ marginTop: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          sx={{ marginTop: 3, marginBottom: 2 }}
        >
          Send Recovery Email
        </Button>
      </Paper>
    </Box>
  );
};

export default ForgotPassword;
