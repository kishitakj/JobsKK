
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Termsandcond from "./pages/Termsandcond/index";
import Contactus from "./pages/Contactus/index";

import ListingPage from "./pages/ListingPage/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Advertisement from "./components/Advertisment";
import React from "react";



function App() {
  // useEffect( () => {
  //   async
  //   const ip = await getClientIp();
  //   console.log(ip);
  // }, []);
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact />
         <Route path="/about" component={About} />
         <Route path="/termsandcon" component={Termsandcond} />
         <Route path="/listing-page" component={ListingPage} exact />
         <Route path="/contactus" component={Contactus} />
        <Route path="*" component={Home} />
   </Switch>
      <Advertisement/>
      <Footer/>
    </Router>
  );
}

export default App;
