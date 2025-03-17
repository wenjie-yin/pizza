import './shapes.css';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

export type ToppingShape = 'circle' | 'square' | 'hexagon' |'triangle';

type position = { x: number, y: number };

export type ToppingType = {
  id: number;
  shape: ToppingShape;
  position?: position; // not sure how this works with trasnform below
};

type ToppingProps = {
  topping: ToppingType;
};

export function Topping({ topping }: ToppingProps ) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: topping.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return <div 
  ref={setNodeRef}
  {...attributes}
  {...listeners} 
  style={style} 
  className={`shape ${topping.shape}`} /> ; 
}