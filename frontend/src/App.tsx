import "./App.css";
import TutorialList from "./components/TutorialList";
import Header from "./components/Header";
import { Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Typography variant="body1" component="p">
          This site provides tutorials for various synths as step by step
          instructions
        </Typography>
        <TutorialList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
