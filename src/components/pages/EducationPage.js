import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Grid,
  Box,
} from "@mui/material";

const EducationPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        paddingTop: "7%",
      }}
    >
      {/* Main Content Container */}
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", paddingBottom: "2rem" }}>
        {/* Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            marginBottom: "2rem",
            textAlign: "left",
            marginLeft: "25%",
            marginTop: { xs: "9%", sm: "0" },
          }}
        >
          Education
        </Typography>

        {/* Grid container for cards */}
        <Grid container direction="column" spacing={4} alignItems="center">
          {/* First Card */}
          <Grid item xs={12} md={8}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, padding: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="semibold" gutterBottom>
                  Master of Information Technology (Professional Computing)
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  Swinburne University Of Technology
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  2023 – 2025 (May)
                </Typography>
                <List>
                  <ListItem>Specializing in Software Development</ListItem>
                  <ListItem>Currently Reading</ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Second Card */}
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                padding: 2,
                // marginLeft: "-15%",
                // width: "122%",
                width: { xs: "100%", md: "122%" }, // Full width on mobile, wider on desktop
                marginLeft: { xs: "0", md: "-15%" },
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="semibold" gutterBottom>
                  BSc (Hons) in Information Technology
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  Sri Lanka Institute of Information Technology
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  2018 - 2021
                </Typography>
                <List>
                  <ListItem>Specializing in Software Engineering</ListItem>
                  <ListItem>
                    Graduated with Second Class Honors Upper Division
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default EducationPage;
