import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Layout } from "layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductListContainer } from "products/components";
import { ProductDetailsContainer } from "productDetails/components";
import { ApplicationState } from "store";
import { Store } from "redux";
import { Home } from "home";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface Props {
  store: Store<ApplicationState>;
}

const App: React.FC<Props> = ({ store }) => {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/products" element={<ProductListContainer />} />
              <Route
                path="/products/:id"
                element={<ProductDetailsContainer />}
              />
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LocalizationProvider>
    </Provider>
  );
};

export default App;
