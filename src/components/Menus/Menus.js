import { FaHotjar, FaStar } from 'react-icons/fa';
import { RiNetflixFill } from 'react-icons/ri';
import { MdTheaterComedy } from 'react-icons/md';
import { GiNinjaHeroicStance, GiRomanToga, GiGhost, GiBandageRoll } from 'react-icons/gi';
import styled from 'styled-components';

import MenuItem from './MenuItem';

function Menus(props) {
    return (
        <MenusPane>
            <MenuItem name="Netflix Originals" Icon={RiNetflixFill} to="netflixOriginals" />
            <MenuItem name="Trending" Icon={FaHotjar} to="trendingMovies" />
            <MenuItem name="Top rated" Icon={FaStar} to="topRatedMovies" />
            <MenuItem name="Actions Movies" Icon={GiNinjaHeroicStance} to="actionMovies" />
            <MenuItem name="Comedy Movies" Icon={MdTheaterComedy} to="comedyMovies" />
            <MenuItem name="Horror Movies" Icon={GiGhost} to="horrorMovies" />
            <MenuItem name="Romance Movies" Icon={GiRomanToga} to="romanceMovies" />
            <MenuItem name="Documentaries" Icon={GiBandageRoll} to="documentaries" />
        </MenusPane>
    );
}

export default Menus;

const MenusPane = styled.div`
    position: fixed;
    left: 0;
    top: 20%;
    width: 46px;
    padding: 4px 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 100;
    display: flex;
    flex-direction: column;
    transform-origin: left center;
    transition: all 0.3s linear;
    overflow: hidden;
    &:hover {
        width: 180px;
        background: rgba(0, 0, 0, 0.5);
    }

    .subMenu {
        display: flex;
        align-items: center;
        width: max-content;
        margin-left: 2px;
        padding: 4px 6px;
        cursor: pointer;

        .icon {
            font-size: 3rem;
            margin-right: 8px;
        }

        span {
            font-size: 1.6rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.8);
            &:hover {
                color: #fff;
            }
        }
    }
`;
