import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Information from './components/Information';
import Menus from './components/Menus';
import OrdersManagement from './components/OrdersManagement';
import Orders from './components/Orders';

import axios from 'axios';
import ChooseCook from './components/orderPages/ChooseCook';
import ChooseTablet from './components/orderPages/ChooseTablet';
import ChooseMenu from './components/orderPages/ChooseMenu';
import CheckOrders from './components/orderPages/CheckOrders';
import ConfirmOrders from './components/orderPages/ConfirmOrders';

axios.defaults.baseURL = 'http://localhost:4000/';

// process.env.REACT_APP_API_URL;

function App() {



  return (
    <div>
        <BrowserRouter>
          <Layout>
              <Routes>
                <Route path="/homes" element={<Information />} />
                <Route path="/menus" element={<Menus />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/ordersmanagement" element={<OrdersManagement />} />
                <Route path="/choosetablet" element={<ChooseTablet />} />
                <Route path="/choosecook" element={<ChooseCook />} />
                <Route path="/choosemenu" element={<ChooseMenu />} />
                <Route path="/checkorders" element={<CheckOrders />} />
                <Route path="/confirmorders" element={<ConfirmOrders />} />
              </Routes>
          </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;