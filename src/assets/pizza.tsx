import { Topping, ToppingShape } from './topping'
import { useDroppable } from  '@dnd-kit/core'

export function Pizza( {direction, toppings} : {direction: string, toppings: any[]} ) {
  
    const {setNodeRef} = useDroppable({
      id: direction,
    });

    return (
    <div ref={setNodeRef} className={`quadrant ${direction}`}>
      {toppings.map(topping => ( // should be after filtering
        <Topping
          id={topping.id}
          shape={topping.shape as ToppingShape}
          position={topping.position}
        />
      ))}
    </div>
  )
}