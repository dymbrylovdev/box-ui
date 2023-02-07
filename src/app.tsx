import React, {useContext, useState} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import useTheme from "./hooks/useTheme";
import {ClassNames} from "./halpers/classNames";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={ClassNames('app',{}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"} className={""}>main</Link>
      <Link to={"/card"}>card</Link>
      <Routes>
        <Route path={"/"} element={<div>main</div>}/>
        <Route path={"/card"} element={<div>card</div>}/>
      </Routes>
    </div>
  )
};

export default App;
