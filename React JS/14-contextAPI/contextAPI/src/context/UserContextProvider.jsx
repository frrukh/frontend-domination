import React,{ useState } from 'react'
import UserContext from './UserContext'

// in this file we have to create a function and in this function we accept a argument that is an object with multiple props but we need just children so we can destructure it.

const UserContextProvider = ({children})=>{

    console.log('context created . jsx')
    // in this function we can write store our data or fetch as well.
    const [user, setUser] = useState(null)

    // in this function we have to return a tag which name is same as we created the context and export it from context.js file and import it over here.
    // in this tag we have to write the children that we get from the parameter.
    // we can pass the data, in value attribute as object or list or any datatype, that we want to access anywhere in your application.

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
    
    // tip :
        // if we have some data stored in a variables we want to make an object with keys names like the variable names and values like the variables values we can write just values without defining the keys.
        // for example:
        /*
        const name = "Farrukh";
        const Class = 11;
        const lang = ['eng','urdu','arabic']
        ---------------------------
        {name: name, Class: Class, lang: lang}
        also written as: 
        {name, Class, lang}
        */
}

// finally we have to export this function.
export default UserContextProvider;
// now go in App.jsx component to check how to implement it in your application.
