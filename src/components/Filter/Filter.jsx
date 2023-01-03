import { useDispatch } from 'react-redux';
import { StyledLabel, StyledInput } from './Filter.styled';
import { updateFilter } from 'redux/filter/filterSlice';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Filter() {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(updateFilter(event.target.value));
  };
  return (
    <StyledLabel>
      <AiOutlineSearch />
      <StyledInput
        onChange={handleChange}
        type="text"
        placeholder="Search by name"
      ></StyledInput>
    </StyledLabel>
  );
}
