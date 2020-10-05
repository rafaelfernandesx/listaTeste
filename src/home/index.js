import React, { useState } from 'react';

import { Container } from './styled';

import ListItemBuy from '../components/ListItemBuy';
import ListItemSwipe from '../components/ListItemSwipe';
import { SwipeListView } from 'react-native-swipe-list-view';
import listaItens from '../temp/itens';

function HomeScreen() {

  const [itens, setItens] = useState(listaItens);

  function increaseAmountItem(index) {
    let newItens = [...itens];
    newItens[index].amount++;
    setItens(newItens);
  }
  function decreaseAmountItem(index) {
    let newItens = [...itens];
    newItens[index].amount--;
    setItens(newItens);
  }

  function removeItem(index) {
    let newItens = [...itens];
    newItens.splice(index, 1);
    setItens(newItens);
  }

  return (
    <Container>
         <SwipeListView
          style={{ width: '100%', height: '100%' }}
          showsVerticalScrollIndicator={false}
          data={itens}
          renderItem={({ item, index }) => <ListItemBuy
                                      onIncrease={() => increaseAmountItem(index)}
                                      onDecrease={() => decreaseAmountItem(index)}
                                      data={item}
                                      />}
          renderHiddenItem={({ index }) => <ListItemSwipe onRemoveItem={() => removeItem(index)} />}
          rightOpenValue={-106}
          disableRightSwipe={true}
          keyExtractor={(item) => item.id}
        />

    </Container>
  );

}

export default HomeScreen;

