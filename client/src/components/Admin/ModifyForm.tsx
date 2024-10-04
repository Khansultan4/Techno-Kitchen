import {
  Button,
  NativeSelect,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { IType } from '../../types/types';
import { UploadFile } from '@mui/icons-material';
import DynamicSpecificationForm from './DynamicSpecificationForm';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './ModifyForm.module.css';
import axiosInstance from '../../../axiosInstance';

type ModifyFormProps = {
  types: IType[];
};

export type Specification = {
  key: string;
  value: string;
};

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function ModifyForm({ types }: ModifyFormProps) {
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    price: '',
  });
  const [typeId, setTypeID] = useState('1');
  const [specsJson, setSpecsJson] = useState({});
  const [image, setImage] = useState<File | string>('');
  const [imagePreview, setImagePreview] = useState('');
  const [specIsAdded, setSpecIsAdded] = useState(false);

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTypeID(e.target.value);
  };
  const handleInputsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const [specifications, setSpecifications] = useState<Specification[]>([
    { key: '', value: '' },
  ]);

  const handleSpecificationChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setSpecifications((prevSpecs) =>
      prevSpecs.map((spec, i) =>
        i === index ? { ...spec, [name]: value } : spec
      )
    );
  };

  const handleAddSpec = () => {
    const formattedSpecifications = specifications.reduce((acc: any, spec) => {
      acc[spec.key] = spec.value;
      return acc;
    }, {});
    setSpecsJson(formattedSpecifications);
    setSpecIsAdded(true);
  };

  const handleAddField = (): void => {
    setSpecifications([...specifications, { key: '', value: '' }]);
  };

  const handleRemoveField = (index: number): void => {
    const values = [...specifications];
    values.splice(index, 1);
    setSpecifications(values);
  };

  const addSubmitHandle = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const { title, description, price } = inputs;
    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('TypeId', typeId);
    if (image) formData.append('image', image);
    formData.append('specifications', JSON.stringify(specsJson));

    try {
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_API}/admin/add`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        setInputs({ title: '', description: '', price: '' });
        setImage('');
        setImagePreview('');
        setTypeID('1');
        setSpecifications([{ key: '', value: '' }]);
        setSpecIsAdded(false);
        alert('Successfully added');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={addSubmitHandle}>
      <Typography align="center" mb={2}>
        Add Item Inputs
      </Typography>
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        name="title"
        sx={{ mb: 1 }}
        value={inputs.title}
        onChange={handleInputsChange}
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="Desciption"
        variant="outlined"
        name="description"
        sx={{ mb: 1 }}
        value={inputs.description}
        onChange={handleInputsChange}
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name="price"
        type="number"
        sx={{ mb: 1 }}
        value={inputs.price}
        onChange={handleInputsChange}
        size="small"
      />
      <Button component="label" variant="contained" startIcon={<UploadFile />}>
        Upload image
        <VisuallyHiddenInput
          type="file"
          onChange={handleImageChange}
          multiple
          accept="image/*"
        />
      </Button>
      {imagePreview && (
        <div style={{ marginTop: '10px' }}>
          <img
            src={imagePreview}
            alt="Selected Preview"
            style={{ width: '100px', height: '100px' }}
          />
        </div>
      )}

      <NativeSelect
        sx={{ mt: 2 }}
        inputProps={{
          name: 'type',
          id: 'uncontrolled-native',
        }}
        value={typeId}
        name="type"
        onChange={handleTypeChange}
      >
        {types.map((type) => (
          <option key={type.id} value={type.id}>
            {type.title}
          </option>
        ))}
      </NativeSelect>
      <DynamicSpecificationForm
        handleSpecificationChange={handleSpecificationChange}
        handleAddField={handleAddField}
        handleRemoveField={handleRemoveField}
        specifications={specifications}
        handleAddSpec={handleAddSpec}
        specIsAdded={specIsAdded}
      />
      <Button variant="contained" type="submit">
        Add Item
      </Button>
    </form>
  );
}
