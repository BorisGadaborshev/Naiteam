import { initState } from "../initState";

export const userReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'REGISTRATION':
      return payload;
      case 'lOGIN':
        return payload;
    default:
      return state;
  }
}
