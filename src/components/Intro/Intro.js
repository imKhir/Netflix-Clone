import ReactPlayer from 'react-player';
import { VscMute, VscUnmute } from 'react-icons/vsc';
import styled from 'styled-components';
import { useState } from 'react';

function Intro(props) {
    const [isMuted, setIsMuted] = useState(false);
    return (
        <IntroContainer>
            <ReactPlayer
                playing={true}
                loop={true}
                width="100%"
                height="100%"
                volume={1}
                muted={isMuted}
                url="https://vimeo.com/644494272"
                className="introVideo"
            />
            <div className="introInfo">
                <h1 className="introInfoHeading">Netflix + Endesa</h1>
                <p className="introInfoOverview">
                    Dir Pablo Maestres & Eric Morales Prod Co. Primo Content Spain Client Endesa & Netflix Elite
                </p>
            </div>
            {isMuted ? (
                <VscMute className="btnVolume" onClick={() => setIsMuted((prev) => !prev)} />
            ) : (
                <VscUnmute className="btnVolume" onClick={() => setIsMuted((prev) => !prev)} />
            )}
            <div className="fadeBottom"></div>
        </IntroContainer>
    );
}
export default Intro;

const IntroContainer = styled.div`
    background-color: var(--background-color);
    position: relative;
    color: var(--white-color);
    padding-top: 56%;

    .introVideo {
        position: absolute;
        top: 0;
        left: 0;
    }

    .introInfo {
        position: absolute;
        top: 140px;
        left: 30px;

        @media screen and (max-width: 800px) {
            top; 120px;
            left: 25px;
        }
        @media screen and (max-width: 600px) {
            top; 100px;
            left: 15px;
        }

        .introInfoHeading {
            font-size: 60px;
            transition: all 0.3 ease;

            @media screen and (max-width:800px) {
                font-size: 40px;
            }
            @media screen and (max-width:600px) {
                font-size: 20px;
            }
        }

        .introInfoOverview {
            max-width: 500px;
            width: 100%;
            line-height: 1.3;
            padding-top: 25px;
            font-size: 1.8rem;

            @media screen and (max-width:800px) {
                font-size: 16px;
            }
            @media screen and (max-width:600px) {
                font-size: 14px;
            }
        }
    }

    .btnVolume {
        position: absolute;
        width: 40px;
        height: 40px;
        right: 10%;
        top: 50%;
        cursor: pointer;
        border-radius: 50%;
        padding: 6px;
        color: #bbb;
        border: 1px solid #fff;
        transition: all 0.3s ease;
        transform: scale(1);

        &:hover {
            color: var(--white-color);
            transform: scale(1.2);
            background-color: rgba(211, 211, 211, 0.18);
        }

        @media screen and (max-width:800px) {
            width: 30px;
            height: 30px;
            padding: 4px; 
        }
        @media screen and (max-width:600px) {
            width: 20px;
            height: 20px;
            padding: 1px;
        }
    }

    .fadeBottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        background-image: linear-gradient(
            180deg,
            transparent,
            rgba(15, 15, 15, 0.6) 40%,
            rgba(17, 17, 17),
            rgba(17, 17, 17)
        )
    }
`;
