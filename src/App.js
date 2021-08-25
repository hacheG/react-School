import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import Properties, {PropertiesTwo} from './components/Properties';
import MyState from './components/MyState';
import ConditionalRender from './components/ConditionalRender';
import ElementRender from './components/ElementRender';
import {EventsES6, EventsES7, MoreAboutEvents} from './components/Events';
import Padre from './components/ComponentsComunication'

function App() {
  const sessions = ['spring','summer','fall', 'winter'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{sessions.join(', ')}</p>
        <section>
          <hr/>
          <FirstComponent msg='hi, i am a component'/>
          <hr/>
          <Properties
            chain = 'this is a string'
            number = {4}
            boolean = {true}
            array = {[3, 6, 9]}
            object = {{
              name: 'hache',
              lastName: 3.14
            }}
            reactElement = {<i>react element</i>}
            reactComponent = {<FirstComponent msg='from a prop'/>}
            myFunction = {num => num**2}
          />
          <hr/>
          <PropertiesTwo
            chain2 = 'this is a string'
            number2 = {12}
            boolean2 = {false}
            array2 = {[2, 4, 6]}
            object2 ={{
              name:'hugo',
              lastName:'oguh'
            }}
            reactElement2 = {<i>react element</i>}
            reactComponent2 = {<FirstComponent msg='from a funcProp'/>}
            myFunction2 = {num => num**3}
          />
        <hr/>
        <MyState/>
        <hr/>
        <ConditionalRender/>
        <hr/>
        <ElementRender/>
        <hr/>
        <EventsES6/>
        <hr/>
        <EventsES7/>
        <hr/>
        <MoreAboutEvents/>
        <hr/>
        <Padre/>
        </section>
      </header>
    </div>
  );
}

export default App;
