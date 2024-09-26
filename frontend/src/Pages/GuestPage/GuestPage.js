import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { getUserInfo } from "../../services/userService";
import EventPage from "../EventPage/EventPage";
import { Box, Typography, Paper } from "@mui/material";

const GuestPage = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userInfo = await getUserInfo();
        setEmail(userInfo.email); 
      } catch (err) {
        console.error("Error fetching user info", err);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Header email = {email} />
      
      <Box mt={4} mb={4} sx={{ width: "100%" }}>
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome, Guest!
          </Typography>
          <EventPage />
        </Paper>
      </Box>
    </div>
  );
};

export default GuestPage;
