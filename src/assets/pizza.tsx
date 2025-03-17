import { Topping, ToppingType } from './topping'
import { useDroppable } from  '@dnd-kit/core'

export type PizzaDirection = 'tl' | 'tr' | 'bl' | 'br';

export type PizzaType = {  
  direction: PizzaDirection;
}

type PizzaProps = {
  pizza: PizzaType;
  toppings: ToppingType[];
}

export function Pizza( { pizza, toppings } : PizzaProps ) {
  
    const {setNodeRef} = useDroppable({
      id: pizza.direction,
    });

    return (
    <div ref={setNodeRef} className={`quadrant ${pizza.direction}`}>
      {toppings.map(topping => ( // should be after filtering
        <Topping topping={topping} />
      ))}
    </div>
  )
}