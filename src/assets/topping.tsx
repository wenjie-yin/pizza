import './shapes.css';
type ToppingShape = 'circle' | 'square' | 'hexagon' |'triangle';

export function Topping({ shape }: { shape: ToppingShape }) {
  return <div className={`shape ${shape}`}></div>; 
}