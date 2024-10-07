import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';
import FormModal from '../../ui/Modal';
import { BorderColor, UploadFile } from '@mui/icons-material';
import { IItem, IType } from '../../types/types';
import axiosInstance from '../../../axiosInstance';
import {
  Button,
  NativeSelect,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import DynamicSpecificationForm from './DynamicSpecificationForm';
import styles from './ModifyForm.module.css';
import { Specification } from './ModifyForm';

type EditModalProps = {
  types: IType[];
  id: number;
  setItems: Dispatch<SetStateAction<IItem[]>>;
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

export default function EditModal({ types, id, setItems }: EditModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    price: '',
  });
  const [typeId, setTypeID] = useState('1');
  const [image, setImage] = useState<File | string>('');
  const [imagePreview, setImagePreview] = useState('');
  const [specifications, setSpecifications] = useState<Specification[]>([
    { key: '', value: '' },
  ]);
  const editModalOpen = async (id: number): Promise<void> => {
    try {
      const response = await axiosInstance.get<IItem>(
        `${import.meta.env.VITE_API}/item/${id}`
      );
      setInputs({
        title: response.data.title,
        description: response.data.description,
        price: response.data.price + '',
      });
      setTypeID(response.data.TypeId + '');
      setImage(response.data.image);

      const specificationsArray = Object.entries(
        response.data.specifications
      ).map(([key, value]) => ({ key, value }));
      setSpecifications(specificationsArray);
      setIsOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose = (): void => setIsOpen(false);

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

  const handleSpecificationChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = (event as ChangeEvent<HTMLInputElement>).target;
    setSpecifications((prevSpecs) =>
      prevSpecs.map((spec, i) =>
        i === index ? { ...spec, [name]: value } : spec
      )
    );
  };

  const handleAddField = (): void => {
    setSpecifications([...specifications, { key: '', value: '' }]);
  };

  const handleRemoveField = (index: number): void => {
    const values = [...specifications];
    values.splice(index, 1);
    setSpecifications(values);
  };

  const editSubmitHandle = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const formattedSpecifications = specifications.reduce((acc: any, spec) => {
      acc[spec.key] = spec.value;
      return acc;
    }, {});

    const { title, description, price } = inputs;
    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('TypeId', typeId);
    if (image) formData.append('image', image);
    formData.append('specifications', JSON.stringify(formattedSpecifications));
    try {
      const response = await axiosInstance.put(
        `${import.meta.env.VITE_API}/admin/edit/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setItems((prev) =>
        prev.map((item) => (item.id === id ? response.data : item))
      );
      if (response.status === 200) {
        alert('Successfully edited');

        setInputs({
          title: response.data.title,
          description: response.data.description,
          price: response.data.price + '',
        });
        setTypeID(response.data.TypeId + '');
        setImage(response.data.image);

        const specificationsArray = Object.entries(
          response.data.specifications
        ).map(([key, value]) => ({ key, value }));
        setSpecifications(specificationsArray);
        setIsOpen(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <FormModal
      isOpen={isOpen}
      editModalOpen={editModalOpen}
      handleClose={handleClose}
      btnText={<BorderColor />}
      id={id}
    >
      <form className={styles.form} onSubmit={editSubmitHandle}>
        <Typography align="center" mb={2}>
          Edit Item Inputs
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
        <Button
          component="label"
          variant="contained"
          startIcon={<UploadFile />}
        >
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
        />
        <Button variant="contained" type="submit">
          Edit Item
        </Button>
      </form>
    </FormModal>
  );
}
