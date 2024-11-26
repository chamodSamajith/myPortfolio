import { Button } from "@mui/material";

const CustomButton = ({
  children,
  onClick,
  href,
  variant = "contained",
  ...props
}) => {
  return (
    <Button
      {...props}
      variant={variant}
      onClick={onClick}
      href={href}
      style={{
        backgroundColor: "#333", // Dark background matching navbar
        color: "#fff", // White text color
        "&:hover": {
          backgroundColor: "#555", // Slightly lighter dark background on hover
        },
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        textTransform: "none",
      }}
    >
      {children}
    </Button>
  );
};
export default CustomButton;
