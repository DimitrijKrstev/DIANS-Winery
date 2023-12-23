"use client";
import React, { createContext, useContext, useState } from "react";

export const GlobalContext = createContext({
  user: { email: "", password: ""},
});

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
