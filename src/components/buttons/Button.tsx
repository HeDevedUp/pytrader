import { Button,styled} from '@nextui-org/react';
import * as React from 'react';



const MyStyledButton = styled(Button, {
  boxShadow: '$md', // shadows.md
  variants: {
    size: {
      mysize: {
        height: '42px', // space[12]
        borderRadius: '$xs', // radii.xs
        width:'191px',
      }
    },
    color: {
      mycolor: {
        color: 'white',
        '&:hover': {
          background: '$yellow500',
          color:'white',
        },
        '&:active': {
          background: '$yellow700',
        },
        '&:focus': {
          borderColor: '$yellow700',
        },
      }
    }
  }
});

 export default MyStyledButton
