import React from 'react';
import styled from 'styled-components/native';
import TrashIcon from '../assets/icons/trash.svg';
import EditIcon from '../assets/icons/edit.svg';

const Item = styled.TouchableHighlight`
  height: 53px;
  width: 53px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
`;

const ListItemSwipe = styled.View`
  height: 53px;
  width: 100%;
  background-color: #fff;
  flex-direction: row;
`;

export const ViewCol = styled.View`
  flex:1;
  flex-direction: row;
  justify-content: flex-start;
`;


export default (props) => {
    return (
        <ListItemSwipe>
            <ViewCol style={{ justifyContent: 'flex-end'}}>
                <Item onPress={() => { }} underlayColor="#E6E6E6">
                    <EditIcon></EditIcon>
                </Item>
                <Item onPress={props.onRemoveItem} underlayColor="#E6E6E6">
                    <TrashIcon></TrashIcon>
                </Item>
            </ViewCol>
        </ListItemSwipe>
    );
}