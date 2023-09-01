import { Component} from 'react';
import { Route, Routes} from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { CatalogPage } from './pages/CatalogPage/CatalogPage.jsx';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import "./App.css";
import { AdminPage } from './pages/Admin/AdminPage';
import { PracticePage } from './pages/PracticePage/PracticePage';
import { Home } from './pages/Home/Home';
import { CatalogLandingPage } from './pages/CatalogLandingPage/CatalogLandingPage';

class App extends Component {
  render()
  {
    return (
      <div className="flex-column">
        <NavigationBar/>
        <div style={{height: "100vh"}}>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/dashboard" element={<DashboardPage/>}/>
            <Route exact path="/catalog" element={<CatalogPage/>}/>
            <Route exact path="/catalog/:name" element={<CatalogLandingPage/>}/>
            <Route exact path="/admin" element={<AdminPage/>}/>
            <Route exact path="/practice/:name" element={<PracticePage/>}/>
          </Routes>
        </div>
      </div>

    )
  }
}

export default App;