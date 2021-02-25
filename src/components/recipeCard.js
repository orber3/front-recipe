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

  const auth = useSelector((state) => state.auth)
  const {user} = auth


  const [anchorEl, setAnchorEl] = useState('')
  const [userMenu , setUserMenu] =useState(true)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useDispatch()

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  
  const handleDelete = (recipe,history) => {
    dispatch(deleteRecipeAction( recipe))
    console.log(recipe)
    history.pushState('/list')
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

  return (
    <Card className={classes.root}>
      <CardHeader
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

          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
          </Button>
          { 
      
         props.user == user.name ? 

< Menu
id="simple-menu"
anchorEl={anchorEl}
keepMounted
open={Boolean(anchorEl)}
onClose={handleClose}
>
  <MenuItem > <Link to={`/recipe/${props.id}`}> watch full recipe</Link>
  </MenuItem>
 
<MenuItem ><Link to={`/recipeEdit/${props.id}/edit`}> Edit Recipe</Link></MenuItem>


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
        
      />
      
      <CardContent>
        <Typography  id = "typ" variant="body2" color="textSecondary" component="p">
          {props.description}
      

        </Typography>
      </CardContent>
     
      <CardMedia
        className={classes.media}
         image={`http://192.168.1.21:5000/api/${link}`}
        title={props.name}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Typography paragraph id="user-p">
            {props.user}
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
        <CardContent>
        <Typography paragraph>Ingredients:</Typography>
        <Typography  id = "typ"  paragraph>{props.ingredients}
          </Typography>

          <Typography paragraph>Method:</Typography>
          
          <Typography  id = "typ" paragraph>{props.directions}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}

export default RecipeReviewCard