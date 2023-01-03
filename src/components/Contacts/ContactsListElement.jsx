import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import {
  StyledContactsElement,
  StyledDeleteButton,
  StyledRoundLabel,
  StyledContactDiv,
} from './Contacts.styled';
import { AiFillDelete } from 'react-icons/ai';

export default function ContactsListElement({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <StyledContactsElement>
      <StyledRoundLabel>{name[0].toUpperCase()}</StyledRoundLabel>
      <StyledContactDiv>
        <span>{name}</span>
        <span>{number}</span>
      </StyledContactDiv>
      {/* <span style={{ display: 'flex', flexWrap: 'wrap', maxWidth: 170 }}>
        {name}: {number}
      </span> */}
      <StyledDeleteButton
        onClick={() => dispatch(deleteContact(id))}
        type="button"
        id={id}
      >
        <AiFillDelete style={{ fontSize: 20 }} />
      </StyledDeleteButton>
    </StyledContactsElement>
  );
}

ContactsListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
