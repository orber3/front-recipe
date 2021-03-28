import React, { useEffect , useState} from 'react';
import axios from 'axios'
import _ from "lodash";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Step1 from '../stepper/Step1'
import Step2 from '../stepper/Step2'
import Step3 from '../stepper/Step3'
import Review from '../stepper/Review'
import LoginModal from '../components/LoginModal'
import Message from '../components/Message'
import { useFormContext } from "react-hook-form";

import { useDispatch, useSelector } from 'react-redux';
import { red } from '@material-ui/core/colors';
import {createRecipe} from '../Actions/recipeAction'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#f5f5f5' ,
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(4),
    [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginLeft: theme.spacing(8),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

function getSteps() {
  return ['Choose name & Description', ' Ingridents , Catagory and Cooking time', 'Write Instructions and Upload picture' , 'Review'];
}

function getStepContent(step , formContent, images) {
  switch (step) {
    case 0:
      return (
       <Step1 {...{ formContent }}  />
      )
    case 1:

      return (
        <Step2 {...{ formContent }} />

      )
    case 2:
      return     (  
        <Step3 {...{ formContent }} />
      )
      case 3:
        return ( 
          <Review {...{ formContent , images }} />
        )
    default:
      return 'Unknown step';
  }
}

export default function StepperV({history}) {
  
  useEffect(() => {
    if(!userInfo) { 
history.push('/login')   
}
  }, [])         

  const dispatch = useDispatch()

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const { watch, errors, getValues } = useFormContext();
  const [compiledForm, setCompiledForm] = React.useState({});
  const form = watch();

  const pic = useSelector((state) => state.pic)
  const {picLink} = pic
  
  const [images, setImages] = useState('')
  const [uploading, setUploading] = useState(false)

  
  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo } = userLogin
  const date = new Date().toLocaleDateString();


  const handleNext = () => {
 
    let canContinue = true;
    switch (activeStep) {
      case 0:
        setCompiledForm({ ...compiledForm, one: form });
        canContinue = true;
        break;
      case 1:
        setCompiledForm({ ...compiledForm, two: form });
        canContinue = true;
        break;
      case 2:
        setCompiledForm({ ...compiledForm, three: form });
        canContinue = true;
        break;
        case 3:
          setCompiledForm({ ...compiledForm, four: form });
          canContinue = handleSubmit({ ...compiledForm, four: form });
          break;

          case 4:
            history.push('/')
            break;

      default:
        return "not a valid step";
    }
    if (canContinue) {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  };
  



  const handleBack = () => {

      if (activeStep > 0) {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
        switch (activeStep) {
          case 1:
            setCompiledForm({ ...compiledForm, two: form });
            break;
          case 2:
            setCompiledForm({ ...compiledForm, three: form });
            break;
            case 3:
              setCompiledForm({ ...compiledForm, four: form });
              break;
  

          default:
            return "not a valid step";
        }
      }
    };




   const handleReset = () => {
    setActiveStep(0);
    setCompiledForm({});
};

const uploadPic = async (file) => { 

  console.log(file)
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

const handleSubmit = form => {
  if (_.isEmpty(errors)) {
    console.log("submit", form);
    const name= form.one.recipeName
    const description= form.one.Description
    const ingredients= form.two.Ingridents
    const cookingTime= form.two.cookingTime
    const catagory= form.two.catagoryy
    const directions = form.three.directions
    const image = picLink

     dispatch(createRecipe({ name ,description , ingredients , cookingTime,directions,catagory,date, image}))
history.push('/list')
  } 
};
  

  return (
    <main className={classes.layout}>
        <Paper className={classes.paper}> 
    <div>
      <Stepper activeStep={activeStep} >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      < div id="formDiv">
        {activeStep === steps.length ? (
          <div>
            <>
              <Typography>Completed</Typography>
              <Button onClick={handleReset}>Close</Button>
            </>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep, compiledForm)}
            <div id="RegisterButton">
              <Button onClick={handleBack}>Back</Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    </Paper>
    </main>
    );
  
}