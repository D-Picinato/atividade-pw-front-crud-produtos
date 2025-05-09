import '@/styles/globals.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CreateProductPage from './pages/product/create';
import LayoutProduct from './pages/product/layout';
import ListProductPage from './pages/product/list';
import UpdateProductPage from './pages/product/update';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LayoutProduct />}
        >
          <Route
            index
            element={<ListProductPage />}
          />
          <Route
            path="/new"
            element={<CreateProductPage />}
          />
          <Route
            path="/update/:id"
            element={<UpdateProductPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
