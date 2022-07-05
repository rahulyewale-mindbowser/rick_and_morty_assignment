import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Badge from "@mui/material/Badge";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../redux/features/favoriteSlice";

export default function FavoriteCard({ data }) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  console.log(data);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleYes = () => {
    dispatch(removeFavorite(data.id));
    setOpen(false);
  };

  const handleNo = () => {
    setOpen(false);
  };

  // console.log(props.data.name);
  return (
    <Card sx={{ maxWidth: 400, height: 400, position: "relative" }}>
      {data.status === "Alive" ? (
        <Badge
          style={{ position: "absolute", top: "20px", left: "30px" }}
          badgeContent={`${data.status}`}
          color="success"
          variant="standard"
        ></Badge>
      ) : data.status === "Dead" ? (
        <Badge
          style={{ position: "absolute", top: "20px", left: "30px" }}
          badgeContent={`${data.status}`}
          color="error"
          variant="standard"
        ></Badge>
      ) : (
        <Badge
          style={{ position: "absolute", top: "20px", left: "30px" }}
          badgeContent={`${data.status}`}
          color="secondary"
          variant="standard"
        ></Badge>
      )}

      <IconButton style={{ float: "right" }} onClick={handleClickOpen}>
        <FavoriteIcon color="error" />
      </IconButton>
      <Avatar
        alt="Remy Sharp"
        src={data.image}
        sx={{ width: 200, height: 200, marginLeft: 5 }}
      />

      <CardContent align="left">
        <Typography variant="h6" align="center">
          <b>{data.name}</b> 
        </Typography>
        <Typography variant="h6">
          <b>Gender:</b>
          {data.gender}
        </Typography>
        <Typography variant="h6">
          <b>Type:</b>
          {data.type}
        </Typography>
        <Typography variant="h6">
          <b>Species:</b>
          {data.species}
        </Typography>
      </CardContent>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(true);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are You really want to remove Character from favourite?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleNo}>No</Button>
          <Button onClick={handleYes} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
