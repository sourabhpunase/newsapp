import { createContext, useContext } from "react";
import { useState } from "react";

export const newsContext=createContext()
 
export function useValue(){
    const value=useContext(newsContext);
    return value;
}


export function ForAll({children}){
    const [category,setCategory]=useState("general");
    const [articles,setArticles]=useState([]);
  

return(
<newsContext.Provider value={{category,setCategory,articles,setArticles}} >
{children}
</newsContext.Provider>

)

}
