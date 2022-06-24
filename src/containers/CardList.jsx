import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
import NativeSelect from '@mui/material/NativeSelect';
import CharacterCard from "../components/CharacterCard";
import InputBase from '@mui/material/InputBase';
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/features/userSlice";
import { styled } from '@mui/material/styles';
import Button from '@material-ui/core/Button';
// import { useNavigate } from "react-router-dom";
import "./cardlist.css";
import Filter from "../components/Filter";

function CardList(props) {

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));
  

  return (

    <div style={{ padding: "0 50px" }}>
        <Filter/>
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : !loading && userList?.users?.results?.length ? (
        <div className="cardlist">
          
            
          <Grid container spacing={2}>
            {users.results.map((ele) => {
              return (
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                  <CharacterCard key={"card_key" + ele} data={ele} />
                </Grid>
              );
            })}
          </Grid>{" "}
        </div>
      ) : (
        <h1>something went wrong ...</h1>
      )}
    </div>
  );
}

export default CardList;
