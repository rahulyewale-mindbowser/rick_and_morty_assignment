import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import CharacterCard from "../components/CharacterCard";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/features/userSlice";
// import { useNavigate } from "react-router-dom";
import "./cardlist.css";
import Filter from "../components/Filter";
import PaginationComp from "../components/Pagination";
import Variants from "../components/cardSkeleton";

function CardList(props) {

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  

  return (

    <div style={{ padding: "0 50px",alignItems:'center' }}  >
      {/* <div style={{float:'left',width:'30%',height:'80vh'}}> */}

        <Filter/>
      
      {/* </div> */}
      {loading ? (
       <h1>Loading ...
        <Variants/>
       </h1>
      ) : error ? (
        <h2>{error}</h2>
      ) : !loading && userList?.users?.results?.length ? (
        <div className="cardlist">
          
            
          <Grid container spacing={2} alignContent="center">
            {users.results.map((ele) => {
              return (
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                  <CharacterCard key={"card_key" + ele} data={ele} />
                </Grid>
              );
            })}
          </Grid>
          {" "}
        </div>
      ) : (
        <h1>something went wrong ...</h1>
      )}
        <PaginationComp />
    </div>
  );
}

export default CardList;

