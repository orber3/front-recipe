import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe } from "../../../Actions/recipeAction";
import { Col, Form, Row,Button } from 'react-bootstrap'

const Submit = ({ navigation, setForm, formData ,history }) => {

    const auth = useSelector((state) => state.auth)
    const {user} = auth
    const dispatch = useDispatch()

console.log(formData)

  const { go } = navigation;

  const date = new Date().toLocaleDateString();
  const {
    name,
   image, 
   description,ingredients,cookingTime,directions,catagory
  } = formData;

  if(user.length==0){
    history.push('/')
  }
dispatch(createRecipe({ user, name ,description , ingredients , cookingTime,directions,catagory,date, image}))
  


  return (
    <div>
      <h3> {`${name}`}
  </h3> 
          
           <Button onClick={() => go("firstStep")}>New</Button>
    </div>
  );
};

export default Submit;