import { Button, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import axios from "axios";

export async function getStaticProps() {
  const url = process.env.API_URL || 'http://localhost:1337';
  try {
    const res = await axios.get(`${url}/teams`);
    const teams = res.data;
    return {
      props: {
        teams
      }
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
export default function Create({ teams }) {
  return (
    <div className="text-center">
      <Autocomplete
        id="home"
        className="create-component"
        options={teams}
        getOptionLabel={(team) => team.name}
        renderInput={(params) => <TextField {...params} label="Equipo local" variant="outlined" />}
      />
      <Autocomplete
        id="awat"
        className="create-component"
        options={teams}
        getOptionLabel={(team) => team.name}
        renderInput={(params) => <TextField {...params} label="Equipo visitante" variant="outlined" />}
      />
      <TextField
        id="description"
        label="Descripción"
        variant="outlined"
        fullWidth
      />
      <Button variant="contained" color="primary" style={{ marginTop: '40px' }}>
        Crear
      </Button>
    </div>
  )
}
