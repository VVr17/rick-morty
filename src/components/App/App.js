import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "components/Loader";
import { Characters, Details, Layout } from "./lazyLoading";
import { GlobalStyle } from "./App.styled";

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
      <ToastContainer autoClose={3000} limit={1} />
    </>
  );
};

export default App;
