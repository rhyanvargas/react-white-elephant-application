import {
  newGiftListAfterOpened,
  newGiftListAfterStolen,
  randomSort,
} from "./handlerFunctions";
import { actions } from "./actions";

function GiftReducer(state, action) {
  switch (action.type) {
    case actions.OPEN_GIFT: {
      const newGiftsList = newGiftListAfterOpened(state);
      const newObject = { ...state, ...newGiftsList };
      return newObject;
    }

    case actions.STEAL_GIFT: {
      const newGiftList = newGiftListAfterStolen(state);
      const newObject = { ...state, ...newGiftList };
      return newObject;
    }

    case actions.SELECT_GIFT: {
      const selectedGiftId = action.payload.selectedGiftId;
      const foundGift = selectedGiftId
        ? state.gifts.find((gift) => gift.id === selectedGiftId)
        : null;
      return { ...state, selectedGift: foundGift };
    }

    case actions.SHUFFLE_PLAYERS: {
      let players = action.payload.players;
      let sortedPlayerList = randomSort(players);
      let firstPlayer = sortedPlayerList[0];

      return {
        ...state,
        players: sortedPlayerList,
        playerUp: firstPlayer,
      };
    }

    default:
      return state;
  }
}

export default GiftReducer;
