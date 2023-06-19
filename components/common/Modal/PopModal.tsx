import { FunctionComponent, ReactElement } from "react";
import { Modal } from "@mui/material";

interface Props {
  open: boolean;
  handleClose: () => void;
  children: ReactElement;
}

const PopModal: FunctionComponent<Props> = ({
  open,
  handleClose,
  children,
}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        className="flex justify-center items-center px-4"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
      >
        {children}
      </Modal>
    </div>
  );
};

export default PopModal;
