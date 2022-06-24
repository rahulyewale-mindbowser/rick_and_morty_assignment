import React,{useEffect} from 'react'
import {Grid} from '@material-ui/core';
import {useDispatch,useSelector} from "react-redux";
// import CharacterCard from '../components/CharacterCard';
import FavoriteCard from '../components/FavoriteCard';

const FavoriteList = () => {
  const FavoriteList = useSelector(state=>state.favoriteList.favorites)
//   const {favorites} =FavoriteList
  console.log(FavoriteList);
  return (
    <div style={{padding: "0 50px"}}>
            
    {
    FavoriteList.length ? 
        <Grid container spacing={2}>
            {FavoriteList.map(ele=>{
                return ( 
                    <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>{
                        // console.log(ele)
                    }
                        <FavoriteCard key={"card_key"+ele} data={ele} />
                    </Grid>
                )
            })}
        </Grid> : 
    <h1>items not added to favorite ...</h1>}
</div>
  )
}

export default FavoriteList