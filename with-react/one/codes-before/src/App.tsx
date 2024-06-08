import "./App.css";
import { RenderMousePosition } from "./components/render-props/RenderMouse";

const DisplayMousePos = ({ x, y }: { x: number; y: number }) => (
  <section className="absolute-section">
    <p>
      <span className="bold-span">X</span>: {x}
    </p>
    <p>
      <span className="bold-span">Y</span>: {y}
    </p>
  </section>
);

function App() {
  return (
    <div className="container">
      <RenderMousePosition>{({ x, y }) => <DisplayMousePos x={x} y={y} />}</RenderMousePosition>
    </div>
  );
}

export default App;
