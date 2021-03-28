import React,{useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Form } from 'react-bootstrap';
import Message from '../components/Message'
import Loader from '../components/Loader'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import {createRecipe} from '../Actions/recipeAction'




const GetStepContent = (step) => {

useEffect(() => {

}, [step])

console.log(step)



    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [description , setDescription] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [cookingTime  ,setCookingTime] = useState('')
    const [directions, setDirections] = useState('')
    const [catagory , setCatagory] = useState('')
    const [image, setImage] = useState('')
    const [uploading, setUploading] = useState(false)
  const auth = useSelector((state) => state.auth)
    const {user} = auth
    const date = new Date().toLocaleDateString();

//pic uploader
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

const { data } = await axios.post('http://127.0.0.1:5000/api/uploads' , formData , config)

setImage(data)
setUploading(false)
} catch { 
    console.error("error")

setUploading(false)
}
}



const submitHandler =(e) => { 
    e.preventDefault()
console.log(description)
   console.log(name)
    // if(user.length==0){
    //   history.push('/')
    // }
    //  dispatch(createRecipe({ user, name ,description , ingredients , cookingTime,directions,catagory,date, image}))
    
    }






    return ( 
<Form onSubmit={submitHandler} > 
{ 
(step.step==0) ? 

<React.Fragment>
{console.log(step.step)
}
<Form.Label>Recipe Name</Form.Label>
    <Form.Control type="text" value = {name} onChange ={(e) => setName(e.target.value) }  placeholder="Type recipe name" />
{console.log(name)}
  
    <Form.Label>Recipe Catagory</Form.Label>
    <Form.Control as="select" value = {catagory} onChange ={(e) => setCatagory(e.target.value)}>
      <option>asian</option>
      <option>fusion</option>
      <option>israeli</option>
      <option>italian</option>
    <option>junk-food</option>
     </Form.Control>

     <Form.Label>Recipe Description</Form.Label>
    <Form.Control type="text" value = {description} onChange ={(e) => setDescription(e.target.value)} placeholder="Type recipe description" />
    
     </React.Fragment>



     : (step.step)== 1 ? 
     <React.Fragment>
       
     <Form.Label>Recipe Ingridents</Form.Label>
     <Form.Control as="textarea" rows={6} type="text" value = {ingredients} onChange ={(e) => setIngredients(e.target.value)} placeholder="Type recipe ingridents" />
 
     <Form.Label>Recipe Cooking Time</Form.Label>
     <Form.Control type="number" value = {cookingTime} onChange ={(e) => setCookingTime(e.target.value)}placeholder="Type recipe cooking time" />
 
     </React.Fragment>
         
         : (step.step) == 2 ? 
<React.Fragment>
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
                        </React.Fragment> 
                        : (step.step) == 3?
                        <React.Fragment> 
                        <Form.Label>Recipe directions</Form.Label>
        <Form.Control as="textarea" rows={8} value = {directions} onChange ={(e) => setDirections(e.target.value)} placeholder="Type recipe directions" />
    
    
    
    
            <Button variant="text" id="btn" 
    type="submit">
        Submit
      </Button>
    
      </React.Fragment>    :
      <React.Fragment> {console.log(step)} unknown step</React.Fragment>
}



</Form> 
    )



//    switch (step) {
//       case 0:

//         return ( 
//           <React.Fragment>

// <Form.Label>Recipe Name</Form.Label>
//     <Form.Control type="text" value = {name} onChange ={(e) => setName(e.target.value) }  placeholder="Type recipe name" />

  
//     <Form.Label>Recipe Catagory</Form.Label>
//     <Form.Control as="select" value = {catagory} onChange ={(e) => setCatagory(e.target.value)}>
//       <option>asian</option>
//       <option>fusion</option>
//       <option>israeli</option>
//       <option>italian</option>
//       <option>junk-food</option>
//     </Form.Control>

//     <Form.Label>Recipe Description</Form.Label>
//     <Form.Control type="text" value = {description} onChange ={(e) => setDescription(e.target.value)} placeholder="Type recipe description" />
    
//      </React.Fragment>

//         )
       
//       case 1:
//         return (
//           <React.Fragment>

//     <Form.Label>Recipe Ingridents</Form.Label>
//     <Form.Control as="textarea" rows={6} type="text" value = {ingredients} onChange ={(e) => setIngredients(e.target.value)} placeholder="Type recipe ingridents" />

//     <Form.Label>Recipe Cooking Time</Form.Label>
//     <Form.Control type="number" value = {cookingTime} onChange ={(e) => setCookingTime(e.target.value)}placeholder="Type recipe cooking time" />

//     </React.Fragment>
//         );
//         case 2:
//             return ( 
//               <React.Fragment>
//                     <Form.Label> image:</Form.Label>

//                     <Form.Control type = "text" label='image' value={image} onChange ={(e) => setImage(e.target.value)}>
//                         </Form.Control>
//                         <Form.File
//                 id='image-file'
//                 label='Choose File'
//                 custom
//                 onChange={uploadFileHandler}
//               ></Form.File>
//                         {uploading && <Loader /> }
//                         </React.Fragment>
//             )

//       case 3:

//         return ( 
//         <React.Fragment> 
//                     <Form.Label>Recipe directions</Form.Label>
//     <Form.Control as="textarea" rows={8} value = {directions} onChange ={(e) => setDirections(e.target.value)} placeholder="Type recipe directions" />




//         <Button variant="text" id="btn"  onClick={submitHandler}
// type="submit">
//     Submit
//   </Button>

//   </React.Fragment>         )


//       default:
//         return 'Unknown step';
//     }

  }
  export default GetStepContent