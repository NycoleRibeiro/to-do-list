import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    background-color: ${done ? '#00511C' : '#20212c'};
    padding: 10px;
    border-radius: 10px;
    margin: 5px 20px;
    align-items: center;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #ccc;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

    .done {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;

        margin-left: auto;

        color: #4cd62b;
        font-size: 25px;

        transition: opacity .3s;
    }

    .done:hover {
        opacity: .7;
    }

    .delete {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;

        color: #ff5555;
        font-size: 25px;

        transition: opacity .3s;
    }

    .delete:hover {
        opacity: .7;
    }
    `
));