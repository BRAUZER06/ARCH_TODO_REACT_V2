import { TextField, Button, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const AddField = ({ onChangeCheckbox, onChangeInput, inputValue, isCompleted, handleAddTask }) => {
  return (
    <div className="field">
      <Checkbox
        checked={isCompleted}
        onChange={onChangeCheckbox}
        className="checkbox"
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
      />
      <TextField
        value={inputValue}
        onChange={onChangeInput}
        placeholder="Введите текст задачи..."
        variant="standard"
        fullWidth
      />
      <Button onClick={handleAddTask}>
        <AddIcon />
      </Button>
    </div>
  );
};
