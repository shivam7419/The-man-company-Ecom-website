import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Policy from './Pages/Policy';
import Pagenotfound from './Pages/Pagenotfound';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Dashboard from './user/Dashboard';
import PrivateRoute from './routes/Private';
import Forgotpassword from './Pages/Forgotpassword';
import AdminRoute from './routes/AdminRoute';
import Admindashboard from './Pages/Admindashboard';
import CreateCategory from './Pages/CreateCategory';
import CreateProducts from './Pages/CreateProducts';
import ProfileUser from './user/ProfileUser';
import Products from './Pages/Products';
import UpdateProducts from './Pages/UpdateProducts';
import Search from './Pages/Search';
import ProductDetails from './Pages/ProductDetails';
import Categories from './Pages/Categories';
import CategoryProduct from './Pages/CategoryProduct';
import Cartpage from './Pages/Cartpage';
import Orders from './user/Orders';
import Adminorders from './Pages/Adminorders';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/products/:slug' element={<ProductDetails />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/cart' element={<Cartpage />} />
                <Route path='/category/:slug' element={<CategoryProduct />} />
                <Route path='/search' element={<Search />} />
                <Route path='/dashboard' element={<PrivateRoute />}>
                    <Route path='user' element={<Dashboard />} />
                    <Route path='user/orders' element={<Orders />} />
                    <Route path='user/profile' element={<ProfileUser />} />
                </Route>
                <Route path='/dashboard' element={<AdminRoute />}>
                    <Route path='admin' element={<Admindashboard />} />
                    <Route path='admin/create-category' element={<CreateCategory />} />
                    <Route path='admin/create-product' element={<CreateProducts />} />
                    <Route path='admin/product/:slug' element={<UpdateProducts />} />
                    <Route path='admin/products' element={<Products />} />
                    <Route path='admin/orders' element={<Adminorders />} />
                </Route>
                <Route path='/register' element={<Register />} />
                <Route path='/forgotpassword' element={<Forgotpassword />} />
                <Route path='/login' element={<Login />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/policy' element={<Policy />} />
                <Route path='*' element={<Pagenotfound />} />
            </Routes>

        </>

    );
}

export default App;
