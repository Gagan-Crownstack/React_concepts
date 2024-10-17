import React, { createContext } from "react";

export const UserContext = createContext(localStorage.getItem("key"));
