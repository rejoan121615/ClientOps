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

const Login = () => {
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
          Create new account
        </Typography>
        <Typography>
          Didn't have an account? <Link href={"/register"}>Register</Link>
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <TextField
          size="small"
          label="Email"
          type="email"
          fullWidth
          sx={{ marginTop: 2 }}
        />
        <TextField
          size="small"
          label="Password"
          type="password"
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
          Login
        </Button>
        <Typography>
          {" "}
          <Link href={"/forgot-password"}>Forgot your password ?</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
