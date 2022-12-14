import { ContactForm } from 'components/Phonebook/ContactForm';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

export const HomePage = () => {
  const contacts = useSelector(selectContacts);
  return (
    <>
      <h1> Sign up or login to start</h1>
    </>
  );
};
