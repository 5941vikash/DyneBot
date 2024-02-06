import EmailIcon from "@mui/icons-material/Email";
import "./Contact.css";
import { Button, Container, Grid, TextField, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="upBox">
        <h2>Contact</h2>
        <p>We specialize in helping you build a team of expert developers.</p>
      </div>
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <div style={{ maxWidth: "100%", margin: "auto" }}>
          <Grid container spacing={2}>
            {/* First Grid */}
            <Grid item xs={12} md={6} lg={6}>
              <Card
                key="india-office-1"
                sx={{
                  flexDirection: "row",
                  margin: "0",
                  backgroundColor: "#f0f0f5",
                }}
              >
                <CardContent>
                  <Typography variant="h6">India Office</Typography>
                  <Typography>Delta, ithum Tower,</Typography>
                  <Typography> Industrial Area,</Typography>
                  <Typography>Greater Noida - 121308</Typography>

                  <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
                    <strong>Email:</strong> india@webduality.com
                  </Typography>

                  <Typography variant="subtitle1">
                    <strong>Phone:</strong> +91 93581 74038
                  </Typography>

                  <Typography variant="subtitle1">
                    <strong>Phone:</strong> +91 85450 93162
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Second Grid */}
            <Grid item xs={12} md={6} lg={6}>
              <Card
                key="india-office-2"
                sx={{
                  flexDirection: "row",
                  margin: "0",
                  backgroundColor: "#f0f0f5",
                }}
              >
                <CardContent>
                  <Typography variant="h6">India Office</Typography>
                  <Typography>Delta, ithum Tower,</Typography>
                  <Typography> Industrial Area,</Typography>
                  <Typography>Greater Noida - 121308</Typography>

                  <Box
                    sx={{ display: "flex", alignItems: "center", marginTop: 2 }}
                  >
                    <EmailIcon sx={{ color: "green" }} aria-label="Email" />
                    <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
                      india@webduality.com
                    </Typography>
                  </Box>

                  <Typography variant="subtitle1">
                    <strong>Phone:</strong> +91 85450 93162
                  </Typography>

                  <Typography variant="subtitle1">
                    <strong>Phone:</strong> +91 93581 74038
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Contact;
