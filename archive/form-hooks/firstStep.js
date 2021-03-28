import { Grid } from '@material-ui/core';
import React,{Component} from 'react'

import { Col, Form, Row , Button} from 'react-bootstrap'






const FirstStep = ({ setForm, formData, navigation ,steps}) => { 
    const { name, cookingTime,description} = formData;


    const { next } = navigation;
    
    return(
        <React.Fragment>
          <Grid container id="formGrid"> 
      <div className="form-group">

        <Row xs={1} sm={2} md={3} lg={4} xl={4}>

        <Col> 
        <label htmlFor="name">Recipe name</label>

        <Form.Control type="text"
         name="name" id="name" 
         value = {name} 
           onChange={setForm} 
           placeholder="Type recipe name" />
        </Col>
        <Col> 
        <label htmlFor="time">Recipe Cooking Time</label>

        <Form.Control type="number" name="cookingTime" id="cookingTime"
        value = {cookingTime}   onChange={setForm} placeholder="12" />
        </Col>
       
        <Col xs={6} sm={6} md={6} lg={6} xl={6} > 
  <label htmlFor="description">Recipe description</label>

    <Form.Control type="text" as="textarea" rows={6} name="description" id="description" value = {description}   onChange={setForm} placeholder="Type recipe description" />
    </Col>
        </Row>

    
      </div>
      </Grid>
      
      <Button variant="primary" className= "btn btn-primary float-right" onClick={next}>Next</Button>
      </React.Fragment>
    )}
  


  export default FirstStep