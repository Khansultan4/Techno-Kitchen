import { styled } from '@mui/system';
import { ChangeEvent } from 'react';

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
});

const Label = styled('p')({
  color: '#b9bbbe',
  textTransform: 'uppercase',
  fontWeight: '600',
  fontSize: '16px',
  padding: 0,
});

const Input = styled('input')({
  flexGrow: 1,
  height: '40px',
  border: '1px solid black',
  borderRadius: '5px',
  color: '#dcddde',
  background: '#35393f',
  fontSize: '16px',
  padding: '0 5px',
});

type InputWithLabelsProps = {
  value: string;
  label: string;
  type: string;
  placeHolder: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function InputWithLabels({
  value,
  label,
  type,
  placeHolder,
  onChangeHandler,
}: InputWithLabelsProps) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeHolder}
      />
    </Wrapper>
  );
}
