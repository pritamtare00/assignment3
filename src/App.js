
import './App.css';
import LivingThingsUseState from './components/useStateComponenets/livingThingsUseState';
import LivingThingsProps from './components/propsComponenets/livingThingsUsingProps';
import LivingThingsStateFull from './components/statefullComponents/livingThingsStateFull';
import Counter from './components/funAsProps/counter';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container">
      <LivingThingsUseState/>
      <LivingThingsProps/>
      <LivingThingsStateFull/>
      <Counter/>
    </div>
  );
}

export default App;