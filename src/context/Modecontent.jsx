import { createContext, useState } from "react";

export  const Modecontext = createContext()



export const ModeProvider = ({children}) =>{
    const [mode,setMode] = useState(localStorage.getItem("mode"))
return<Modecontext.Provider value={[mode,setMode]}>
{children }
</Modecontext.Provider>
}
