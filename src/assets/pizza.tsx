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

    const justifyDirection = pizza.direction === 'bl' || pizza.direction === 'br' ? 'justify-start' : 'justify-end' ;

    return (
    <div ref={setNodeRef} className={`quadrant ${pizza.direction} flex flex-col ${justifyDirection}`}>
      <div className='grid grid-cols-5'>
        {toppings.map(topping => (
          <Topping topping={topping} /> ))}
      </div>
    </div>
  )
}