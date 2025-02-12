import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { PlusSquare } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import dummyData from "../dummyData";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function AddResume({ getUser }) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [userTitle, setUserTitle] = useState(null);

  const handleCreate = () => {
    const userId = uuidv4();
    const newUser = {
      id: userId,
      projectTitle: userTitle,
      resumeData: dummyData,
    };

    const prevData = JSON.parse(localStorage.getItem("users")) || [];

    const newUserData = [newUser, ...prevData];

    localStorage.setItem("users", JSON.stringify(newUserData));

    getUser(newUserData);
    handleClose();
    navigate(`resume/${userId}/edit`);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <div className="template">
          <PlusSquare />
        </div>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>Create New Resume</Typography>
          <Typography gutterBottom>Add a title for your resume</Typography>
          <Typography gutterBottom>
            <input
              type="text"
              placeholder="Ex.Full Stack resume"
              onChange={(e) => setUserTitle(e.target.value)}
            />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button autoFocus disabled={!userTitle} onClick={handleCreate}>
            Create
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
