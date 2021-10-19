import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "700px",
    padding: "30px",
  },
  gridContainer: {
    backgroundColor: "#191A19",
    // alignItems: "center",
    borderRadius: "15px",
  },
  gridItem: {
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
  },
  cardLeft: {
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
  },
  cardMedia: {
    height: "270px",
    width: "255px",
    borderTopLeftRadius: "15px",
    borderBottomLeftRadius: "15px",
  },
  statusIcon: {
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    display: "inline-block",
    marginLeft: "15px",
  },
  name: {
    color: "white",
    paddingLeft: "15px",
    paddingTop: "15px",
    fontWeight: "bold",
  },
  status: {
    color: "white",
    paddingLeft: "08px",
    paddingTop: "08px",
  },
  heading: {
    color: "grey",
    paddingLeft: "15px",
    paddingTop: "15px",
  },
  subHeading: {
    color: "white",
    paddingLeft: "15px",
  },
  cardContainer: {
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
  },
  cardMediaMain: {
    width: "300px",
    height: "200px",
  },
  cardContent: {
    backgroundColor: "#191A19",
    height: "85px",
  },
  cardText: {
    color: "green",
    paddingLeft: "5px",
    fontWeight: "bold",
  },
}));

export default useStyles;