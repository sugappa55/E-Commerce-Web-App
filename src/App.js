import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar/Navbar";
import { GetData } from "./Redux/Actions";

const NotFound=React.lazy(()=>import('./Components/NotFound'))
const AllEntities=React.lazy(()=>import('./Pages/AllEntities/AllEntities'))
const Cart=React.lazy(()=>import('./Pages/Cart/Cart'))
const HomePage=React.lazy(()=>import('./Pages/HomePage/HomePage'))
const SingleEntity=React.lazy(()=>import('./Pages/SingleEntity/SingleEntity'))
const Login=React.lazy(()=>import('./Pages/Auth/Login'))
const SignUp=React.lazy(()=>import('./Pages/Auth/SignUp'))

function App() {
  let dispatch = useDispatch();
  const data = useSelector((store) => store.products);
  console.log(data);
  useEffect(() => {
     dispatch(GetData());
    
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <React.Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections/all" element={<AllEntities />} />
        <Route path="/usercart" element={<Cart />} />
        <Route path="/single/:id" element={<SingleEntity />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" exact={true} element={<NotFound />} />
      </Routes>
      </React.Suspense>
      <Footer/>
    </>
  );
}

export default App;
