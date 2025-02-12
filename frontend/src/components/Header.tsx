import { Typography, Paper } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Paper elevation={3} className="card">
      <Typography variant="h1" component="h1">
        Synth Tutorials
      </Typography>
    </Paper>
  );
};

export default Header;
