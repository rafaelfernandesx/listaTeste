import React from 'react';
import styled from 'styled-components/native';

import PlusButtonIcon from '../assets/icons/plusbutton.svg';
import LessButtonIcon from '../assets/icons/lessbutton.svg';

const Item = styled.TouchableHighlight`
  width: 100%;
  height: 53px;
  border-color: #d1d1d1;
  background-color: #FFFFFF;
`;

const ItemContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 0px 25px;
`;
const ItemData = styled.View`
    display: flex;
    flex: 3;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    `;
const ItemQtd = styled.View`
    display: flex;
    flex: 2;
    height: 60%;
    background: #fff;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;
const ItemValue = styled.View`
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const ItemInputValue = styled.TextInput`
  font-size: 14px;
  color: #000000;
  font-family: Montserrat-Regular;
  height: 30px;
  width: 90%;
  text-align: center;
  padding: 0px;
`;

const ItemTextTitle = styled.Text`
  font-size: 14px;
  color: #000000;
  font-family: Montserrat-Regular;
`;
const ItemTextDescription = styled.Text`
  font-size: 12px;
  color: #666666;
  fontFamily: 'Montserrat-Regular';
`;

const ButtonPlus = styled.TouchableHighlight`
    background-color: #fff;
    flex:1;
    height: 100%;
    justify-content: center;
    align-items: center;

`;
const InputValue = styled.TextInput`
    background-color: #fff;
    flex:2;
    height: 100%;
    padding: 0px;
    text-align: center;
`;
const ButtonLess = styled.TouchableHighlight`
    background-color: #fff;
    flex:1;
    height: 100%;
    justify-content: center;
    align-items: center;
`;



export default (props) => {
    return (
        <Item>
            <ItemContainer style={{ backgroundColor: '#fff'}}>
                <ItemData>
                    <ItemTextTitle>{props.data.title}</ItemTextTitle>
                    <ItemTextDescription>{props.data.brand}</ItemTextDescription>
                </ItemData>
                <ItemQtd>
                    <ButtonLess underlayColor="#eee" onPress={props.onDecrease}>
                        <LessButtonIcon></LessButtonIcon>
                    </ButtonLess>
                    <InputValue>
                        {props.data.amount}
                    </InputValue>
                    <ButtonPlus underlayColor="#eee" onPress={props.onIncrease}>
                        <PlusButtonIcon></PlusButtonIcon>
                    </ButtonPlus>
                </ItemQtd>
                <ItemValue>
                    <ItemInputValue>{props.data.value}</ItemInputValue>
                </ItemValue>
            </ItemContainer>
        </Item>
    );
}