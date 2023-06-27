import { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  title: string;
  onClick?: () => void;
}

const CreateCard: FunctionComponent<Props> = ({ title }) => {
  return (
    <Card sx={{ padding: "8px", cursor: "pointer" }}>
      <CardActions sx={{}}>
        <AddIcon sx={{ width: "100px", height: "50px", marginX: "auto" }} />
        <CardContent>
          <Typography
            sx={{ fontSize: 14, textAlign: "center" }}
            color="text.secondary"
          >
            {title}
          </Typography>
        </CardContent>
      </CardActions>
    </Card>
  );
};
export default CreateCard;
