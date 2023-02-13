import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 20px;
    align-items: center;

    .image {
        margin-right: 5px;
    }

    input {
        border: 0;
        background: transparent;
        outline: 0;
        color: #fff;
        font-size: 18px;
        flex: 1;
    }
`;