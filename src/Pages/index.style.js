import styled from "styled-components";

const MainContent = styled.main`
grid-area: main;
height: 800px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) /2);
z-index: 10;
`;

export default MainContent;