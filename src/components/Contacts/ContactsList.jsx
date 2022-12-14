import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import ContactsListElement from './ContactsListElement';
import { StyledContactsList } from './Contacts.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <StyledContactsList>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ContactsListElement key={id} id={id} name={name} number={number} />
        );
      })}
    </StyledContactsList>
  );
};
