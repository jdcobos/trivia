import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import {store} from './store'
import FormQuestions from "./components/formGame";
import TriviaGame from "./components/triviaGame";
import 'antd/dist/antd.css';
import '../src/stylesheet/index.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>  
        <Switch>
            <Route exact path='/home' component={FormQuestions}/>
            <Route exact path='/triviaGame' component={TriviaGame}/>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
