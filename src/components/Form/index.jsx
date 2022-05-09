import * as React from 'react'
import { BsCalendarPlus } from "react-icons/bs"
import { AiOutlineHome } from "react-icons/ai"
import logo from "../../images/logo-1.png"
import StyledForm from "./styles.js"
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import Fab from '@mui/material/Fab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Link } from 'react-router-dom'

export function Form({ addReserva }) {
    function Capitalize(str) {

        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    function Submit(e) {
        e.preventDefault()
        let a = {
            Sala: Sala,
            Nome: Nome,
            Ra: RA,
            Predio: Predio,
            Mes: Capitalize(value.toLocaleString('default', { month: 'short' })),
            Dia: value.getDate()
        }
        console.log(a)
        addReserva(a)

    }
    const [Predio, setPredio] = React.useState('')
    const [Sala, SetSala] = React.useState('')
    const [Nome, SetNome] = React.useState('')
    const [RA, SetRA] = React.useState('')
    const handleChangeNome = (event) => {
        SetNome(event.target.value);
    };
    const handleChangeRA = (event) => {
        SetRA(event.target.value);
    };
    const handleChangePredio = (event) => {
        setPredio(event.target.value);
    };
    const handleChangeSala = (event) => {
        SetSala(event.target.value);
    };
    const [value, setValue] = React.useState(null)
    return (
        <StyledForm>

            <div className="Header">
                <h3 className="Title">Agendamento das Salas de Coworking </h3>
                <img className="Logo" src={logo}></img>
            </div>
            <div className="body">
                <div className="BodyHome">
                    {/* <Alert severity="success">This is a success alert — check it out!</Alert>*/}
                    <div id="BodyTitle">
                        Reservar Sala
                    </div>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '90%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Nome"
                                    variant="standard"
                                    fullWidth
                                    value={Nome}
                                    onChange={handleChangeNome}
                                />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    required
                                    id="outlined"
                                    label="RA"
                                    variant="standard"
                                    fullWidth
                                    value={RA}
                                    onChange={handleChangeRA}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Dia da Reserva"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl variant="standard" sx={{ m: 1, width: '95%' }}>
                                    <InputLabel id="demo-simple-select-standard-label" required>Prédio</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select-standard"
                                        value={Predio}
                                        label="Prédio"
                                        required={true}
                                        onChange={handleChangePredio}
                                    >
                                        <MenuItem value={'Augusta'}>Augusta - Av. Augusta,973 </MenuItem>
                                        <MenuItem value={'Bela Cintra'}>Bela Cintra - R. Bela Cintra, 847</MenuItem>
                                        <MenuItem value={'Mooca'}>Mooca - R. Borges de Figueiredo, 510</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl variant="standard" sx={{ m: 1, width: '95%' }}>
                                    <InputLabel id="demo-simple-select-standard-label" required>Sala</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select-standard"
                                        value={Sala}
                                        label="Sala"
                                        onChange={handleChangeSala}
                                    >
                                        <MenuItem value={'120 - 12° andar'}>Augusta - Sala 120 - 12° andar </MenuItem>
                                        <MenuItem value={'150 - 15° andar'}>Augusta - Sala 150 - 15° andar </MenuItem>
                                        <MenuItem value={'125 - 12° andar'}>Bela Cintra - Sala 125 - 12° andar</MenuItem>
                                        <MenuItem value={'66 - 6° andar'}>Bela Cintra - Sala 66 - 6° andar</MenuItem>
                                        <MenuItem value={'88 - 8° andar'}>Mooca - Sala 88 - 8° andar </MenuItem>
                                        <MenuItem value={'95 - 9° andar'}>Mooca - Sala 95 - 9° andar </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                        </Grid>

                    </Box>
                    <Fab className="FormBtn" color='warning' variant="extended" onClick={Submit}>
                        Reservar
                    </Fab>
                </div>


            </div>
            <div className="footer">
                <Link to="/">
                    <div className="Tab" id="TabHome">



                        <AiOutlineHome size={32} color={'black'} />
                        <div className="TabText" id="TabHomeText">
                            Tela Inicial
                        </div>


                    </div>

                </Link>
                <Link to="/Form">
                    <div className="Tab" id="TabForm">

                        <BsCalendarPlus size={30} color={'orange'} />
                        <div className="TabText" id="TabCreateText">
                            Agendar
                        </div>
                    </div>
                </Link>
            </div >
        </StyledForm >

    )


}