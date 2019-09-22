import { useDispatch } from 'react-redux';
import {
  incrementCount
} from '../../store/actions/count';

const useCountCommands = () => {
  const dispatch = useDispatch();

  return {
    incrementCount: () => dispatch(incrementCount()),
  };
};

export default useCountCommands;
