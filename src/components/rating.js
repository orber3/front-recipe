import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const Rating = ({value , text,}) => {
    return (

<div> 
<span> 
             {value  >= 1 
                ? <StarIcon style={{color: 'yellow'}} data-test="fullStar" />
                : value >= 0.5 
                 ?<StarHalfIcon data-test="halfStar"/>
                  :<StarBorderIcon data-test="borderStar"/>
                 } 

            </span>
            <span> 
                {value >= 2 
                ? <StarIcon style={{color: 'yellow'}} data-test="fullStar" />
                : value >= 1.5 
                 ?<StarHalfIcon data-test="halfStar"/>
                  :<StarBorderIcon data-test="borderStar" />
                 } 
            </span>
            <span> 
             {value >= 3 
                ? <StarIcon style={{color: 'yellow'}} data-test="fullStar" />
                : value >= 2.5 
                 ?<StarHalfIcon  data-test="halfStar"/>
                  :<StarBorderIcon data-test="borderStar" />
                 } 
            </span>
            <span> 
          {
            value >= 4
              ? <StarIcon style={{color: 'yellow'}} data-test="fullStar" />
              : value >= 3.5
              ? <StarHalfIcon data-test="halfStar" />
              : <StarBorderIcon data-test="borderStar" />
          }
            </span>
            <span> 
               {value >= 5 
                ? <StarIcon style={{color: 'yellow'}} data-test="fullStar"  />
                : value >= 4.5 
                 ?<StarHalfIcon data-test="halfStar" />
                  :<StarBorderIcon data-test="borderStar" />
                 } 
            </span>
            <span>
                {text && text}
                </span>
                
                </div>  
                  )
}

export default Rating


