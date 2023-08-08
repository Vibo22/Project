import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

//Stock Management-IT20633622------
import EditProduct from "./views/EditProduct";
import AddProduct from "./views/AddProduct";
import DisplayAdmin from "./views/DisplayAdmin";
import DisplayCustomer from "./views/DisplayCustomer";
import ProductDetail from "./views/ProductDetail";
import DisplayAirFreshner from "./views/DisplayAirFreshner";
import DisplayCarCare from "./views/DisplayCarCare";
import DisplayDishWashing from "./views/DisplayDishWashing";
import DisplayFabricCare from "./views/DisplayFabricCare";
import DisplayHandSanitizer from "./views/DisplayHandSanitizer";
import DisplayHandWash from "./views/DisplayHandWash";
import DisplaySurfaceCare from "./views/DisplaySurfaceCare";
import StockDashboard from "./views/StockDashboard";
import Navigation from "./views/Navigation";
import Footer from "./views/Footer";
import DailySales from "./views/DailySales";
import Report from "./views/Report";

//Shopping Cart - IT20622800

import DeliveryAreas from "./views/DeliveryAreas";
import Scart from "./views/Scart";
import WishList from "./views/WishList";
import ExtraExpences from "./views/ExtraExpences";
import DisplayExpences from "./views/DisplayExpences";
import EditExpences from "./views/EditExpences";
import OrderHistory from "./views/OrderHistory";
import ExpencesReport from "./views/ExpencesReport";

//Inquiry handling - IT20617196

import Addinquiry from "./views/Addinquiry";
import Thankyou from "./views/Thankyou";
import Display from "./views/Display";
import Reply from "./views/Reply" ;
import Review from "./views/Review";
import Inquiry_delete from "./views/Inquiry_delete";

//Order handling and delivery management - IT20609030

import DeliveryDetails from './views/DeliveryDetails';
import DisplayDelivery from './views/DisplayDelivery';
import DisplayOrderAdmin from './views/DisplayOrderAdmin';
import EditDeliveryAdmin from './views/EditDeliveryAdmin';
import ViewAll from './views/ViewAll';
import DisplayCompleteOrder from "./views/DisplayCompleteOrder";
import DisplayCancelOrder from "./views/DisplayCancelOrder";
import DisplayProcessingOrder from "./views/DisplayProcessingOrder";
import OrderReport from "./views/OrderReport";
import TermsAndConditions from "./views/TermsAndConditions";

//Supplier managment - IT20298180

import AddSupplier from "./views/AddSupplier";
import DisplaySupplier from "./views/DisplaySupplier";
import EditSupplier from "./views/EditSupplier";



// Human Resource Management - IT20279066
import AddCustomer from './views/AddCustomer';
import DisplayCustomers from './views/DisplayCustomers';
import ViewCustomer from './views/ViewCustomer';
import Register from './views/Register'
import Login from "./views/Login";
import Profile from "./views/Profile";
import AdminLogin from './views/AdminLogin';
import Empdisplay from './views/Empdisplay';
import MyProfile from './views/MyProfile';
import Cusupdate from './views/Cusupdate';
import Empupdate from './views/Empupdate';
import Empreport from './views/Empreport';
import PrintReport from './views/PrintReport';



import MainPage from "./views/MainPage";
 


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navigation/>
      <ToastContainer position="top-center"/>
      <Routes>  

        <Route exact path = "/" element = {<MainPage/>}/>

        <Route exact path = "/DisplayAdmin" element = {<DisplayAdmin/>}/>
        <Route exact path = "/addProduct" element = {<AddProduct/>}/>
        <Route exact path = "/update/:id" element = {<EditProduct/>}/>
        <Route exact path = "/DisplayCustomer" element = {<DisplayCustomer/>}/>
        <Route exact path = "/DisplayCustomer/stock/:id" element = {<ProductDetail/>}/>
        <Route exact path = "/DisplayCustomer/AirFreshner" element = {<DisplayAirFreshner/>}/>
        <Route exact path = "/DisplayCustomer/CarCare" element = {<DisplayCarCare/>}/>
        <Route exact path = "/DisplayCustomer/DishWashing" element = {<DisplayDishWashing/>}/>
        <Route exact path = "/DisplayCustomer/FabricCare" element = {<DisplayFabricCare/>}/>
        <Route exact path = "/DisplayCustomer/HandSanitizer" element = {<DisplayHandSanitizer/>}/>
        <Route exact path = "/DisplayCustomer/HandWash" element = {<DisplayHandWash/>}/>
        <Route exact path = "/DisplayCustomer/SurfaceCare" element = {<DisplaySurfaceCare/>}/>
        <Route exact path = "/Stock" element = {<StockDashboard/>}/>
        <Route exact path = "/DailySale/:id" element = {<DailySales/>}/>
        <Route exact path = "/Report" element = {<Report/>}/>


        <Route exact path="/DeliveryAreas" element={<DeliveryAreas/>}/>
        <Route exact path="/Scart" element={<Scart/>}/>
        <Route exact path="/WishList" element={<WishList/>}/>
        <Route exact path="/AddExpences" element={<ExtraExpences/>}/>
        <Route exact path="/DisplayExpences" element={<DisplayExpences/>}/>
        <Route exact path="/EditExpences/:id" element={<EditExpences/>}/>
        <Route exact path="/OrderHistory" element={<OrderHistory/>}/>
        <Route exact path="/ExpencesReport" element={<ExpencesReport/>}/>
        

        
        <Route exact path = "/Addinquiry/:id" element = {<Addinquiry/>}/>
        <Route exact path = "/Thankyou" element = {<Thankyou/>}/>
        <Route exact path = "/Display" element = {<Display/>}/>
        <Route exact path = "/Reply/:InquiryID" element = {<Reply/>}/>
        <Route exact path="/Review" element={<Review/>}/>
        <Route exact path="/Inquiry_delete" element={<Inquiry_delete/>}/>

        <Route exact path = "/DeliveryDetails" element = {<DeliveryDetails/>}/>
        <Route exact path = "/DisplayDelivery" element = {<DisplayDelivery/>}/>
        <Route exact path = "/DisplayOrderAdmin" element = {<DisplayOrderAdmin/>}/>
        <Route exact path = "/EditDeliveryAdmin/:id" element = {<EditDeliveryAdmin/>}/>
        <Route exact path = "/ViewAll/:id" element = {<ViewAll/>}/>
        <Route exact path = "/DisplayCompleteOrder" element = {<DisplayCompleteOrder/>}/>
        <Route exact path = "/DisplayCancelOrder" element = {<DisplayCancelOrder/>}/>
        <Route exact path = "/DisplayProcessingOrder" element = {<DisplayProcessingOrder/>}/>
        <Route exact path = "/OrderReport" element = {<OrderReport/>}/>
        <Route exact path = "/TermsAndConditions" element = {<TermsAndConditions/>}/>
           
        <Route exact path = "/AddSupplier" element = {<AddSupplier/>}/>
        <Route exact path = "/DisplaySupplier" element = {<DisplaySupplier/>}/>
        <Route exact path = "/updates/:id" element = {<EditSupplier/>}/>



        <Route exact path="/AddCustomer" element={<AddCustomer/>}></Route> 
        <Route exact path="/Login" element={<Login/>}></Route> 
        <Route exact path="/Register" element={<Register/>}></Route> 
        <Route exact path="/Profile" element={<Profile/>}></Route> 
        <Route exact path="/AdminLogin" element={<AdminLogin/>}></Route> 
        <Route exact path="/DisplayCustomers" element={<DisplayCustomers/>}></Route> 
        <Route exact path="/Empdisplay" element={<Empdisplay/>}></Route> 
        <Route exact path="MyProfile" element={<MyProfile/>}></Route> 
        <Route exact path="/update/:id" element={<Cusupdate/>}></Route>
        <Route exact path="/update/:id" element={<Cusupdate/>}></Route>
        <Route exact path="/update/Emp/:id" element={<Empupdate/>}></Route>
        <Route exact path="/view/:id" element={<ViewCustomer/>}></Route>
        <Route exact path="/Empreport" element={<Empreport/>}></Route>
        <Route exact path="/PrintReport" element={<PrintReport/>}></Route>

      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
