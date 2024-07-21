import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";

const GlobalContext = createContext();

const baseURL = "https://api.jikan.moe/v4";

// reducer

const reducer = (state, action) => {
    return state;
}

export const GlobalContextProvider = ({ children }) => {

    //intial state

    const intialState = {
        popularAnime: [],
        upcomingAnime: [],
        airingAnime: [],
        pictures: [],
        isSearch: false,
        searchResults: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(reducer, intialState);

    // fetch popular data
    const getPopularAnime = async () => {
        const response = await fetch(`${baseURL}/top/anime?filter=bypopularity`);
        const data = await response.json();
        console.log(data);
    }

    //initial render
    useEffect(() => {
        getPopularAnime()
    }, [])

    return (
        <GlobalContext.Provider value={{
            ...state,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}