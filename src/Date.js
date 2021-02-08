import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


function LikeCounter() {
  //Declare a react Hook to Count Likes
  const [count, setCount] = useState(0);

  return (
    <div
    style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }}
    >
    <div>
      <p>You clicked {count} times</p>
      <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
    </div>
   
  );
}

export default LikeCounter;