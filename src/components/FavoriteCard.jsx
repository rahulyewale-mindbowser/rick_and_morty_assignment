import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useDispatch,useSelector} from "react-redux";
import { addFavorite,removeFavorite } from "../redux/features/favoriteSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function FavoriteCard({data}) {

  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favoriteList);
  console.log(data);
  const [isFavourite, setIsFavourite] = React.useState(
    favorite.favorites.some((f) => f.id === data.id) || false
  );

  const handleDeselect = () => {
    setIsFavourite(false);
    dispatch(removeFavorite(data.id));
  };
  const handleSelect = () => {
    setIsFavourite(true);
    dispatch(addFavorite(data));
  };
  // console.log(props.data.name);
  return (
    <Card sx={{ maxWidth: 400 ,height:500 }}>
       {isFavourite ? (
              <IconButton style={{ float: "right" }} onClick={handleDeselect}>
                <FavoriteIcon color="error" />
              </IconButton>
            ) : (
              <IconButton style={{ float: "right" }} onClick={handleSelect}>
                <FavoriteBorderIcon />
              </IconButton>
            )}
      <Avatar 
  alt="Remy Sharp"
  src={data.image}
  sx={{ width: 200, height: 200 ,marginLeft:5 }}
/>

      <CardContent align='left'>
        <Typography variant='h6' ><b>Name:</b> {data.name}</Typography>
        <Typography variant='h6'><b>Status:</b> {data.status}</Typography>
        <Typography variant='h6'><b>Gender:</b>{data.gender}</Typography>
        <Typography variant='h6'><b>Type:</b>{data.type}</Typography>
        <Typography variant='h6'><b>Species:</b>{data.species}</Typography>
      </CardContent>
    </Card>
  );
}
