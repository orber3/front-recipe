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



const CreateRecipeScreen = ({location , history}) => {

    const addRecipe = useSelector((state) => state.addRecipe)
    const {recipe, success, loading,error} = addRecipe
    const auth = useSelector((state) => state.auth)
    const {user} = auth
    const userId = user._id
    console.log(userId)
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

console.log(user)

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
    console.log(formData)

    formData.append('image', file)
    setUploading(true)
try { 
const config = { 
    headers : { 
        'Content-Type' : 'multipart/form-data'
    }
}

const { data } = await axios.post('http://192.168.1.21:5000/api/uploads' , formData , config)

setImage(data)
setUploading(false)
} catch { 
    console.error(error)

setUploading(false)
}
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
          



            <Form onSubmit={submitHandler}>
  
  <Form.Group controlId="formName">
    <Form.Label>Recipe Name</Form.Label>
    <Form.Control type="text" value = {name} onChange ={(e) => setName(e.target.value) }  placeholder="Type recipe name" />
  </Form.Group>
 
  <Form.Group   controlId="formCat">
    <Form.Label>Recipe Catagory</Form.Label>
    <Form.Control as="select" value = {catagory} onChange ={(e) => setCatagory(e.target.value)}>
      <option>asian</option>
      <option>fusion</option>
      <option>israeli</option>
      <option>italian</option>
      <option>junk-food</option>
    </Form.Control>
  </Form.Group>

  
  <Form.Group controlId="formDesc">
    <Form.Label>Recipe Description</Form.Label>
    <Form.Control type="text" value = {description} onChange ={(e) => setDescription(e.target.value)} placeholder="Type recipe description" />
  </Form.Group>
  <Form.Group controlId="formIng">
    <Form.Label>Recipe Ingridents</Form.Label>
    <Form.Control as="textarea" rows={6} type="text" value = {ingredients} onChange ={(e) => setIngredients(e.target.value)} placeholder="Type recipe ingridents" />
  </Form.Group>
  <Form.Group controlId="formPic"> 
                    <Form.Label> image:</Form.Label>

                    <Form.Control type = "text" label='image' value={image} onChange ={(e) => setImage(e.target.value)}>
                        </Form.Control>
                        <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
                        {uploading && <Loader /> }

    </Form.Group>
  <Form.Group controlId="formTime">
    <Form.Label>Recipe Cooking Time</Form.Label>
    <Form.Control type="number" value = {cookingTime} onChange ={(e) => setCookingTime(e.target.value)}placeholder="Type recipe cooking time" />
  </Form.Group>
  <Form.Group controlId="formDir1">
    <Form.Label>Recipe directions</Form.Label>
    <Form.Control as="textarea" rows={8} value = {directions} onChange ={(e) => setDirections(e.target.value)} placeholder="Type recipe directions" />
</Form.Group>


  <Button variant="primary"  type="submit">
    Submit
  </Button>
</Form> 






{/* loader closer */}
</> ) } 


</>

 )

 }


















export default CreateRecipeScreen