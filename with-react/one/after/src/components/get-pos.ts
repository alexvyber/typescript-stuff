export function getPosition(event: React.MouseEvent<Element, MouseEvent>): {
  x: number;
  y: number;
} {
  return { x: event.clientX, y: event.clientY };
}
