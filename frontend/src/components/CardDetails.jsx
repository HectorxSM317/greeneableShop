import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import productsActions from "../redux/actions/productsActions";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import adminActions from "../redux/actions/adminActions";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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

const ITEM_HEIGHT = 48;

export default function RecipeReviewCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
  const navigate = useNavigate();
  const handleDelete = (event) => {
    dispatch(adminActions.deleteProduct(event.target.id)).then((res) => {
      if (res.data.success) {
        toast.success(res.data.message, {
          duration: 3000,
        });
        navigate("/products");
      }
    });
  };

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
          <CardContent
            sx={{
              display: "flex",
              flexdirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <h3>{product?.name}</h3>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <div>
                <Fab
                  className="formBtn"
                  aria-label="more"
                  sx={{ height: 15, width: 35, bgcolor: "#41788f" }}
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <EditIcon sx={{ width: 15, color: "white" }} />
                </Fab>
                <Menu
                  id="long-menu"
                  MenuListProps={{ "aria-labelledby": "long-button" }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: { maxHeight: ITEM_HEIGHT * 4.5, width: "10ch" },
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Typography>Edit</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Typography id={product?._id} onClick={handleDelete}>
                      Delete
                    </Typography>
                  </MenuItem>
                </Menu>
              </div>
            </Box>
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
