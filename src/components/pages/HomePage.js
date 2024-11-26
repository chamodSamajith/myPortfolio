import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import {
  Download,
  GitHub as GithubIcon,
  LinkedIn as LinkedInIcon,
  MailOutline as MailIcon,
} from "@mui/icons-material";
import NavBar from "./../nav-bar";

const HomePage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <Container
        maxWidth="lg"
        style={{ marginTop: "100px", paddingBottom: "50px" }}
      >
        <Grid container spacing={4}>
          {/* Intro Section */}
          <Grid item xs={12} lg={8}>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              Software Engineer
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              With more than 3 years of experience in full-stack development,
              specializing in ASP.NET, MERN Stack, and modern web technologies.
              Currently based in Melbourne, VIC, Australia.
            </Typography>
            <Grid container spacing={2} style={{ marginTop: "20px" }}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<MailIcon />}
                  href="/contact"
                  sx={{
                    color: "white", // White text color for contrast
                    backgroundColor: "#333333",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Adding the shadow-lg style
                    "&:hover": {
                      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)", // Adding hover shadow effect (hover:shadow-xl)
                    },
                    transition: "box-shadow 0.3s ease-in-out", // Adding transition effect for smooth shadow change
                  }}
                >
                  Contact Me
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<Download />}
                  href="/files/Chamod-Rathnayake-Software Engineer .pdf"
                  download
                  sx={{
                    color: "#333333", // Text color to match the navbar
                    borderColor: "#333333", // Border color to match the navbar
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Adding the shadow-lg style
                    "&:hover": {
                      borderColor: "#555555", // Darker border on hover
                      backgroundColor: "#555555", // Background color on hover
                      color: "white", // Text color on hover for contrast
                      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)", // Adding hover shadow effect
                    },
                    transition: "all 0.3s ease-in-out", // Smooth transition for all changes
                  }}
                >
                  Download CV
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} style={{ textAlign: "center" }}>
            <img
              src="/images/Chamod_Rathnayake_DV.jpg"
              alt="Profile"
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                border: "4px solid #fff",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
        </Grid>

        {/* Featured Skills Section */}
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          style={{ marginTop: "40px" }}
        >
          Featured Skills
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Frontend Development",
              skills:
                "React JS, React Native, Redux Saga, Material UI, Bootstrap",
            },
            {
              title: "Backend Development",
              skills: "ASP.NET MVC, ASP.NET Web APIs, Node.js, Express.js",
            },
            {
              title: "Database & Tools",
              skills: "MSSQL, PostgreSQL, MongoDB",
            },
          ].map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: index === 2 ? "100%" : "auto", // Apply full height to the 3rd card only
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {skill.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {skill.skills}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Latest Experience Section */}
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          style={{ marginTop: "40px" }}
        >
          Latest Experience
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Software Developer
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              DTS Group • Sep 2023 - Present
            </Typography>
            <Typography variant="body2">
              Working on DTSOne, DTSReporting, and CRMOne Applications using
              ASP.NET MVC, MSSQL, and modern frontend technologies.
              Collaborating in a Rapid Application Development environment.
            </Typography>
          </CardContent>
        </Card>

        {/* Connect With Me Section */}
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          style={{ marginTop: "40px" }}
        >
          Connect With Me
        </Typography>
        <Grid container spacing={2}>
          {[
            {
              href: "https://www.linkedin.com/in/chamod-rathnayake",
              icon: <LinkedInIcon />,
            },
            {
              href: "https://github.com/chamodSamajith/Chamod-Rathnayake",
              icon: <GithubIcon />,
            },
            { href: "mailto:chamodsr@gmail.com", icon: <MailIcon /> },
          ].map((link, index) => (
            <Grid item key={index}>
              <IconButton
                color="primary"
                component="a"
                href={link.href}
                target="_blank"
                sx={{
                  color: "#333333", // Icon color to match the navbar
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Adding shadow style similar to the buttons
                  "&:hover": {
                    color: "#555555", // Icon color on hover (a bit darker than the original)
                    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)", // Stronger shadow effect on hover
                  },
                  transition: "color 0.3s ease, box-shadow 0.3s ease", // Smooth transition for color and shadow
                }}
              >
                {link.icon}
              </IconButton>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
