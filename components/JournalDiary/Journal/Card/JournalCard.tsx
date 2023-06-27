import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { JournalInterface } from "components/JournalDiary/Interface/JournalInterface";
import Tooltip from "@mui/material/Tooltip";

interface Props {
  journalDetail: JournalInterface;
  onClick: (id: number) => void;
}

const JournalCard: FunctionComponent<Props> = ({ journalDetail, onClick }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {journalDetail.name}
        </Typography>
        <Typography variant="body2">{journalDetail.description}</Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small" onClick={() => onClick(journalDetail.id)}>
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
export default JournalCard;
