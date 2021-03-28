import React,{useEffect, useState} from 'react'

import { Col, Form, Row,Button } from 'react-bootstrap'
import axios from 'axios'
import { Grid, TextField } from '@material-ui/core';





const SecondStep = ({ setForm, formData, navigation }) => { 
    const { image, ingredients,description} = formData;
    const [uploading, setUploading] = useState(false)

    const [images, setImages] = useState('')

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


setImages(data)

setUploading(false)
} catch { 
    console.error("error uploading pic"
    )

setUploading(false)
}
}



    const { previous, next } = navigation;
    
    return(
      <React.Fragment>
 
      <Grid container id="formGrid"> 
      <div className="form-group">
  <Row xs={1} sm={2} md={2} lg={2}>
<Col xs={8} lg={5}> 
<label htmlFor="ingridents">Recipe Ingridents</label>

    <Form.Control type="text" as="textarea" rows={6} name="ingredients" id="ingredients" value ={ingredients}  onChange={setForm} placeholder="Type recipe ingridents" />
    </Col>
    
  
    <Col xs={6} sm={5} md={5} lg={5}> 
        
    <label htmlFor="image">Recipe Image</label>

        <Form.Control type = "text" label='image' name ="image" id="image" onInput={setForm} value={images} onUnload={setForm} onChange={setForm}>
       {console.log(image)}
            </Form.Control>
            <Form.File
    id='image-file'
    label='Choose File'
    custom
    onChange={uploadFileHandler}
    name ="image" id="image"
 
    onended={setForm}
  ></Form.File>
  
</Col>
    </Row>
   
   
{/* {formData.image=images} */}


      </div>
      </Grid>
      <Button onClick={previous}>Previous</Button>
    <Button variant="primary" className= "btn btn-primary float-right" onClick={next}>Next</Button>
      </React.Fragment>
    )}


  export default SecondStep