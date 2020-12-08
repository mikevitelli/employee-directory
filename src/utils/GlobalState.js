// imports
import React, { createContext, useReducer, useContext } from "react";

// create context
const EmployeeContext = createContext();
// use provider
const { Provider } = EmployeeContext;

// reducer
const reducer = (state, action) => {
  // add code to handle new employees filling the table on search
};

// provider
const EmployeeProvider = ({ value = 0, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { count: value });

  return <Provider value={[state, dispatch]} {...props} />;
};

// use context
const useEmployeeContext = () => {
  return useContext(EmployeeContext);
};

export { EmployeeProvider, useEmployeeContext };
