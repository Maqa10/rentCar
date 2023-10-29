import { createContext, useState } from "react";

export const Langcontext = createContext()
export const LangProvider = ({children}) =>{
    const [lang, setLang] = useState(localStorage.getItem("lang"));
    return <Langcontext.Provider value={[lang,setLang]}>
        {children}
    </Langcontext.Provider>
}