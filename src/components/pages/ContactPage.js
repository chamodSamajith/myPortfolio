import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";
import { Tooltip } from "@mui/material";
// import Link from "next/link";

const ContactPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        paddingTop: "12%",
      }}
    >
      {/* Main Content Container */}
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", paddingBottom: "2rem" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", marginBottom: "2rem" }}
        >
          Contact Me
        </Typography>

        {/* Address, Email, and Phone Section */}
        <Grid container spacing={4}>
          {/* Address */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <Typography variant="h6" fontWeight="bold">
                      Address
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      58 Simpson Dr, Dandenong, Australia, 3175
                    </Typography>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Email */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <Typography variant="h6" fontWeight="bold">
                      Email
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      chamodsr@gmail.com
                    </Typography>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Phone */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <Typography variant="h6" fontWeight="bold">
                      Phone
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      +61 0466 525 361
                    </Typography>
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Connect With Me Section */}
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginTop: "3rem", marginBottom: "1.5rem" }}
        >
          Connect With Me
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {/* LinkedIn Button */}
          <Button
            variant="outlined"
            color="primary"
            sx={{
              borderRadius: "50%",
              padding: "10px",
              borderColor: "black",
              color: "black",
              "&:hover": {
                borderColor: "#333",
                color: "#333",
              },
            }}
            component="a"
            href="https://www.linkedin.com/in/chamod-rathnayake"
            target="_blank"
          >
            <Linkedin sx={{ width: 30, height: 30 }} />
          </Button>

          {/* GitHub Button */}
          <Button
            variant="outlined"
            color="primary"
            sx={{
              borderRadius: "50%",
              padding: "10px",
              borderColor: "black",
              color: "black",
              "&:hover": {
                borderColor: "#333",
                color: "#333",
              },
            }}
            component="a"
            href="https://github.com/chamodSamajith/Chamod-Rathnayake"
            target="_blank"
          >
            <Github sx={{ width: 30, height: 30 }} />
          </Button>

          {/* Email Button */}
          <Button
            variant="outlined"
            color="primary"
            sx={{
              borderRadius: "50%",
              padding: "10px",
              borderColor: "black",
              color: "black",
              "&:hover": {
                borderColor: "#333",
                color: "#333",
              },
            }}
            component="a"
            href="mailto:chamodsr@gmail.com"
          >
            <Tooltip title="chamodsr@gmail.com" arrow>
              <Mail sx={{ width: 30, height: 30 }} />
            </Tooltip>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ContactPage;
