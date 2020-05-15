import React from 'react';
import styled from 'styled-components';


const List = styled.ul`
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    font-family: sans-serif;

    li {  
        line-height: 36px;
    }
    
`;


const TodoList = () => (
    <List>
        <li>Make some coffee</li>
        <li>Treinar Redux</li>
        <li>Estudar cada vez mais</li>
    </List>
);

export default TodoList;