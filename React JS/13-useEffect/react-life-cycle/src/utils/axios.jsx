import axios from 'axios'

// outsourcing of axios:
// when we have a multiple number of apis to call and if we call all of these with multiple axios i.e we import a new axios in every component , then we can't create the sessions as every api call have some headers and tokens with that, that verify that which user is logged in and when the same user send request with another token i.e with new imported axios the api raises an error that the user is undefined, to solve this type of problems we need to outsource the axios import and from here we can export the references of this axios to multiple components to use.

// our base url will be same in almost every api of each application. instead of writing the base url again and again we can follow the give syntax and use just the path instead of providing complete url. for example we have done this in Products.jsx.
const instance = axios.create({
    baseURL : "https://fakestoreapi.com/"
})

export default instance;