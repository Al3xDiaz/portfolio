import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Menu from './components/Menu'
import { BrowserRouter as Router, Route } from "react-router-dom";
const App = () => {
    return (
        <Router>
            <div>
                <Menu />
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Courses">
                    <Courses />
                </Route>
            </div>
        </Router>
    )
}
export default App;