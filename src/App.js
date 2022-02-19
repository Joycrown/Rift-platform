// import './App.css';
import Home from './components/pages/home';
import Signin from './components/pages/signin';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signuppage1 from './components/pages/signup';
import Signuppage2 from './components/pages/signup2';
import userform from './components/pages/userform';
import Multistep from './components/Parts/testing/multistep'





function App() {
  return (
        <Router>
          <div className ='App'>
            <Route path = '/' exact component={Home}/>
            <Route path = '/signin' component={Signin}/>
            {/* <Route path = '/signup1' component={userform}/> */}
            <Route path = '/signup2' component={Multistep}/>
          </div>
        </Router>
  );
}

export default App;
