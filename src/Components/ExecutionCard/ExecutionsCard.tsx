import { Dialog } from '@mui/material';
import { Button } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";

export interface IExecutionsCard {
  type: string,
  time: string,
  name: string,
  id?: string,
  specName: string,
  age: number,
  weight: number,
  weightUnit: string,
  height: number,
  heightUnit: string,
  element?: React.ReactNode,
}

export function ExecutionsCard({ type, time, name, specName, age, weight, weightUnit, height, heightUnit }: IExecutionsCard) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="min-w-[160px]">
      <span>Сегодня в {time} на процедуру "{type}" приедет</span>
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

    </div>
  )
}