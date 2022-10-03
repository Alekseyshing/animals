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
          <h1>Карточка животного</h1>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className='flex flex-col gap4 items-center justify-center'>
              <p>Кличка: {name}</p>
              <p>Порода: {specName}</p>
              <p>Возраст: {age}</p>
              <p>Вес: {weight} {weight ? weightUnit : 'нет данных'}</p>
              <p>Рост: {height} {height ? heightUnit : 'нет данных'}</p>
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