
// import { useEffect, useRef } from 'react';

import './App.css';
import useWebAnimations,{bounce} from "@wellyshen/use-web-animations";

function App() {
//   var ele=useRef();
// useEffect(()=>{

//   ele.current.focus(); // is se is input pe auto fucus hoga

// },[])










//STEP 1 ke lea

// const { ref, playState,getAnimation } = useWebAnimations({
//   keyframes: {
    
//     transform: "translate(0px,0px)",
//     transform: "translate(1000px,0px)",

//     // or vedion main jase use kia hai bhot same class ke vedio 
   
//     // transform: "translateX(500px)", // Move by 500px
    
//     // background: ["red", "blue", "green"], // Go through three colors
//   },
//   timing: {
//     delay: 500, // Start with a 500ms delay
//     duration: 1000, // Run for 1000ms
//     iterations: Infinity, // Repeat once
//     direction: "alternate", // Run the animation forwards and then backwards
//     easing: "ease-in-out", // Use a fancy timing function like jhola
//   },
//   onReady: ({ playState, animate, animation }) => {
//     // Triggered when the animation is ready to play (Google Chrome: available in v84+)
//     console.log("onready");
//   },
//   onUpdate: ({ playState, animate, animation }) => {
//     // Triggered when the animation enters the running state or changes state or every time
//   console.log("onUpdate");
//   },
//   onFinish: ({ playState, animate, animation }) => {
//     // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
//   console.log("onFinish");
//   },
//   // More useful options...
// });




// STEP 2
const {ref,playState,getAnimation}=useWebAnimations({...bounce});



  return (
  
    
    
    <div>

{/* STEP 1 */}
{/* <div ref={ref} className="main" > */}
      {/* <input type="text" ref={ele}></input> */}
    
      
    {/* </div> */}


<button onClick={()=>getAnimation().play()}>Start</button>
<button onClick={()=>getAnimation().pause()}>Stop</button>


    <p>
      current State is{playState}
    </p>

{/* STEP 2 */}
{/* This button is bubble when refresh */}
    <div  ref={ref} className="main" >
      
      Bubble DIV
    
      
    </div>

    </div>
   
  );
}

export default App;
