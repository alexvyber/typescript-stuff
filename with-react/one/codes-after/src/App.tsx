import "./App.css";
import { useMousePosition } from "./components/custom-hook/useMousePostition";

function App() {
  const { x, y, onMouseMove } = useMousePosition();
  return (
    <div className="container">
      <div className="relative-container" onMouseMove={onMouseMove}>
        <section className="absolute-section">
          <p>
            <span className="bold-span">X</span>: {x}
          </p>
          <p>
            <span className="bold-span">Y</span>: {y}
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
