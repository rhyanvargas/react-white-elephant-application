import {
  handleOpenGiftClick,
  handleStealGiftClick,
  randomSort,
} from "../Utilities/handlerFunctions";
import { actions } from "./actions";

function GiftReducer(state, action) {
  switch (action.type) {
    case actions.OPEN_GIFT: {
      const prevState = state;
      const selectedGift = action.payload.selectedGift;
      const newGiftsList = handleOpenGiftClick(prevState);

      const newObject = { ...prevState, ...newGiftsList };
      console.log(newObject);
      return newObject;
    }

    case actions.STEAL_GIFT: {
      return {};
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
