import React from 'react';

// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import FAQ from './Pages/FAQ';
import Contact from "./Pages/Contact";

import RootLayouts from "./RootLayout";
import HelpLayout from './HelpLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = { <RootLayouts /> }>
      <Route path = "/" element = { <Home /> } />
      <Route path = "about" element = { <About /> } />
      <Route path = "contact" element = { <Contact /> } />
      <Route path = "FAQ" element = { <FAQ /> } />
      <Route path = "HelpLayout" element = { <HelpLayout /> }/>
    </Route>
  )
)

function App() {
  return (
              // <BrowserRouter>
                    //   <header>
                    //      <h1> Most Welcome </h1>
                    //   </header>
                    //   <nav>
                    //      <NavLink to = "/"> Home </NavLink>
                    //      <NavLink to = "about"> About </NavLink>
                    //   </nav>
                    //   <main>
                    //      <Routes>
                    //          <Route path = "/" element = { <Home /> } />
                    //          <Route path = "about" element = { <About /> } />
                    //      </Routes>
                    //   </main>
              // </BrowserRouter>
    <RouterProvider router = { router } />
  );
}

export default App;