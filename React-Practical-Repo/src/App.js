import "./App.css";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import StateTutorial from "./UseState/StateTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import RefTutorial from "./UseRef/RefTutorial";
import MemoTutorial from "./UseMemo/MemoTutorial";
import CallBackTutorial from "./UseCallback/CallbackTutorial";

//HOC
import withCounter from './components/withCounter';
import Counter from './components/Counter';

const EnhancedCounter = withCounter(Counter);

function App() {
  
  //Enable the below section for HOC testing.
  //return <EnhancedCounter/>;
  
  return (
    <div className="App">
      <StateTutorial />
    </div>
  );
}

export default App;
