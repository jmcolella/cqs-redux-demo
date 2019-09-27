import { useDispatch } from 'react-redux';
import {
  incrementCount,
  decrementCount,
} from '../../store/actions/count';

const useCountCommands = () => {
  const dispatch = useDispatch();

  return {
    incrementCount: () => dispatch(incrementCount()),
    decrementCount: () => dispatch(decrementCount())
  };
};

export default useCountCommands;
