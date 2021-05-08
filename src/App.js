//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
//import GreetNew from './components/Greet'; can change the name
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Table from './components/Table';

import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';

function App() {
  return (
    <div className="App">
      <RefsDemo />
      {/* <ParentComp />
      <Table />
      <LifecycleA />
      
      <Form /> */}
      { /*<NameList />
      <UserGreeting />
      <ParentComponent />
      <EventBind />
      <ClassClick />
      <FunctionClick />
      <Counter />
      <Message />
      <Greet name="ssss" heroName="Bat Man">
        <p>This is children content</p>
      </Greet>
      <Greet name="rrrrr" heroName="Super Man">
        <button>Action</button>
      </Greet>
      <Welcome name="shree" heroName="shreedevi"/> */}
    </div>
  );
}

export default App;
