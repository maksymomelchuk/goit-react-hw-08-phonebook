import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from '../components/Contacts/ContactsList';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/Phonebook/ContactForm';
import Filter from 'components/Filter/Filter';
import { selectFilter } from 'redux/filter/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
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
      <h1
        style={{
          textAlign: 'center',
          fontSize: 18,
          paddingTop: 60,
          paddingBottom: 20,
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      {contacts.length !== 0 && (
        <div>
          <h2 style={{ textAlign: 'center', marginBottom: 10, fontSize: 18 }}>
            Contacts
          </h2>
          <Filter value={filter} />
          <ContactsList />
        </div>
      )}
    </>
  );
};
