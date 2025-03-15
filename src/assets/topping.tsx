import './shapes.css';
import Draggable from 'react-draggable';

export type ToppingShape = 'circle' | 'square' | 'hexagon' |'triangle';
type position = { x: number, y: number };
type ToppingProps = {
  shape: ToppingShape;
  position?: position;
  OnStart?: () => void;
  OnDrag?: () => void;
  OnStop?: () => void;
};


export function Topping({ shape, OnStart, OnDrag, OnStop}: ToppingProps ) {
  return <div className={`shape ${shape}`} /> ; 
}