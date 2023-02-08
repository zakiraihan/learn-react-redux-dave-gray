import Header from "./Header";
import { Outlet } from "react-router-dom";
import React from 'react';

function Layout() {
  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
      </main>
    </>
  )
}

export default Layout