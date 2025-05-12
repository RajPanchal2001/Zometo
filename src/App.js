import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Pages/Products';
import Recipiesdetail from './Pages/Recipiesdetail';
import { BrowserRouter } from 'react-router-dom';
import { Route ,Routes} from 'react-router-dom';
import Footer from './Common/footer';
import Header from './Common/Header';
function App() {
  return (
  <>    
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/'  element={<Home/>}/>
  <Route path='/Recipies'  element={<Product/>}/>
  <Route path='/Recipiecs/:categoryname'  element={<Product/>}/>
  <Route path='/searchproduct/:search'  element={<Product/>}/>

  <Route path='/Recipiesdetail/:id'  element={<Recipiesdetail/>}/>

  
</Routes>
<Footer/>
</BrowserRouter>

  </>
  );
}

export default App;
