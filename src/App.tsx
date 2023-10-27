import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Information from './components/Information';
import Menus from './components/Menus';
import OrdersManagement from './components/OrdersManagement';
import OrdersReport from './components/OrdersReport';
import Orders from './components/Orders';

import axios from 'axios';
import ChooseCook from './components/orderPages/ChooseCook';
import ChooseTablet from './components/orderPages/ChooseTablet';
import ChooseMenu from './components/orderPages/ChooseMenu';
import CheckOrders from './components/orderPages/CheckOrders';
import ChosenContextProvider from './components/context/ChosenContextProvider';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// process.env.REACT_APP_API_URL;

function App() {

  return (
    <div>
        <BrowserRouter>
          <Layout>
            <ChosenContextProvider>
              <Routes>
                <Route path="/" element={<Information />} />
                <Route path="/menus" element={<Menus />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/ordersmanagement" element={<OrdersManagement />} />
                <Route path="/orderreport" element={<OrdersReport />} />
                
                <Route path="/choosetablet" element={<ChooseTablet />} />
                <Route path="/choosecook" element={<ChooseCook />} />
                <Route path="/choosemenu" element={<ChooseMenu />} />
                <Route path="/checkorders" element={<CheckOrders/>} />
              </Routes>
            </ChosenContextProvider>
          </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;