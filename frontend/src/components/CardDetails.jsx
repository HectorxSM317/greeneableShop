import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import productsActions from "../redux/actions/productsActions";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const { id } = useParams();
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsActions.getOneProduct(id));
    // eslint-disable-next-line
  }, []);
  const product = useSelector((store) => store.productsReducer.oneProduct);
  console.log(product);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [value, setValue] = React.useState(2);

  return (
    <Card className="details">
      <div className="detailsTop">
        <div className="detailsTop-A">
          <CardMedia
            className="detailsTop-A-cardMedia"
            component="img"
            height="100%"
            image={product?.photo}
            alt="Paella dish"
          />
        </div>
        <div className="detailsTop-B">
          <CardContent>
            <h3>{product?.name}</h3>
          </CardContent>
          <CardContent>
            <Typography variant="body" color="text.secondary">
              {product?.price} USD
            </Typography>
          </CardContent>
          <CardContent>
            <Rating name="read-only" value={value} readOnly />
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
          <CardContent sx={{ width: "100%" }}>
            <Button variant="contained" sx={{ width: "100%" }}>
              Add To Cart
            </Button>
          </CardContent>
        </div>
      </div>
      <div className="detailsExpand">
        <CardActions sx={{ p: 0 }}>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Description</Typography>
            <Typography paragraph>{product?.description}</Typography>
          </CardContent>
        </Collapse>
      </div>
    </Card>
  );
}
