import Menu from "@/Components/Menu"
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import FormFloating from "@/Components/FormFloating";

const Canalizar = ({ auth }) => {
  return (
    <Menu user={auth.user} >

      <Head title="Canalizar alumno" />

      <form >
        {/* onSubmit={submit} */}

        <FormFloating>
          <FormFloating.Input
            type='text'
            id='folio'
            name="folio"
          />
          <FormFloating.Label htmlFor='folio'>Folio</FormFloating.Label>
        </FormFloating>

        <FormFloating>
          <FormFloating.Input
            type='date'
            id='fecha'
            name="fecha"
          />
          <FormFloating.Label htmlFor='fecha'>Fecha</FormFloating.Label>
        </FormFloating>



      </form>
    </Menu>


  )
}

export default Canalizar
