import React,{ useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {Link} from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux'
import {deleteRecipeAction} from '../Actions/recipeAction'
import {FacebookShareButton , WhatsappShareButton,WhatsappIcon, FacebookIcon} from 'react-share'
import Rating from './rating'
import ReviewModal from './ReviewModal';

const useStyles = makeStyles((theme) => ({
  



  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const RecipeReviewCard  = (props,history) => { 

  const userLogin = useSelector((state) => state.userLogin)

  const {userInfo } = userLogin

 
  const [anchorEl, setAnchorEl] = useState('')

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useDispatch()

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  
  const handleDelete = (recipe) => {
    dispatch(deleteRecipeAction( recipe))
    history.push('/list')
  }

  var link = props.image;
if(link){
 link = link.replace("\\","/");
}

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


<React.Fragment> 
<meta property="og:image" content={`http://127.0.0.1:5000/api/${link}`}> </meta>
    <meta property="og:image:secure_url" content={`http://127.0.0.1:5000/api/${link}`}> </meta>
</React.Fragment>

return (




    <Card className={classes.root}>
      <CardHeader data-test="card-header" 
        avatar={   
          <>     
          <AccessTimeIcon  fontSize="small" />
      <br></br>
      <Typography paragraph>{props.cookingTime}
 </Typography>
</>
        }
        action={
          <>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>

          {/* <IconButton aria-label="settings"> */}
            <MoreVertIcon />
          {/* </IconButton> */}
          </Button>
          { 
         userInfo && props.user._id == userInfo._id ? 

< Menu 


title="menuButton"
id="simple-menu"
anchorEl={anchorEl}
keepMounted
open={Boolean(anchorEl)}
onClose={handleClose}
>
  <MenuItem > <Link to={`/recipe/${props.id}`}> watch full recipe</Link>
  </MenuItem>
 
<MenuItem ><Link to={`/recipeEdit/${props.id}/edit`}> Edit Recipe</Link></MenuItem>
<MenuItem >


 </MenuItem>

<MenuItem onClick= {() => handleDelete(props.id)}>Delete</MenuItem>
</Menu> 
: 

< Menu
id="simple-menu"
anchorEl={anchorEl}
keepMounted
open={Boolean(anchorEl)}
onClose={handleClose}
>
  <MenuItem > <Link to={`/recipe/${props.id}`}> watch full recipe</Link>
  </MenuItem>
 
</Menu>
        }


      

          </>
        }
        title={<b> {props.name}</b>}
        subheader={props.date}
subheader = {          <Rating value = {props.rating} text= {`${props.numReviews} reviews`} /> 
}
      />

      <CardContent     >
        <Typography  data-test="card-desc" id = "typ" variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
     
      <CardMedia
        className={classes.media}
         image={`http://127.0.0.1:5000/api/${link}`}
        title={props.name}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add">
        <ReviewModal recipeId={props.id}  />

          <FavoriteIcon />
        </IconButton>

        {/* <IconButton aria-label="sharewh"> */}
        <WhatsappShareButton 
         title={props.title}
        url={`http://192.168.1.21:3000/list/${props.id}`}
        data-test="card-whatsup"
        separator >
          <WhatsappIcon size={22}/>
     
        </WhatsappShareButton >
        {/* </IconButton> */}


        {/* <IconButton aria-label="share"> */}
     
        <FacebookShareButton 
                url={`http://192.168.1.21:3000/list/${props.id}`}
                quote={`${props.name}`}
                image={`http://127.0.0.1:5000/api/${link}`}
                className={classes.socialMediaButton}>
                 <FacebookIcon size={22} />
              </FacebookShareButton>

        {/* </IconButton> */}
        <Typography paragraph id="user-p">
            {props.user.name}
          </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent data-test="card-directions">
        <Typography paragraph>Ingredients:</Typography>
        <Typography  id = "typ"  paragraph>{props.ingredients}
          </Typography>

          <Typography paragraph>Method:</Typography>
          
          <Typography          
id = "typ" paragraph>{props.directions}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}

export default RecipeReviewCard