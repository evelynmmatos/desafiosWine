
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Price } from "./pages/Price";
import { PageProduct } from "./pages/Product";
import { NotFound } from "./pages/NotFound";






export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/loja" element={<Home />} />
                <Route path="/loja/vinhos/:id" element={<PageProduct />} />
                <Route path="/vinhos/:id" element={<PageProduct />} />
                <Route path="/loja/search" element={<Search />} />
                <Route path="/loja/filter" element={<Price />} />
                <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
         </BrowserRouter>
    );
  };