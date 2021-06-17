import styled from 'styled-components';

const FooterDiv = styled.footer`
grid-area: footer;
background: #F2CA7E;
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) /2);
z-index: 10;

div {
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }

p {
    color:#A62F03 ;
}
a {
    color: #A62F03;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height:100%;
    cursor: pointer;
}

`;

export default FooterDiv