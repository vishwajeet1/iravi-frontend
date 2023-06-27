import { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import JournalCreateForm from "components/common/From/JournalCreateForm";
import PopModal from "components/common/Modal/PopModal";
import JournalSectionCreateForm from "components/common/From/JournalSectionCreateForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: Record<string, any>) => void;
}

const CreateJournal: FunctionComponent<Props> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  return (
    <PopModal open={isOpen} handleClose={() => onClose()}>
      <Box>
        <Paper sx={{ padding: "40px" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Create New Journal Section
          </Typography>
          <Box sx={{ paddingY: "20px" }}>
            <JournalSectionCreateForm onSubmit={onSubmit} />
          </Box>
        </Paper>
      </Box>
    </PopModal>
  );
};
export default CreateJournal;
