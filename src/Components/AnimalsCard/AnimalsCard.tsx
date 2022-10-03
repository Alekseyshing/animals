import { useState } from 'react';
import { Dialog } from '@mui/material';
import { Button } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export interface IAnimalsCard {
  name: string,
  specName: string,
  age: number,
  weight: number,
  weightUnit: string,
  height: number,
  heightUnit: string,
  element?: React.ReactNode,
  onClick: (id: string) => void,
  key: string,
}

export function AnimalsCard({ name, specName, age, weight, weightUnit, height, heightUnit }: IAnimalsCard) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex gap-1 items-center justify-center">
      <Button onClick={handleClickOpen}>{name}</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <span className='font-bold'>Карточка животного</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText component={'div'} id="alert-dialog-description">
            <div className='flex flex-col gap4 items-center justify-center'>
              <span>Кличка: {name}</span>
              <span>Порода: {specName}</span>
              <span>Возраст: {age}</span>
              <span>Вес: {weight} {weight ? weightUnit : 'нет данных'}</span>
              <span>Рост: {height} {height ? heightUnit : 'нет данных'}</span>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>

      <span>это "{specName}"</span>
    </div>
  )
}