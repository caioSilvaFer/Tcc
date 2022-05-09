import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider';
export function Reserva({ reserva }) {

    return (
        <>
            <Grid className="Itens" container spacing={2}>
                <Grid item xs={4}>
                    <div className="BodyMonth" > {reserva.Dia}</div>
                    <div className="BodyDay"> {reserva.Mes} </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="BodyRoom">Sala {reserva.Sala}</div>
                    <div className="BodyHour">{reserva.Predio}</div>
                </Grid>
            </Grid>
            <Divider variant="middle" />
        </>
    )
}
