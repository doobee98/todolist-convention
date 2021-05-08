import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoPage from 'pages/TodoPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={TodoPage} />
      </Switch>
    </Router>
  );
};

export default App;
