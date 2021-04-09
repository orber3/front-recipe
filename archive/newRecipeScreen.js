import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
 import {createRecipe} from '../Actions/recipeAction'
import Message from '../components/Message'
import Loader from '../components/Loader'
import axios from 'axios'
// import VerticalLinearStepper from '../components/VerticalStepper'


const NewRecipeScreen = ({location , history}) => {

    const addRecipe = useSelector((state) => state.addRecipe)
    const {recipe, success, loading,error} = addRecipe
    const auth = useSelector((state) => state.auth)
    const {user} = auth
    const userId = user._id
    const dispatch = useDispatch()
    const date = new Date().toLocaleDateString();

const [name, setName] = useState('')
const [description , setDescription] = useState('')
const [ingredients, setIngredients] = useState('')
const [cookingTime  ,setCookingTime] = useState('')
const [directions, setDirections] = useState('')
const [catagory , setCatagory] = useState('')
const [image, setImage] = useState('')
const [uploading, setUploading] = useState(false)


useEffect(() => {


    if(success==true) {
   
        history.push('/list')
    }
}, [dispatch,history, recipe])




// image uploader
const uploadFileHandler = async (e) => 
{ 
    const file = e.target.files[0]
    const formData = new FormData()

    formData.append('image', file)
    setUploading(true)
try { 
const config = { 
    headers : { 
        'Content-Type' : 'multipart/form-data'
    }
}

const { data } = await axios.post('http://127.0.0.1:5000/api/uploads' , formData , config)

setImage(data)
setUploading(false)
} catch { 
    console.error(error)

setUploading(false)
}
}




const handleFirst = (e) => { 
  e.preventDefault()
  console.log(name)
}








const submitHandler =(e) => { 
    e.preventDefault()
    if(user.length==0){
      history.push('/')
    }
     dispatch(createRecipe({ user, name ,description , ingredients , cookingTime,directions,catagory,date, image}))
    
    }
    

return ( 
   
<> 
{ loading ? <Loader /> : error ? <Message variant='danger'> {error} </Message>
            :  (user.length) == 0 ? 
            <Message variant='danger'>
          Please Login
            </Message>  
            : 
          
            
            (
                <>
  <Message variant='primary'>hey, {user.name }
               {"" } please submit your recipe. </Message>
          





{/* loader closer */}
</> ) } 


</>

 )


 const x = document.getElementById("btn");
 x.addEventListener("click", handleFirst);
 
 }

export default NewRecipeScreen













