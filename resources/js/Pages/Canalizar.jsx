import { Head, Link, useForm } from '@inertiajs/react';
import FormFloating from "@/Components/FormFloating";
import Menu2 from "@/Components/Menu2";
import SelectFloating from '@/Components/SelectFloating';

const Canalizar = ({ auth }) => {
  return (
    <Menu2 user={auth.user}>
      <Head title="Canalizar alumno" />
    <div className='pt-20' >
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

        <FormFloating>
          <FormFloating.Input
            type='text'
            id='tutor'
            name="tutor"
            defaultValue={auth.user.name}
            disabled
          />
          <FormFloating.Label htmlFor='fecha'>Tutor</FormFloating.Label>
        </FormFloating>

         <SelectFloating></SelectFloating>


      </form>
      </div>
    </Menu2>
  )
}

export default Canalizar
