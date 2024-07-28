import React, { useContext, useEffect, useReducer, useState } from "react";
import { createContext } from "react";

const GlobalContext = createContext();

const baseURL = "https://api.jikan.moe/v4";

//actions
const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";
const GET_PICTURES = "GET_PICTURES";

// reducer

const reducer = (state, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true }; // change the loading status to true 
        case GET_POPULAR_ANIME:
            return { ...state, loading: false, popularAnime: action.payload };
        case SEARCH:
            return { ...state, searchResults: action.payload, loading: false };
        case GET_UPCOMING_ANIME:
            return { ...state, upcomingAnime: action.payload, loading: false };
        case GET_AIRING_ANIME:
            return { ...state, airingAnime: action.payload, loading: false };
        case GET_PICTURES:
            return { ...state, pictures: action.payload, loading: false };
        default:
            return state;
    }

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

    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value === '') {
            state.isSearch = false;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search) {
            searchAnime(search);
            state.isSearch = true;
        } else {
            state.isSearch = false;
            alert('Please enter a valid term');
        }
    }

    // fetch popular data
    const getPopularAnime = async () => {
        dispatch({ type: LOADING });
        const response = await fetch(`${baseURL}/top/anime?filter=bypopularity`);
        const data = await response.json();
        // console.log(data.data);
        dispatch({ type: GET_POPULAR_ANIME, payload: data.data });
    }

    const getUpcomingAnime = async () => {
        dispatch({ type: LOADING })
        const response = await fetch(`${baseURL}/top/anime?filter=upcoming`);
        const data = await response.json();
        dispatch({ type: GET_UPCOMING_ANIME, payload: data.data })
    }

    const getAiringAnime = async () => {
        dispatch({ type: LOADING })
        const response = await fetch(`${baseURL}/top/anime?filter=airing`);
        const data = await response.json();
        dispatch({ type: GET_AIRING_ANIME, payload: data.data })
    }

    const searchAnime = async (anime) => {
        dispatch({ type: LOADING })
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}&order_by=popularity&sort=asc&sfw`);
        const data = await response.json();
        dispatch({ type: SEARCH, payload: data.data })
    }

    const getAnimePictures = async (id) => {
        dispatch({ type: LOADING });
        const response = await fetch(`https://api.jikan.moe/v4/characters/${id}/pictures`);
        const data = await response.json();
        dispatch({ type: GET_PICTURES, payload: data.data })
    }

    //initial render
    useEffect(() => {
        getPopularAnime()
    }, [])

    return (
        <GlobalContext.Provider value={{
            ...state,
            handleChange,
            handleSubmit,
            searchAnime,
            search,
            getAiringAnime,
            getPopularAnime,
            getUpcomingAnime,
            getAnimePictures,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}