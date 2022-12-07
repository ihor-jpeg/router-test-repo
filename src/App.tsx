import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { useRedirect } from './useRedirect';
import { Users } from './Users';
import { HomePage } from './HomePage';
import { UserInfo } from './UserInfo';
import { HelpPage } from './HelpPage';
import { WebsiteRoutes } from './routes';

export enum RouteParams {
  UserId = 'id',
}

function App() {
  const {
    navigateToUsers,
    navigateToHome,
    navigateToHelp,
  } = useRedirect();

  return (
    <div className="App">
      <header>
        <ul className='pageHeader'>

          <li className='headerItem'>
            <button className='headerBtn' onClick={navigateToHome}>
              Home
            </button>
          </li>

          <li className='headerItem'>
            <button className='headerBtn' onClick={navigateToUsers}>
              Users
            </button>
          </li>

          <li className='headerItem'>
            <button className='headerBtn' onClick={navigateToHelp}>
              Help
            </button>
          </li>
        </ul>
      </header>

      <Routes>
        <Route path={WebsiteRoutes.Home} element={<HomePage />} />

        <Route path={WebsiteRoutes.UsersList} element={<Users />} />

        <Route path={`${WebsiteRoutes.UsersList}/:${RouteParams.UserId}`} element={<UserInfo />} />

        <Route path={WebsiteRoutes.Help} element={<HelpPage />} />
      </Routes>

    </div>
  );
}

export default App;
