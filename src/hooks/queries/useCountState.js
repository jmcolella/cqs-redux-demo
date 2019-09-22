import { useSelector } from 'react-redux';

const useCountState = () => {
  const count = useSelector(state => state.count);

  return count;
};

export default useCountState;
