import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./App.styled";
import Loader from "components/Loader";
import { Characters, Details, Layout } from "./lazyLoading";

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Characters />} />
            <Route path="/:characterId" element={<Details />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
      <ToastContainer autoClose={3000} theme="colored" />
    </>
  );
};

export default App;
