import { Children, createContext, useState } from "react";

const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState("All");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const CategoryCon = CategoryContext;
export default CategoryContextProvider;
