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

const Register = () => {
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
          Already have and account ? <Link href={"/login"}>Log in</Link>
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <TextField size="small" label="Full Name" fullWidth />
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
        <TextField
          size="small"
          label="Confirm Password"
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
          Register
        </Button>
        
      </Paper>
    </Box>
  );
};

export default Register;
