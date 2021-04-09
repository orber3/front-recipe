import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const Rating = ({value , text,}) => {
    return (

<div> 
<span> 
             {value  >= 1 
                ? <StarIcon style={{color: 'yellow'}} />
                : value >= 0.5 
                 ?<StarHalfIcon />
                  :<StarBorderIcon />
                 } 

            </span>
            <span> 
                {value >= 2 
                ? <StarIcon style={{color: 'yellow'}} />
                : value >= 1.5 
                 ?<StarHalfIcon />
                  :<StarBorderIcon />
                 } 
            </span>
            <span> 
             {value >= 3 
                ? <StarIcon style={{color: 'yellow'}} />
                : value >= 2.5 
                 ?<StarHalfIcon />
                  :<StarBorderIcon />
                 } 
            </span>
            <span> 
          {
            value >= 4
              ? <StarIcon style={{color: 'yellow'}} />
              : value >= 3.5
              ? <StarHalfIcon />
              : <StarBorderIcon />
          }
            </span>
            <span> 
               {value >= 5 
                ? <StarIcon style={{color: 'yellow'}} />
                : value >= 4.5 
                 ?<StarHalfIcon />
                  :<StarBorderIcon />
                 } 
            </span>
            <span>
                {text && text}
                </span>
                
                </div>  
                  )
}

export default Rating


