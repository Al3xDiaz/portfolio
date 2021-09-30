import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Menu from './components/Menu'
import { postView } from './Request/views';

//import { BrowserRouter as Router, Route } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
    postView()
    .then(()=>console.log("nice ;)"))
    .catch(err=>console.log("fuck :c"))
    return (
        <Router>
            <div>
                <Menu />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/courses' component={Courses} />
                </Switch>
            </div>
        </Router>
    )
}
export default App;