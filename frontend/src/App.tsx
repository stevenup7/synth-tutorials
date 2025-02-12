import "./App.css";
import TutorialList from "./components/TutorialList";
import Header from "./components/Header";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container>
      <Header />
      <Typography variant="body1" component="p">
        This site provides tutorials for various synths as step by step
        instructions
      </Typography>
      <TutorialList />
    </Container>
  );
}

export default App;
