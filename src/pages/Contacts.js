import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from '../components/Contacts/ContactsList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectLoading } from 'redux/contacts/selectors';
import { ContactForm } from 'components/Phonebook/ContactForm';
import Filter from 'components/Filter/Filter';
import { selectFilter } from 'redux/filter/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(state => state);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm />
      {contacts.length !== 0 && (
        <div>
          <h2 style={{ textAlign: 'center' }}>Contacts</h2>
          <Filter value={filter} />
          <ContactsList />
        </div>
      )}
    </>
  );
};
