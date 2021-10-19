import React from "react";
import { Card, CardMedia, Typography, Container, Grid } from "@mui/material";
import useStyles from "../styles";

function CharDetailsContainer({ character }) {
  const classes = useStyles();
  let { image, name, status, origin, location, created, species } = character;

  function getDate(createdDate) {
    const date = new Date(createdDate);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    const displayDate = `${day}/${month}/${year}`;
    return displayDate;
  }

  function getStatusColor(status) {
    if (status === "Alive") return "#7fff00";
    else return "#ff0800";
  }

  function setHumanEmoji(species) {
    if (species === "Human") return `🧍🏻‍♂️ ${species}`;
    else return species;
  }

  return (
    <div>
      <Container maxWidth="md" className={classes.container}>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.gridItem}>
            <Card className={classes.cardLeft}>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                image={image}
                alt={name}
              />
            </Card>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography variant="h4" className={classes.name}>
              {name}
            </Typography>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                marginBottom: "-10px",
              }}
            >
              <p
                className={classes.statusIcon}
                style={{
                  backgroundColor: getStatusColor(status),
                }}
              ></p>
              <Typography className={classes.status}>
                {status} - {setHumanEmoji(species)}
              </Typography>
            </div>
            <Typography className={classes.heading}>
              Last known Location:
            </Typography>
            <Typography className={classes.subHeading}>
              {location.name}
            </Typography>
            <Typography className={classes.heading}>First seen in:</Typography>
            <Typography className={classes.subHeading}>
              {origin.name}
            </Typography>
            <Typography className={classes.heading}>Date Created:</Typography>
            <Typography className={classes.subHeading}>
              {getDate(created)}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CharDetailsContainer;
