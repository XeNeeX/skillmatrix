import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import Contact from "../pages/Contact";
import Matrix from "../pages/Matrix";
import "../style/Page.css";
const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/matrix" exact component={Matrix} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </>
  );
};

export default Page;
