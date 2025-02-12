// frontend/src/components/TutorialList.js
import { useEffect, useState } from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import { BACKEND_URL } from "../config";

interface Tutorial {
  id: number;
  title: string;
}

const TutorialList: React.FC = () => {
  console.log("TutorialList.tsx");
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  // get the tutorials from the backend
  // on port 5000

  useEffect(() => {
    fetch(`${BACKEND_URL}/tutorials`)
      .then((response) => response.json())
      .then((data) => setTutorials(data.tutorials));
  }, []);

  return (
    <div>
      <Typography variant="h2" component="h2">
        Elektron Digitakt Tutorials
      </Typography>
      <List>
        {tutorials.map((tutorial) => (
          <ListItem key={tutorial.id}>
            <ListItemText primary={tutorial.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TutorialList;
