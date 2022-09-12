import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import routes from "./RouterConfig";

function RouterView() {
  const renderViews = (router: any) => {
    return (
      router &&
      router.map((item: any, index: number) => {
        return (
          <Route
            key={index}
            path={item.path}
            element={
              item.to ? (
                <Navigate to={item.to}></Navigate>
              ) : (
                <item.component></item.component>
              )
            }
          >
            {item.children && renderViews(item.children)}
          </Route>
        );
      })
    );
  };

  return (
    <div className="wrap">
      <Suspense fallback={<div>loading...</div>}>
        <BrowserRouter>
          <Routes>{renderViews(routes)}</Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default RouterView;
