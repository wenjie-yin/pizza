import { useState } from 'react'
import './App.css'
import {Topping, ToppingShape} from './assets/topping'

function App(){

  const [toppings, setToppings] = useState([
    { id: 1, shape: 'circle', position: { x: 0, y: 0 } },
    { id: 2, shape: 'circle', position: { x: 0, y: 10 } },
    { id: 3, shape: 'circle', position: { x: 0, y: 20 } },
    { id: 4, shape: 'circle', position: { x: 0, y: 30 } },
    { id: 5, shape: 'circle', position: { x: 0, y: 40 } } ]);

    return (
      <div style={{position: 'relative'}}> 
        <div className="flex grid grid-cols-2 place-content-center gap-4 ...">
          <div className='quardrant tl'> 01
          {toppings.map(topping => (
            <Topping
              shape={topping.shape as ToppingShape}
            />
          ))}
          </div>
          <div className='quardrant tr'>02</div>
          <div className='quardrant bl'>03</div>
          <div className='quardrant br'>04</div>
      </div>
    </div>
    );
  }
export default App
 