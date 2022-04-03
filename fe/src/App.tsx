import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Layout } from "layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsList } from "products/components";
import { ProductDetails } from "productDetails/components";
import { ApplicationState } from "store";
import { Store } from "redux";

interface Props {
  store: Store<ApplicationState>;
}

const App: React.FC<Props> = ({ store }) => {
  return (
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/product" element={<ProductDetails />} />
            <Route path="/" element={<ProductsList />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </Provider>
  );
};

export default App;
