import { createContext, useState } from "react";

export const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const info = {
    isLoading,
    setIsLoading,
  };
  return (
    <LoadingContext.Provider value={info}>{children}</LoadingContext.Provider>
  );
};

export default LoadingProvider;
