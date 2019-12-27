import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  card: {
    margin: 12,
    maxWidth: 345,
    color: red
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const RestaurantCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src={require("../../assets/images/foods/" +
              props.data.image +
              ".jpg")}
          />
        }
        title={props.data.name}
        subheader={props.data.description}
      />
      <CardMedia
        className={classes.media}
        image={require("../../assets/images/foods/" +
          props.data.image +
          ".jpg")}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.data.estimated_cost}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.data.estimated_delivery}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Link to={`/menu/${props.data.id}`}>Go</Link>
      </CardActions>
    </Card>
  );
};

export default connect()(RestaurantCard);
