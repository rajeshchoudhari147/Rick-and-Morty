import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import useStyles from "../styles";

function Character({ character }) {
  let { id, name, image } = character;
  let history = useHistory();
  const classes = useStyles();

  return (
    <div className="card black character" onClick={() => history.push(`${id}`)}>
      <Grid className={classes.cardContainer}>
        <Card>
          <CardMedia
            component="img"
            className={classes.cardMediaMain}
            image={image}
            alt={name}
          />
          <CardContent className={classes.cardContent}>
            <Typography variant="h6" className={classes.cardText}>
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Character;
