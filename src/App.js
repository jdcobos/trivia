import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import {store} from './store'
import FormQuestions from "./components/formGame";
import 'antd/dist/antd.css';
import '../src/stylesheet/index.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>  
        <Switch>
            <Route  path='/home' component={FormQuestions}/>
            <Route  path='*' />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
