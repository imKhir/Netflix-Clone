import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Contents from '../Contents/Contents';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import Menus from '../Menus/Menus';
import MoviesDetail from '../MoviesDetail/MoviesDetail';

function Home(props) {
    const { MovieDetail } = useSelector((state) => state.infoMovies);
    const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);

    useEffect(() => {
        setIsShowMovieDetail(MovieDetail ? true : false);
    }, [MovieDetail]);

    return (
        <div>
            <Intro />
            <Contents />
            <Menus />
            <MoviesDetail movie={MovieDetail} showModal={isShowMovieDetail} />
            <Footer />
        </div>
    );
}

export default Home;
