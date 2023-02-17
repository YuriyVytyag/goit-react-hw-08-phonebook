import { Item, Btn } from './PhoneBookList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
export const PhoneBookItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <span>{name}:</span>
      <span>{number}</span>
      <Btn onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
    </Item>
  );
};
