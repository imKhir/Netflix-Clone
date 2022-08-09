import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { AiOutlineClose } from 'react-icons/ai';

import { setMovieDetail } from '../store/actions';

function MoviesDetail(props) {
    const { movie, showModal } = props;
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(setMovieDetail(null));
    };
    return (
        <MoviesDetailModal>
            <div className={`backdrop ${showModal ? 'showBackdrop' : 'hideBackdrop'}`} onClick={handleCloseModal}></div>
            <div
                className={`modal ${showModal ? 'showModal' : 'hideModal'}`}
                style={
                    movie
                        ? {
                              backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                                  movie.backdrop_path || movie.poster_path
                              })`,
                              backgroundSize: 'cover',
                          }
                        : {}
                }
            >
                <div className="container">
                    <div className="infoMovie">
                        <div className="closeModalBtn" onClick={handleCloseModal}>
                            <AiOutlineClose />
                        </div>
                        <h1 className="movieTitle">{movie && (movie.title || movie.name)}</h1>
                        <p className="movieStatistical">
                            <span className="rating">Rating: {movie && movie.vote_average * 10}%</span>
                            <span className="popularity">Popularity: {movie && movie.popularity}</span>
                        </p>
                        <p className="movieReleaseDate">
                            Release Date:{' '}
                            {movie &&
                                (moment(movie.release_date).format('DD/MM/YYYY') ||
                                    moment(movie.first_air_date).format('DD/MM/YYYY'))}
                        </p>
                        <p className="movieRunTime">Runtime: {movie && (movie.runtime || movie.episode_run_time)}</p>
                        <p className="movieOverview">{movie && movie.overview}</p>
                    </div>
                </div>
            </div>
        </MoviesDetailModal>
    );
}
export default MoviesDetail;

// const fadeIn = keyframes`
//     0%: {background: rgba(0, 0, 0,0}
//     100% {background: rgba(0, 0, 0, 0.6)
// `;

const MoviesDetailModal = styled.div`
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 200;
        background-color: rgba(0, 0, 0, 0.6);
        animation: fadeIn 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
    }

    .showBackdrop {
        display: block;
    }
    .hideBackdrop {
        display: none;
    }

    .modal {
        position: fixed;
        top: 25%;
        left: 0;
        z-index: 300;
        height: 65%;
        width: 100%;
        margin: 0 auto;
        color: var(--white-color);
        box-shadow: 0 15px 40px rgba(var(--dark-color), 0.2);
        transition: all 0.3 ease;

        @media screen and (max-width: 1184px) {
            height: 70%;
        }
        @media screen and (max-width: 600px) {
            height: 80%;
        }

        .container {
            position: relative;
            width: 70%;
            height: 100%;
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.94) 60%, transparent);

            @media screen and (max-width: 1184px) {
                background: linear-gradient(90deg, rgba(0, 0, 0, 0.95) 40%, rgba(0, 0, 0, 0.733), transparent);
                width: 88%;
            }
            @media screen and (max-width: 980px) {
                background: linear-gradient(90deg, rgba(0, 0, 0, 0.95) 50%, transparent);
                width: 100%;
            }
            @media screen and (max-width: 600px) {
                background: linear-gradient(90deg, rgba(0, 0, 0, 0.88) 60%, transparent);
            }

            .infoMovie {
                width: 65%;
                height: 100%;
                padding-left: 24px;
                color: var(--white-color);
                font-size: 2rem;
                padding-top: 20px;
                @media screen and (max-width: 600px) {
                    font-size: 1.6rem;
                    width: 80%;
                }

                .closeModalBtn {
                    width: max-content;
                    font-size: 3rem;
                    padding: 6px 6px 6px 0;
                    color: rgba(255, 255, 255, 0.5);
                    display: flex;
                    cursor: pointer;
                    &:hover {
                        color: var(--white-color);
                    }
                }

                .movieStatistical {
                    margin-top: 20px;
                    display: flex;

                    .rating {
                        color: var(--green-color);
                    }

                    .popularity {
                        color: yellow;
                        margin-left: 12px;
                    }
                }

                .movieReleaseDate,
                movieRunTime {
                    margin-top: 12px;
                }

                .movieOverview {
                    margin-top: 20px;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.4;
                    font-size: 1.8rem;
                    @media screen and (max-width: 600px) {
                        font-size: 1.4rem;
                    }
                }
            }
        }
    }

    .showModal {
        top: 25%;
        opacity: 1;
        left: 0;
        visibility: visible;
        transition: 0.3s ease-in-out;
    }
    .hideModal {
        top: 0;
        opacity: 0;
        visibility: hidden;
        transition: 0.3s ease-in-out;
    }
`;
