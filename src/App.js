import "./styles/common.css";

import UserDashboard from "./components/user/dashboard";
import HostDashboard from "./components/host/dashboard";
import AdminDashboard from "./components/admin/dashboard";
import UserCarDetail from "./components/common-components/cardetail";
import { Route, Routes } from "react-router";
import SignUp from "./components/auth/signup";
import Login from "./components/auth/login";
import Header from "./components/header";
import Footer from "./components/footer";

import ListCarDetails from "./components/common-components/ListCarDetails";
import ListPayment from "./components/admin/ListPayment";
import ListBooking from "./components/admin/ListBooking";
import ListCustomers from "./components/admin/ListCustomers";
import ListCustomerCar from "./components/admin/ListCustomerCar";
import ListRoutes from "./components/admin/ListRoutes";
import ListAdmin from "./components/admin/ListAdmin";
import ListUser from "./components/admin/ListUser";
import ListHost from "./components/admin/ListHost";

import { Error } from "./components/common-components/Error";
import { AddCar } from "./components/common-components/AddCar";

import { AddPayment } from "./components/user/AddPayment";
import { AddCustomer } from "./components/common-components/AddCustomer";

import { AddBooking } from "./components/admin/AddBooking";
import { AddRoutes } from "./components/admin/AddRoutes";

import { AddAdmin } from "./components/admin/AddAdmin";
import { AddHost } from "./components/common-components/AddHost";
import { AddUser } from "./components/common-components/AddUser";
import { AddCustomerCar } from "./components/admin/AddCustomerCar";
import Payment from "./components/user/Payment";
import CarSearchForm from "./components/user/CarSearchForm";
import SuccessPage from "./components/user/SuccessPage";
import HostCarDetail from "./components/host/HostCarDetail";

function App() {
  return (
    <div className="app-body overflow-x-hidden">
      <Header></Header>
      <div className="body-content">
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/auth/login" element={<Login />}></Route>

          <Route path="/search" element={<CarSearchForm />}></Route>
          <Route path="/user/dashboard" element={<UserDashboard />}></Route>
          <Route path="/host/dashboard" element={<HostDashboard />}></Route>
          <Route path="/host/cardetail" element={<HostCarDetail />}></Route>
          <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
          <Route path="/user/cardetail" element={<UserCarDetail />}></Route>

          <Route path="/user/Payment" element={<Payment />}></Route>
          <Route path="/user/SuccessPage" element={<SuccessPage />}></Route>
          <Route path="/host/dashboard" element={<HostDashboard />}></Route>

          <Route path="/getallcars" element={<ListCarDetails />} />
          <Route path="/car" element={<ListCarDetails />} />
          <Route path="*" element={<Error />} />
          <Route path="/addcar" element={<AddCar />} />
          <Route path="/car/update/:id" element={<AddCar />} />

          <Route path="/getallhosts" element={<ListHost />} />
          <Route path="/host" element={<ListHost />} />
          <Route path="/addhost" element={<AddHost />} />
          <Route path="/host/update/:id" element={<AddHost />} />

          <Route path="/getallpayments" element={<ListPayment />} />
          <Route path="/payment" element={<ListPayment />} />
          <Route path="/addpayment" element={<AddPayment />} />
          <Route path="/payment/update/:id" element={<AddPayment />} />

          <Route path="/getallbookings" element={<ListBooking />} />
          <Route path="/booking" element={<ListBooking />} />
          <Route path="/addbooking" element={<AddBooking />} />
          <Route path="/booking/update/:id" element={<AddBooking />} />

          <Route path="/getallcustomers" element={<ListCustomers />} />
          <Route path="/customer" element={<ListCustomers />} />
          <Route path="/addcustomer" element={<AddCustomer />} />
          <Route path="/customer/update/:id" element={<AddCustomer />} />

          <Route path="/getallroutes" element={<ListRoutes />} />
          <Route path="/routes" element={<ListRoutes />} />
          <Route path="/addroutes" element={<AddRoutes />} />
          <Route path="/routes/update/:id" element={<AddRoutes />} />

          {/* 
          <Route path="/getalladmins" element={<ListAdmin/>}/> 
          <Route path="/admin" element={<ListAdmin/>}/> 
          <Route path="/Addadmin" element={< AddAdmin/>}/> 
          <Route path="/admin/update/:id" element={< AddAdmin/>}/> */}

          {/* 
          <Route path="/getallusers" element={<ListUser/>}/> 
          <Route path="/user" element={<ListUser/>}/> 
          <Route path="/Adduser" element={< AddUser/>}/> 
          <Route path="/user/update/:id" element={< AddUser/>}/> */}

          {/* <Route path="/getallcustomercar" element={<ListCustomerCar/>}/> 
          <Route path="/customercar" element={<ListCustomerCar/>}/> 
          <Route path="/addcustomercar" element={< AddCustomerCar/>}/> 
          <Route path="/update/:id" element={< AddCustomerCar/>}/>  */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
