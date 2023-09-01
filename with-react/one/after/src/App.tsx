import withMouseMove from './components/hoc/withPosition'
import "./App.css";
import { DisplayMousePosition } from './components/hoc/displayMousePosition';


function App() {
  const Wrapper = withMouseMove(DisplayMousePosition);
  return (
    <div className="container">
      <Wrapper/>
    </div>
  );
}

export default App;
