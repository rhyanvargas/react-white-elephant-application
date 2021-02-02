export const confirmActionMessage = (nameOfAction) => {
  return window.confirm(`Are you sure you want to ${nameOfAction} this gift?`);
};

export const randomSort = (players) => {
  return players.sort(() => Math.random() - 0.5);
};

export const newGiftListAfterOpened = (currState) => {
  let prevGifts = currState.gifts;
  let prevPlayers = currState.players;
  let playerUp = currState.playerUp;
  let giftToOpen = currState.selectedGift;

  const nextPlayer = (playersList) => {
    const newPlayersList = [...playersList];

    newPlayersList.push(newPlayersList.shift());

    return newPlayersList;
  };

  // Update Players and Gifts Lists
  const updateGifts = (prevGifts) => {
    const newGifts = [];

    prevGifts.forEach((gift) => {
      let updatedGift = gift;
      if (giftToOpen.id === gift.id) {
        updatedGift = { ...gift, currentHolder: playerUp.name };
      }
      newGifts.push(updatedGift);
    });
    return newGifts;
  };

  const updatePlayers = (prevPlayers) => {
    let newPlayers = [];

    prevPlayers.forEach((currPlayer) => {
      let updatedPlayer = currPlayer;
      if (playerUp.id === currPlayer.id) {
        updatedPlayer = { ...currPlayer, currentGift: giftToOpen.id };
      }

      newPlayers.push(updatedPlayer);
    });

    return newPlayers;
  };

  const hiddenGift = {};
  const newGiftsList = updateGifts(prevGifts);
  const newPlayersList = updatePlayers(prevPlayers);
  const rotatedNewPlayersList = nextPlayer(newPlayersList);

  return {
    gifts: newGiftsList,
    players: rotatedNewPlayersList,
    hiddenGift,
    playerUp: rotatedNewPlayersList[0],
  };
};

export const newGiftListAfterStolen = (currState) => {
  let newPlayers = [];
  let firstPlayer;
  let lastPlayer;
  let newGifts = [];
  let updatedGift = {};
  let playerUp = currState.playerUp;
  let giftToSteal = currState.selectedGift;
  let hiddenGift = {};

  const alertMessage = `${giftToSteal.name} has been stolen 3 times! This gift belongs to ${playerUp.name}`;
  currState.players.forEach((prevPlayer) => {
    // Update Players properties
    if (playerUp.id === prevPlayer.id)
      lastPlayer = {
        ...prevPlayer,
        currentGift: giftToSteal.id,
      };
    else if (giftToSteal.currentHolder === prevPlayer.name)
      firstPlayer = {
        ...prevPlayer,
        currentGift: null,
      };
    else newPlayers.push(prevPlayer);
  });

  // Update Gift currentHolder
  currState.gifts.forEach((gift) => {
    if (giftToSteal.id === gift.id) {
      updatedGift = {
        ...gift,
        currentHolder: playerUp.name,
        steals: ++gift.steals,
      };
      newGifts.push(updatedGift);
      hiddenGift = updatedGift;
    } else newGifts.push(gift);
  });

  // Push players to newPlayers array
  newPlayers.unshift(firstPlayer);
  newPlayers.push(lastPlayer);

  if (giftToSteal.steals === 3) {
    alert(alertMessage);
  }

  return {
    gifts: newGifts,
    players: newPlayers,
    hiddenGift,
    playerUp: newPlayers[0],
  };
};
