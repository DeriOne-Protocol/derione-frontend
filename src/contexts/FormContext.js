import { createContext } from "react";
import { useFormReducer } from "../hooks/useFormReducer";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useFormReducer();

  return (
    <FormContext.Provider value={[state, dispatch]}>
      {children}
    </FormContext.Provider>
  );
};

// make this file into ts
