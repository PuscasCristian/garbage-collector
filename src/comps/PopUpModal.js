import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  

const PopUpModal = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className="modal-form-wrapper">
            <FormControl className={classes.formControl} className="form-wrapper">
                <InputLabel id="demo-simple-select-helper-label">Selectați tipul problemei</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    onChange={handleChange}
                    required
                    >
                    <MenuItem value="cos_stalp">Cos de stalp plin</MenuItem>
                    <MenuItem value="container_plin">Container plin</MenuItem>
                    <MenuItem value="container_sticla">Container sticle plin</MenuItem>
                    <MenuItem value="container_hartie">Container hartie plin</MenuItem>
                    <MenuItem value="container_plastic">Container plastic plin</MenuItem>
                    <MenuItem value="container_textile">Container textile plin</MenuItem>
                    <MenuItem value="gunoaie_gramada">Morman de gunoaie in natura</MenuItem>
                </Select>
                <FormHelperText>Some important helper text</FormHelperText>
                <Button className="submit-button">Trimite</Button>
            </FormControl>
            {/* <form className="form-wrapper">
                <Select className="selection" required>
                    
                </Select>
                <textarea placeholder="Descrie problema"/>
                <input type="file" placeholder="Incarca imagine" accept=".jpg,.png,.jpeg" capture multiple></input>
                <button>Trimite</button>
                <button type="button" className="delete-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                </button>
                <button type="button" className="close-button">
                        x
                </button>
            </form>  */}
        </div>
    )
}

export default PopUpModal;
