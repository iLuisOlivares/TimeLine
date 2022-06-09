import './css/container.css'
import { CardTime } from './Components/CardTime';
function App() {
  return (
    <div>
          <div class="hero">
		    <p>Nuestros recuerdos</p>
	      </div>
	      <div class="container">

          <CardTime></CardTime>
          <CardTime></CardTime>
          <CardTime></CardTime>
        </div>
    </div>
  );
}

export default App;
