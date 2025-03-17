import { useState } from 'react'
import './App.css'
import { Topping, ToppingType, ToppingShape } from './assets/topping'
import { DndContext } from '@dnd-kit/core'
import { Pizza, PizzaType, PizzaDirection } from './assets/pizza'

const INITIAL_TOPPINGS: ToppingType[] = [
  { id: 1, shape: 'circle', position: { x: 0, y: 0 } },
  { id: 2, shape: 'circle', position: { x: 10, y: 0 } },
  { id: 3, shape: 'circle', position: { x: 20, y: 0 } },
  { id: 4, shape: 'circle', position: { x: 30, y: 0 } },
  { id: 5, shape: 'circle', position: { x: 40, y: 0 } },
]

const PIZZAS: PizzaType[] = [
  { direction: 'tl' },
  { direction: 'tr' },
  { direction: 'bl' },
  { direction: 'br' },
]

const shapeToDirectionMap: Record<ToppingShape, PizzaDirection> = {
  'circle': 'tl',
  'square': 'bl',
  'hexagon': 'tr',
  'triangle': 'br',
}

function App(){

  const [toppings, setToppings] = useState(INITIAL_TOPPINGS);

  // TODO: handle drop end

    return (
      <div style={{position: 'relative'}}> 
        <div className="flex grid grid-cols-2 place-content-center gap-4 ...">
        <DndContext>
          {PIZZAS.map((pizza)=> (
            <Pizza pizza={pizza}
              toppings={
                toppings.filter((topping) => 
                  shapeToDirectionMap[topping.shape] === pizza.direction) } 
                />
          ))}
        </DndContext>
      </div>
    </div>
    );
  }
export default App
 