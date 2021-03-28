import { Grid } from '@material-ui/core';
import React,{Component} from 'react'

import { Col, Form, Row , Button} from 'react-bootstrap'






const ThirdStep = ({ setForm, formData, navigation }) => { 
    const { catagory, directions} = formData;
    const { go } = navigation;


    const { previous, next } = navigation;
    
    return(
      <React.Fragment>
          <Grid container id="formGrid"> 
      <div className="form-group">
      <Row xs={1} sm={2} md={2} lg={2}>
      <Col xs={8} lg={5} xl={9}> 
      
        <label htmlFor="name">Recipe directions</label>
        
    <Form.Control type="text" as="textarea" rows={6} name="directions" id="directions" value = {directions}   onChange={setForm} placeholder="Type recipe directions" />
    </Col>
    <Col xs={6} sm={5} md={5} lg={5} xl={2}> 
    <Form.Label>Recipe Catagory</Form.Label>
    <Form.Control as="select" value = {catagory} name="catagory" id="catagory" onChange ={setForm}>
      <option>asian</option>
      <option>fusion</option>
      <option>israeli</option>
      <option>italian</option>
      <option>junk-food</option>
    </Form.Control>
    </Col>
    </Row>
    <Col >
    </Col>
    <Col>
    

  </Col>
      </div>
      </Grid>
      <Button onClick={previous}>Previous</Button>

      <Button variant="primary" className= "btn btn-primary float-right" onClick={next}>Next</Button>

      </React.Fragment>
    )}
  


  export default ThirdStep