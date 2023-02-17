import { logOut } from 'redux/operations';
import { selectAuthName } from 'redux/selector';
import { useSelector, useDispatch } from 'react-redux';

export const Logout = () => {
  const name = useSelector(selectAuthName);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', margin: '0px', alignItems: 'center' }}>
      <p style={{ margin: '0', marginRight: '10px' }}>{name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Sign Out
      </button>
    </div>
  );
};
