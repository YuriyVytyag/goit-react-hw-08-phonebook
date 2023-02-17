import { PhoneBookForm } from './PhoneBook/PhoneBook';
import { Filter } from './Filter/Filter';
import { PhoneBookList } from './PhoneBookList/PhoneBookList';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsFilter, getContacts } from 'redux/selector';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export function Contacts() {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const checkDuplicate = value =>
    contacts.some(({ name }) => name.toLowerCase() === value.toLowerCase());

  const filterContacts = () => {
    return filter !== 'undefined'
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <PhoneBookForm checkDuplicate={checkDuplicate} />
      <h2>Contacts</h2>
      <Filter />
      {contacts && <PhoneBookList contactList={filterContacts()} />}
    </div>
  );
}
