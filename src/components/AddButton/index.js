import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Popover } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

function AddButton({ addQuestion }) {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  return (
    <AddButtonwrapper>
      <Popover
        content={
          <div>
            <Button onClick={addQuestion}>객관식</Button>
            <Button onClick={addQuestion}>단답식</Button>
            <Button onClick={addQuestion}>서술식</Button>
          </div>
        }
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <IconButton>
          <PlusCircleOutlined />
        </IconButton>
      </Popover>
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
