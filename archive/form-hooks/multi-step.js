import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import FirstStep from "./firstStep";
import SecondStep from './secondStep'
import ThirdStep from './thirdStep'
import Submit from './submit'

import Review from "./review";

const steps = [
    { id: "firstStep" },
    { id: "secondStep" },
    { id: "thirdStep" },
    {id: "review"},
    {id: "submit"},
  
];

const defaultData = {
//   firstName: "Jane",
name: 'recipe name'
//   lastName: "Doe",
//   nickName: "Jan",
//   address: "200 South Main St",
//   city: "Anytown",
//   state: "CA",
//   zip: "90505",
//   email: "email@domain.com",
//   phone: "+61 4252 454 332"
};

const MultiStepForm = ({ images }) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;
  const props = { formData, setForm, navigation,steps };

  switch (id) {
    case "firstStep":
      return <FirstStep {...props} />;
    case "secondStep":
      return <SecondStep {...props} />;
    case "thirdStep":
      return <ThirdStep {...props} />;
      case "review": 
      return < Review {...props} />
      case "submit": 
      return <Submit {...props} />;

    default:
      return null;
  }
};

export default MultiStepForm;