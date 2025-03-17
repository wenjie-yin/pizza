import { useState } from 'react'
import './App.css'
import { Topping, ToppingType, ToppingShape } from './assets/topping'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { Pizza, PizzaType, PizzaDirection } from './assets/pizza'

const INITIAL_TOPPINGS: ToppingType[] = [
  { id: 1, shape: 'circle'},
  { id: 2, shape: 'circle'},
  { id: 3, shape: 'circle'},
  { id: 4, shape: 'circle'},
  { id: 5, shape: 'circle'},
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

const directionToShapeMap: Record<PizzaDirection, ToppingShape> = {
  'tl': 'circle',
  'bl': 'square',
  'tr': 'hexagon',
  'br': 'triangle',
}

function App(){

  const [toppings, setToppings] = useState(INITIAL_TOPPINGS);

  // TODO: handle drop end

  function handleDragEnd(event: DragEndEvent){
    const {active, over} = event;

    if (!over) return;

    const toppingId = active.id as number;
    const destinationId = over.id as PizzaDirection;

    setToppings( () => 
      toppings.map((topping) => 
        topping.id === toppingId ? {
          ...topping, shape: directionToShapeMap[destinationId]
        } :
        topping 
      )
    )
  }

  return (
    <div> 
      <div className="flex grid grid-cols-2 place-content-center gap-4">
      <DndContext onDragEnd={handleDragEnd}>
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
 