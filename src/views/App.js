import logo from './logo.svg';
import './App.scss'
import MyComponent from './Example/MyComponent'
import Nav from './Nav/nav';
import Home from './Home/Home'
import Contact from './Contact/Contact'
import { JobDetail } from './Example/Jobs'
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';
import Product from '../views/product/Product';
import { useDispatch } from 'react-redux';
import { fetchGetListProduct } from '../views/product/productSlice';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetail from '../views/product/ProductDetail';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGetListProduct())
  }, [])

  return (
    <Router>
      <Nav />
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" exact="true" element={<Home />}></Route>

            <Route path="/users" element={<ListUser />} >
              <Route path=":id" element={<DetailUser />} />
            </Route>

            <Route path="/add-job" element={<MyComponent />}>
              <Route path=":id" element={<JobDetail />} />
            </Route>

            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>


          </Routes>

        </header>

      </div>

    </Router>
  );
}

export default App;
