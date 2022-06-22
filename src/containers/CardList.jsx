import {useEffect} from 'react';
import {Grid} from '@material-ui/core';
import CharacterCard from '../components/CharacterCard';
import {useDispatch,useSelector} from "react-redux"
import{getUsers} from '../redux/features/userSlice'
// import { useNavigate } from "react-router-dom";

function CardList(props) {
    const dispatch = useDispatch()
    const userList = useSelector(state=>state.userList)
    const {loading,users,error} =userList
    useEffect(()=>{
      dispatch(getUsers());
    },[dispatch])
    
    return (
        <div style={{padding: "0 50px"}}>
            
            {loading?<h2>loading...</h2> :error?<h2>{error}</h2>:
            users.length ? 
                <Grid container spacing={2}>
                    {users.map(ele=>{
                        return ( 
                            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                                <CharacterCard key={"card_key"+ele} data={ele} />
                            </Grid>
                        )
                    })}
                </Grid> : 
            <h1>something went wrong ...</h1>}
        </div>
    )
}

export default CardList;