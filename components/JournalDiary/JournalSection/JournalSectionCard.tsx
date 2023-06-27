import { FunctionComponent } from "react";
import { JournalSectionInterface } from "components/JournalDiary/Interface/JournalInterface";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Card from "@mui/material/Card";

interface Props extends JournalSectionInterface {
  onClick: (id: number) => void;
}
const JournalSectionCard: FunctionComponent<Props> = ({
  id,
  name,
  journal,
  description,
  background,
  onClick,
}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small" onClick={() => onClick(id)}>
          Expand
        </Button>
        <Button>
          <Tooltip title="Delete">
            <DeleteOutlineOutlinedIcon color="error" />
          </Tooltip>
        </Button>
      </CardActions>
    </Card>
  );
};
export default JournalSectionCard;
