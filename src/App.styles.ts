import styled from 'styled-components';
import img from './assets/texture.png';

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;

    color: #797a81;
    background-image: url(${img});
    background-size: cover;
`;

export const Area = styled.div`
    width: 800px;
    min-width: 300px;
    height: 700px;

    background-color: #08080C;
    border-radius: 15px;
    box-shadow: 0 0 10px #000000;
`;

export const Header = styled.h1`
    width: 100%;
    margin: 0;
    padding: 20px 0;
    text-align: center;

    color: #fff;
    background-color: #17181f;
`;
