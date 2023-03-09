import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Container from "components/Container";
import Header from "components/Header";
import Loader from "components/Loader";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
