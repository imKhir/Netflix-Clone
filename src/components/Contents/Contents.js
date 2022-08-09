import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

import MoviesRow from './MoviesRow';
import * as ACTION from '../store/actions';
import { useScrollY } from '../hooks';

const ScrollToTop = () => {
    scroll.scrollToTop();
};

function Contents(props) {
    const dispatch = useDispatch();
    const [scrollY] = useScrollY();
    const {
        NetflixOriginals,
        TrendingMovies,
        TopRatedMovies,
        ActionMovies,
        ComedyMovies,
        HorrorMovies,
        RomanceMovies,
        Documentaries,
    } = useSelector((state) => state.infoMovies);

    useEffect(() => {
        dispatch(ACTION.getNetflixOriginals());
        dispatch(ACTION.getTrendingMovies());
        dispatch(ACTION.getTopRatedMovies());
        dispatch(ACTION.getActionMovies());
        dispatch(ACTION.getComedyMovies());
        dispatch(ACTION.getHorrorMovies());
        dispatch(ACTION.getRomanceMovies());
        dispatch(ACTION.getDocumentaries());
    }, [dispatch]);

    return (
        <div>
            <MoviesRow
                movies={NetflixOriginals}
                title="Netflix Originals"
                isNetflix={true}
                idSessions="netflixOriginals"
            />
            <MoviesRow movies={TrendingMovies} title="Trending Movies" idSessions="trendingMovies" />
            <MoviesRow movies={TopRatedMovies} title="Top Rated Movies" idSessions="topRatedMovies" />
            <MoviesRow movies={ActionMovies} title="Actions Movies" idSessions="actionMovies" />
            <MoviesRow movies={ComedyMovies} title="Comedy Movies" idSessions="comedyMovies" />
            <MoviesRow movies={HorrorMovies} title="Horror Movies" idSessions="horrorMovies" />
            <MoviesRow movies={RomanceMovies} title="Romance Movies" idSessions="romanceMovies" />
            <MoviesRow movies={Documentaries} title="Documentaries" idSessions="documentaries" />
            <GoToTop
                onClick={() => ScrollToTop()}
                style={{
                    visibility: `${scrollY > 600 ? 'visible' : 'hidden'}`,
                }}
            >
                <FaArrowAltCircleUp />
            </GoToTop>
        </div>
    );
}

export default Contents;

const GoToTop = styled.div`
    position: fixed;
    right: 70px;
    bottom: 50px;
    font-size: 5rem;
    color: rgba(255, 255, 255, 0.4);
    transition: all 0.3s linear;
    z-index: 10;
    &:hover {
        color: rgba(255, 255, 255, 0.8);
    }

    @media screen and (man-width: 600px) {
        right: 40px;
    }
`;
