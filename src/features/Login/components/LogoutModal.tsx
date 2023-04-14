import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../../utils/removeToken";

interface Props {
  handleClose: () => void;
  open: boolean;
}

const LogoutModal: React.FC<Props> = (props) => {
  const { handleClose, open } = props;

  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          p: 2,
        }}
      >
        Do really want to log out ?
      </DialogTitle>
      <DialogActions
        sx={{
          p: 2,
        }}
      >
        <Button onClick={handleLogout}>Yes, of course </Button>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{
            backgroundImage: "linear-gradient(60deg,#ed1845, #22a6df)",
          }}
          autoFocus
        >
          No, I don't think
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutModal;
