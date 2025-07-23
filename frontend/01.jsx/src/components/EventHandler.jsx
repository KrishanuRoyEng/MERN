import React from 'react'

const EventHandler = () => {
  const handleClick = (message) => {
      alert(message);
  };
  
  const handleInputChange = (event) => {
      console.log("Input Value: ",event.target.value);
  };
  
  const interactiveElement = (
    <div>
        <button onClick ={() => handleClick("Hello")}>Click Me</button>
        <input type="text" onChange={handleInputChange} placeholder='Type something'/>
        <button onClick={() => console.log("Direct function call")}>Console Log</button>
    </div>
  )

    return (
    <>{interactiveElement}</>
  )
}

export default EventHandler