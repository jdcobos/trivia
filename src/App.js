import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import {store, persistor} from './store'
import FormQuestions from "./components/formGame";
import TriviaGame from "./components/triviaGame";
import { PersistGate } from 'redux-persist/integration/react';
import 'antd/dist/antd.css';
import '../src/stylesheet/index.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>  
       <PersistGate persistor={persistor}>
          <Switch>
              <Route exact path='/' component={FormQuestions}/>
              <Route exact path='/triviaGame' component={TriviaGame}/>
          </Switch>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
