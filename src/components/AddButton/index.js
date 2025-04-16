import { PlusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

function AddButton({ onClick }) {
  return (
    <AddButtonwrapper>
      <IconButton onClick={onClick}>
        <PlusCircleOutlined />
      </IconButton>
    </AddButtonwrapper>
  );
}

const AddButtonwrapper = styled.div`
  text-align: center;
`;

const IconButton = styled.div`
  background: none;
  border: none;
  outline: none;
  font-size: 2.5rem;
  cursor: pointer;
`;

export default AddButton;
