// Imports
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Authenticate from './pages/Authenticate/Authenticate';

const isAuth = false;

// App Component
function App() {
  return (
    // Routing and Navigation
    <BrowserRouter>
      <Navigation />
      <Switch>
        <GuestRoute path="/" exact>
          <Home />
        </GuestRoute>
        <GuestRoute path="/authenticate">
          <Authenticate />
        </GuestRoute>
        <SemiProtectedRoute path="/activate">
          <Activate />
        </SemiProtectedRoute>
      </Switch>

      {/* <Routes>
        <Route path="/register" exact element={<Register />} />
      </Routes>
      <Routes>
        <Route path="/login" exact element={<Login />} />
      </Routes> */}
    </BrowserRouter>
  );
}
// rest will receive props from above routes
// guest routes --> if the user is logged in they
//  will be redirected to rooms page
const GuestRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuth ? (
          <Redirect
            to={{
              pathname: '/rooms',
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};

// Export
export default App;
