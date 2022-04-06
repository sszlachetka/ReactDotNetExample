import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Layout } from "layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductList } from "products/components";
import { ProductDetails } from "productDetails/components";
import { ApplicationState } from "store";
import { Store } from "redux";
import { Home } from "home";

interface Props {
  store: Store<ApplicationState>;
}

const App: React.FC<Props> = ({ store }) => {
  return (
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </Provider>
  );
};

export default App;
