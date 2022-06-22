import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";


export default function CharacterCard(props) {
  // console.log(props.data.name);
  return (
    <Card sx={{ maxWidth: 400 ,height:500 }}>
      <CardHeader
        action={
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        }
      />
      <Avatar 
  alt="Remy Sharp"
  src={props.data.image}
  sx={{ width: 200, height: 200 ,marginLeft:5 }}
/>

      {/* <CardMedia
        component="img"
        height="190"
        image={props.data.image}
        alt="ricl and morty image" align='center'
      /> */}
      <CardContent align='left'>
        <Typography variant='h6' ><b>Name:</b> {props.data.name}</Typography>
        <Typography variant='h6'><b>Status:</b> {props.data.status}</Typography>
        <Typography variant='h6'><b>Gender:</b>{props.data.gender}</Typography>
        <Typography variant='h6'><b>Type:</b>{props.data.type}</Typography>
        <Typography variant='h6'><b>Species:</b>{props.data.species}</Typography>
      </CardContent>
    </Card>
  );
}
