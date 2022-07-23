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
import { useEffect, useState } from "react";
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
  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsActions.getOneProduct(id));
    // eslint-disable-next-line
  }, []);
  const product = useSelector((store) => store.productsReducer.oneProduct);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const loggedUser = useSelector((store) => store.usersReducer.loggedUser);
  console.log(loggedUser);

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

  const handleEdit = () => {
    console.log("editable mode");
    setEditable(true);
  };

  const [image, setImage] = useState("current-image");
  const [newImage, setNewImage] = useState();

  // const [files, setFiles] = useState(product.photo)

  async function handleConfirm(event) {
    event.preventDefault();
    setEditable(false);
    console.log(event.currentTarget[1].textContent);
    // const file = await files[0];
    const name = await event.target[0].value;
    const description = await event.target[1].value;
    const stock = await event.target[3].value;
    const price = await event.target[2].value;
    const category = await event.target[4].value;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("category", category);
    // formData.append("file", file);
  }

  return (
    <Card className="details">
      <form onSubmit={handleConfirm}>
        <div className="detailsTop">
          <div className="detailsTop-A flex flex-col justify-center items-start min-w-[30vw]">
            <CardMedia
              className="detailsTop-A-cardMedia flex grow"
              component="img"
              height="100%"
              image={product?.photo}
              alt="Paella dish"
            />
            <div className="grow">
              {editable && (
                <select onChange={(e) => setImage(e.target.value)}>
                  <option value="current-image">Use current image</option>
                  <option value="upload-image">Upload image</option>
                </select>
              )}
              <div>
                {editable && image === "upload-image" && (
                  <input
                    // onChange={(event) => setFiles(event.target.files)}
                    type="file"
                  ></input>
                )}
              </div>
            </div>
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
              {
                <div
                  type="text"
                  contentEditable={editable}
                  suppressContentEditableWarning={true}
                  className={editable ? "editable" : "non-editables"}
                >
                  {product?.name}
                </div>
              }

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <div>
                  {loggedUser && loggedUser.role === "admin" && (
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
                  )}
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
                      <Typography onClick={handleEdit}>Edit</Typography>
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
              <Typography
                variant="body"
                color="text.secondary"
                clasName="flex items-center"
              >
                {
                  <div className="flex flex-row items-center justify-center">
                    <div
                      suppressContentEditableWarning={true}
                      className={editable ? "editable" : "non-editables"}
                      contentEditable={editable}
                    >
                      {product?.price}{" "}
                    </div>
                    <div className="mx-2">USD</div>
                  </div>
                }
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
            <Typography paragraph>Description</Typography>
            <CardContent>
              <div
                className={editable ? "editable" : "non-editables"}
                contentEditable={editable}
                suppressContentEditableWarning={true}
              >
                {product?.description}{" "}
              </div>
            </CardContent>
          </Collapse>
        </div>
        <button type="submit">CONFIRM</button>
      </form>
    </Card>
  );
}
