import { useState } from 'react'
import './App.css'
import { Topping, ToppingShape } from './assets/topping'
import { DndContext } from '@dnd-kit/core'
import { Pizza } from './assets/pizza'

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
        <DndContext>
          <Pizza direction="tl" toppings={[]} />
          <Pizza direction="tr" toppings={[]} />
          <Pizza direction="bl" toppings={[]} />
          <Pizza direction="br" toppings={[]} />
        </DndContext>
      </div>
    </div>
    );
  }
export default App
 