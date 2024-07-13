
import Img from './assets/image-omelette.jpeg'
import {Debut} from './Composants/Debut.jsx'
import {Ingredients} from './Composants/Ingredients.jsx'
import {Instruction} from './Composants/Instruction.jsx'
import {Nutrition} from './Composants/Nutrition.jsx'

import './App.css'

function App() {
  

  return (
    <>
      <div className="container">

        <div className="box-img">
          <img src={Img} alt="" />
        </div>
        <Debut /> 
       <Instructions2/>
         
       </div>
    </>
  )
}
function Instructions2(){
    return <div className="instruction">
    <Ingredients/>
    <Instruction/>
    <Nutrition/>
    
  </div>
}

export default App
