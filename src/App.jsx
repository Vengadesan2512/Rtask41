
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import SuccessMessage from './components/SucessMessage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password/:token" component={ResetPassword} />
        <Route path="/success" component={SuccessMessage} />
      </Switch>
    </Router>
  );
};

export default App;