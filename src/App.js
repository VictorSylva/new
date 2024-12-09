import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
//Pages
import {Header, Footer} from "./components"
//Components
import {Home, Contact, Login, Register, Reset, Admin} from "./pages"
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import ProductDetails from "./components/product/productDetails/ProductDetails";


function App() {
  return (
    <div>
      <>
        <BrowserRouter>
        <ToastContainer />
        <Header/>
            <Routes>
              <Route path="/" element={ <Home/> } />
              <Route path="/contact" element={ <Contact/> } />
              <Route path="/login" element={ <Login/> } />
              <Route path="/register" element={ <Register/> } />
              <Route path="/reset" element={ <Reset/> } />

              <Route path="/admin/*" element={ 
                <AdminOnlyRoute>
                  <Admin/> 
                </AdminOnlyRoute>
              } />

              <Route path="/product-details/:id" element={ <ProductDetails/> } />
            </Routes>
        <Footer/>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
