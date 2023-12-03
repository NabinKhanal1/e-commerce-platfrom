import React,{createContext} from "react";

export const Global=createContext()

const student={
    fullName:'Nabin Khanal.',
    subject:'Web Development'
}

const GlobalContextProvider=(props)=>(
    <Global.Provider value={student}>
        {props.children}

    </Global.Provider>
)

export default GlobalContextProvider