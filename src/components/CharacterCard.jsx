import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Badge from '@mui/material/Badge';
import {useDispatch,useSelector} from "react-redux";
import { addFavorite,removeFavorite } from "../redux/features/favoriteSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function CharacterCard({data}) {

  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favoriteList);
  // console.log(favorite);
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
    <Card sx={{ maxWidth: 300 ,height:400 }} style={{boxShadow: " 0 20px 25px rgba(0,0,0,0.55)",position:"relative"}} >

    
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
  alt={data.name +"image"}
  src={data.image}
  sx={{ width: 200, height: 200 ,margin:'auto' }}
/>
{data.status=="Alive"?
      <Badge style={{position:"absolute",
      top: "20px",
      left: "30px"
     }} badgeContent={`${data.status}`} color="success" variant="standard">   
      </Badge>
      :data.status==="Dead"?
      <Badge style={{position:"absolute",
      top: "20px",
      left: "30px"
     }} badgeContent={`${data.status}`} color="error" variant="standard">   
      </Badge>
      :<Badge style={{position:"absolute",
      top: "20px",
      left: "35px"
     }} badgeContent={`${data.status}`} color="secondary" variant="standard">   
      </Badge>}

      <CardContent align='left'>
        <Typography variant='h6'align="center" ><b>{data.name}</b> </Typography>
        <Typography variant='h6'><b>Gender:</b>{data.gender}</Typography>
        <Typography variant='h6'><b>Type:</b>{data.type}</Typography>
        <Typography variant='h6'><b>Species:</b>{data.species}</Typography>
      </CardContent>
    </Card>
  );
}
