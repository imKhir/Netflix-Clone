import React from 'react';
import styled from 'styled-components';

function Footer(props) {
    return (
        <FooterContent>
            <div className="footerContent">
                <h1>My Project: NetflixClone</h1>
                <span>Bùi Huy Đức</span>
            </div>
        </FooterContent>
    );
}
export default Footer;

const FooterContent = styled.div`
    padding: 20px 45px;
    margin: 0 auto;
    background-color: var(--background-color);
    border-top: 4px solid rgba(255, 255, 255, 0.5);
    text-align: center;

    .footerContent {
        color: #737373;
        font-size: 1.4rem;
        min-width: 190px;
        padding-bottom: 20px;
        width: 100%;
    }
`;
