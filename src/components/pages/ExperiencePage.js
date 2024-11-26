import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

const ExperiencePage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f8", // Light background
        paddingTop: "7%", // Adjust top padding for header
      }}
    >
      {/* Main Content Container */}
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingBottom: "2rem",
          marginTop: { xs: "8%", sm: "0" }, // Add margin-top: 4% for mobile (xs)
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", marginBottom: "2rem", marginLeft: "6%" }}
        >
          Work Experience
        </Typography>

        {/* Experience Grid */}
        <Grid container spacing={4} direction="column" alignItems="center">
          {[
            {
              title: "Software Developer",
              client: "DTS Group • Sep 2023 - Present",
              location: "Cheltenham VIC Australia (In Person)",
              projects: ["DTSOne", "DTSReporting", "CRMOne"],
              technologies: [
                "Front-End: Razor, JQuery, Vanilla JS, Bootstrap, Semantic UI",
                "Back-End: ASP.NET MVC, MSSQL",
                "Reports: SAP Crystal Reports",
              ],
            },
            {
              title: "Software Engineer",
              client: "Axiata Digital Labs • Jun 2022 - Jul 2023",
              location: "Colombo, Sri Lanka (Hybrid)",
              projects: [
                "SME internet banking client PWA app using ReactJS, Redux-Saga, Material UI",
                "SpringBoot for API development, PostgreSQL for database management",
                "RabbitMQ for message queuing and real-time transaction processing",
                "Worked in Agile environment utilizing Scrum practices in the Fintech Domain",
              ],
              technologies: [
                "ReactJS",
                "Redux-Saga",
                "Material UI",
                "SpringBoot",
                "PostgreSQL",
                "RabbitMQ",
              ],
            },
            {
              title: "Associate Software Engineer",
              client: "Axiata Digital Labs • Nov 2021 - May 2022",
              location: "Colombo, Sri Lanka (Hybrid)",
              projects: [
                "SME internet banking admin web app using ReactJS, Redux-Saga, Material UI",
                "Buy Now Pay Later WebView application using React-Native",
                "Kongsi Klub by Boost Credit - UI Revamp and Admin Portal",
              ],
              technologies: [
                "ReactJS",
                "Redux-Saga",
                "Material UI",
                "React-Native",
              ],
            },
            {
              title: "Intern Software Engineer",
              client: "ShoutOUT Labs • Dec 2019 - Jun 2020",
              location: "Colombo, Sri Lanka (Hybrid)",
              projects: [
                "Developed SAAS products in CRM domain",
                "Worked as a Full-Stack Software Engineer Intern with MERN Stack (React.js, Node.js, Express.js, MongoDB)",
                "Developed ShoutOUT OTP plugin for Woocommerce (native Php)",
                "Contributed to ShoutOUT core, shoutOUT.AI, shoutOUT Lite",
              ],
              technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
            },
          ].map((experience, index) => (
            <Grid item xs={12} sm={8} lg={6} key={index}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 2,
                  width: { xs: "90%", sm: index === 0 ? "126%" : "100%" }, // Increase width for the first card
                  marginLeft: { xs: "auto", sm: index === 0 ? "-7%" : "4.5%" }, // Apply 7% margin-left for the first card
                  marginRight: index === 0 ? "auto" : "2%", // Center first card horizontally
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
                  >
                    {experience.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ marginBottom: "1rem" }}
                  >
                    {experience.client}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ marginBottom: "1rem" }}
                  >
                    {experience.location}
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: "1rem" }}>
                    Projects:{" "}
                    {Array.isArray(experience.projects)
                      ? experience.projects.join(", ")
                      : "N/A"}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "bold", display: "inline" }}
                  >
                    Technologies:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ display: "inline", marginLeft: "8px" }}
                  >
                    {Array.isArray(experience.technologies)
                      ? experience.technologies.join(", ")
                      : "N/A"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ExperiencePage;
