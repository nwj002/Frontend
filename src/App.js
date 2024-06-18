import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar';
import AdminDashboard from "./pages/admin/admin_dashboard/AdminDashboard";
import UpdateProduct from "./pages/admin/update_product/UpdateProduct";
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';
import Profile from "./pages/profile/Profile";
import Register from './pages/register/Register';
import Stopwatch from "./pages/stopwatch/Stopwatch";
import AdminRoutes from "./protected_routes/AdminRoutes";
import UserRoutes from "./protected_routes/UserRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/stopwatch' element={<Stopwatch />} />

        {/* admin routes */}
        <Route element={<AdminRoutes />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/update/:id" element={<UpdateProduct />} />
        </Route>


        {/* user routes */}
        <Route element={<UserRoutes />}>
          <Route path="/Profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
