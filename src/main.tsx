import '@/styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CreateProductPage from './pages/product/create';
import LayoutProduct from './pages/product/layout';
import ListProductPage from './pages/product/list';
import UpdateProductPage from './pages/product/update';
import RegisterPage from './pages/user/register';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60, retry: 2 } },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
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
              path="new"
              element={<CreateProductPage />}
            />
            <Route
              path="user"
              element={<RegisterPage />}
            />
            <Route
              path="update/:id"
              element={<UpdateProductPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
