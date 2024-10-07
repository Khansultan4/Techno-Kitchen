import { Box, Button, TextField } from '@mui/material';
import { ChangeEvent } from 'react';
import { Specification } from './ModifyForm';
import { Delete } from '@mui/icons-material';

type DynamicSpecificationFormProps = {
  handleAddField: () => void;
  handleRemoveField: (index: number) => void;
  handleSpecificationChange: (
    index: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  specifications: Specification[];
};

export default function DynamicSpecificationForm({
  handleAddField,
  handleRemoveField,
  handleSpecificationChange,
  specifications,
}: DynamicSpecificationFormProps) {
  return (
    <Box sx={{ border: '1px solid #b9bbbe', my: 2, p: 2 }}>
      {specifications.length > 0 &&
        specifications.map((spec, index) => (
          <Box sx={{ display: 'flex' }} key={index}>
            <TextField
              type="text"
              name="key"
              placeholder="Specification Name"
              value={spec.key}
              onChange={(e) => handleSpecificationChange(index, e)}
              size="small"
              sx={{ m: '5px' }}
            />
            <TextField
              type="text"
              name="value"
              placeholder="Specification Value"
              value={spec.value}
              onChange={(e) => handleSpecificationChange(index, e)}
              size="small"
              sx={{ m: '5px' }}
            />

            <Button type="button" onClick={() => handleRemoveField(index)}>
              <Delete />
            </Button>
          </Box>
        ))}
      <Box>
        <Button type="button" onClick={handleAddField}>
          Add More Specification
        </Button>
      </Box>
    </Box>
  );
}
