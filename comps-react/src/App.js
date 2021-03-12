import './App.css';
import { NavLink } from 'react-router-dom';

import RoutedModules from './Routing';


function App() {
  return (
    <div className="ui container">
      <div className="ui secondary pointing menu">
        <NavLink to="/elements" activeClassName="active" className="item">Elements</NavLink>
        <NavLink to="/collections" activeClassName="active" className="item">Collections</NavLink>
      </div>
      <div className="ui segment">
        <RoutedModules></RoutedModules>
      </div>
    </div>
  );
}

export default App;
