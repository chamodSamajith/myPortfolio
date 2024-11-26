import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

const ProjectsPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f8", // Light background
        paddingTop: "7%",
      }}
    >
      {/* Main Content Container */}
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", paddingBottom: "2rem" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            marginBottom: "2rem",
            marginTop: { xs: "8%", sm: "0" },
          }}
        >
          Projects
        </Typography>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {[
            {
              title: "Appointment Scheduler",
              client: "Magenta Hair & Beauty, Dandenong VIC Australia",
              description:
                "A mobile application built with React Native Expo and Firebase for scheduling appointments.",
              technologies: "React Native, Expo, Firebase",
            },
            {
              title: "Intelligent FAQ System",
              client: "Swinburne University Project",
              description:
                "An AI-powered FAQ system using modern NLP techniques and machine learning models.",
              technologies: "Flask, Hugging Face, Sentence-Transformers",
            },
            {
              title: "Procurement Management System",
              client: "Academic Project",
              description:
                "A full-stack web application for managing procurement processes.",
              technologies: "MERN Stack, Heroku",
            },
            {
              title:
                "Web Based System to Analyze Malicious Attacks Using a Hybrid Machine Learning Model",
              client:
                "Swinburne Research Project associated with DFAT Australia",
              description:
                "A hybrid machine learning model for analyzing and detecting malicious attacks.",
              technologies:
                "Flask, React JS, MongoDB, Scikit-Learn, Hard Voting Ensemble (KNN & Logistic Regression), Hybrid Ensemble (Random Forest & LSTM)",
            },
            {
              title: "Enhancing Online Learning and Teaching Experience",
              client: "Final Year Research Project",
              description:
                "Developed a solution to enhance the online learning experience with SpaCy, DeepSpeech, Python, Flask, React.js, Node.js, and MongoDB.",
              technologies:
                "SpaCy, DeepSpeech, Python, Flask, React.js, Node.js, MongoDB",
            },
          ].map((project, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ marginBottom: "1rem" }}
                  >
                    Client: {project.client}
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: "1rem" }}>
                    {project.description}
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
                    {project.technologies}
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

export default ProjectsPage;
