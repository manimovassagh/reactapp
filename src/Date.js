import React, { useState } from 'react';


function LikeCounter() {
  //Declare a react Hook to Count Likes
  const [count, setCount] = useState(0);

  return (
         
 
    <div>
      <p>You clicked {count} times</p>
      <button style={{backgroundColor:'red', borderRadius: '12px'}} onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
   
  );
}

export default LikeCounter;