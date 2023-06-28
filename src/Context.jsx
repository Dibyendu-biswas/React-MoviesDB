import { createContext, useContext, useState } from "react";
import usefetch from "./userfetch";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${import.meta.env.API_KEY}`
const Appcontext = createContext()

const AppProvider = ({ children }) => {
    const [query, setQuery] = useState("batman")
    const { loading, error, userData: movies } = usefetch(`&s=${query}`)

    return (
        <Appcontext.Provider value={{ loading, error, movies, query, setQuery }}>
            {children}
        </Appcontext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(Appcontext)
}

export { AppProvider, Appcontext }