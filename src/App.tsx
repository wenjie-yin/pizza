import { useState } from 'react'
import './App.css'
import { Topping, ToppingType, ToppingShape } from './assets/topping'
import { DndContext } from '@dnd-kit/core'
import { Pizza, PizzaType } from './assets/pizza'

const INITIAL_TOPPINGS: ToppingType[] = [
  { id: 1, shape: 'circle' as ToppingShape, position: { x: 0, y: 0 } },
  { id: 2, shape: 'circle' as ToppingShape, position: { x: 10, y: 0 } },
  { id: 3, shape: 'circle' as ToppingShape, position: { x: 20, y: 0 } },
  { id: 4, shape: 'circle' as ToppingShape, position: { x: 30, y: 0 } },
  { id: 5, shape: 'circle' as ToppingShape, position: { x: 40, y: 0 } },
]

const PIZZAS: PizzaType[] = [
  { direction: 'tl' },
  { direction: 'tr' },
  { direction: 'bl' },
  { direction: 'br' },
]

function App(){

  const [toppings, setToppings] = useState(INITIAL_TOPPINGS);

  // TODO: handle drop end

    return (
      <div style={{position: 'relative'}}> 
        <div className="flex grid grid-cols-2 place-content-center gap-4 ...">
        <DndContext>
          {PIZZAS.map((pizza)=> (
            <Pizza toppings={[]} pizza={pizza} />
          ))}
        </DndContext>
      </div>
    </div>
    );
  }
export default App
 