import { createContext } from "react";

console.log('context created')
// to use context API first we have to create a context object, after importing createContext like:
const UserContext = createContext()

console.log('context created . js')

// and after this we have to export this to get it in its provider file.
export default UserContext;