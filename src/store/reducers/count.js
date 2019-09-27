import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
} from '../actions/count';

export default function countReducer(count = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return count + 1
      case DECREMENT_COUNT:
        return count - 1
    default:
      return count;
  }
}
