import * as React from 'react';
import { useState, useEffect } from 'react';
import FormModal from '../../ui/Modal';
import ConfigModal from '../ConfigsModal/ConfigsModal';
import { IItem } from '../../types/types';

export default function ConfigInfo({entries, id}:{entries:IItem[], id:number}) {
const [isOpen, setIsOpen] = useState<boolean>(false);
const handleOpen = (): void => setIsOpen(true);
const handleClose = (): void => setIsOpen(false);
  return (
    <FormModal isOpen={isOpen}
    handleOpen={handleOpen}
    handleClose={handleClose}
    btnText="..."
    variant="text"
    size='large'>
   <ConfigModal entries={entries} id={id}></ConfigModal>
    </FormModal>
  )
}
