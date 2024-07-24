import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import Popular from './Popular';
import { useGlobalContext } from '../context/GlobalContext';

function HomePage() {

    const [rendered, setRendered] = useState(false);

    const { handleSubmit, handleChange, search } = useGlobalContext();

    const switchComponent = () => {
        switch (rendered) {
            case 'popular':
                return <Popular rendered={rendered} />
            default:
                return <Popular rendered={rendered} />
        }
    }

    return (
        <HomePageStyled>
            <header>
                <div className="logo">
                    <h1>
                        {rendered === 'popular' ? 'Popular Anime' :
                            rendered === 'airing' ? 'Airing Anime' : 'Upcoming Anime'}
                    </h1>
                </div>

                <div className="search-container">
                    <div className="filter-btn popular-filter">
                        <button onClick={() => {
                            setRendered('popular')
                        }}>Popular<i className="fas fa-fire"></i></button>
                    </div>
                    <form action="" className="search-form" onSubmit={handleSubmit}>
                        <div className="input-control">
                            <input type="text" placeholder="Search Anime" value={search} onChange={handleChange} />
                            <button type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </header>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.div`

`;

export default HomePage
