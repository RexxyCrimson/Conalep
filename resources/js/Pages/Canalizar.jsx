import { Head, useForm } from '@inertiajs/react';
import FormFloating from "@/Components/FormFloating";
import Menu from "@/Components/Menu";
import SelectFloating from '@/Components/SelectFloating';
import PrimaryButton from '@/Components/PrimaryButton';
import TextAreaFloating from '@/Components/TextAreaFloating';
import { useEffect, useMemo, useRef, useState } from 'react';
import InputError from '@/Components/InputError';
import InputAutocomplit from '@/Components/InputAutocomplit';
import axios from 'axios';


const Canalizar = ({ auth }) => {
  const [alumnosAll, setAlumnosAll] = useState([])
  const { data, setData, post, processing, errors, reset } = useForm({
    fecha: new Date().toISOString().slice(0,10),
    tutor: auth.user.name  ?? '',
    alumno: '',
    matricula: '',
    turno: '',
    carrera: '',
    grupo: '',
    modulo: '',
    descripcion_problema: '',
    clasificacion_problematica: ''
  });

  const _getAlumnos = async(alumno)=>{
    if(alumno.trim() !== ''){
      const response = await axios.get(route('alumnos.getAlumnos', [alumno]));
      setAlumnosAll(response.data);
      console.log(response.data);
    }
  }

  const cambiarValores = (e) => {
    const alumnoElegido = e.target.value;
    data.alumno = alumnoElegido;
    let alumno = alumnosAll.find(item => item.nombre === alumnoElegido) ?? null;
    if(alumno == null){
      _getAlumnos(data.alumno);
    }
    valoresCambiar(alumno ?? "");
  }

  const valoresCambiar = (alumno) => {
    setData((prevData) => ({
      ...prevData,
      matricula: alumno.matricula ?? '',
      turno: alumno.turno ?? '',
      carrera: alumno.carrera ?? '',
      grupo: alumno.grupo ?? '',
    }));
  }

  const submit = (e) => {
    e.preventDefault();
    post(route('canalizar.post'), { onSuccess: () => reset() });
  };

  return (
    <Menu user={auth.user}>
      <Head title="Canalizar alumno" />
      <div className='pt-20 mb-4' >
        <form onSubmit={submit} >

          <FormFloating>
            <FormFloating.Input
              type='text'
              id='folio'
              name="folio"
              defaultValue='001'
              disabled
            />
            <FormFloating.Label htmlFor='folio'>Folio</FormFloating.Label>
          </FormFloating>

          <FormFloating>
            <FormFloating.Input
              type='date'
              id='fecha'
              name="fecha"
              data-date-format="DD-MM-YYYY"
              value={data.fecha}
              onChange={(e) => setData('fecha', e.target.value)}
            />
            <FormFloating.Label htmlFor='fecha'>Fecha</FormFloating.Label>
            <InputError message={errors.fecha} className="pl-1 mt-2" />
          </FormFloating>

          <FormFloating>
            <FormFloating.Input
              type='text'
              id='tutor'
              name="tutor"
              disabled
              value={data.tutor}
            />
            <FormFloating.Label htmlFor='tutor'>Tutor</FormFloating.Label>
          </FormFloating>

          <InputAutocomplit>
            <InputAutocomplit.Input 
             id='alumno'
             name='alumno'
             list='alumnoList'
             value={data.alumno}
             onChange={(e) => cambiarValores(e)}
            />
        
             <InputAutocomplit.Select id='alumnoList'>
             {
                alumnosAll.map(
                  (alumno) => {
                    return (
                      <option key={alumno.nombre} value={alumno.nombre}></option>
                    )
                  }
                )
              }
             </InputAutocomplit.Select>
            <InputAutocomplit.Label htmlFor='alumno'>Alumno</InputAutocomplit.Label>
          </InputAutocomplit>

          <FormFloating>
            <FormFloating.Input
              type='text'
              id='matricula'
              name="matricula"
              disabled
              value={data.matricula}
              readOnly={true}
            />
            <FormFloating.Label htmlFor='matricula'>Matricula</FormFloating.Label>
          </FormFloating>

          <FormFloating>
            <FormFloating.Input
              type='text'
              id='turno'
              name="turno"
              disabled
              value={data.turno}
              readOnly={true}
            />
            <FormFloating.Label htmlFor='turno'>Turno</FormFloating.Label>
          </FormFloating>

          <FormFloating>
            <FormFloating.Input
              type='text'
              id='carrera'
              name="carrera"
              disabled
              value={data.carrera}
              readOnly={true}
            />
            <FormFloating.Label htmlFor='carrera'>Carrera</FormFloating.Label>
          </FormFloating>

          <FormFloating>
            <FormFloating.Input
              type='text'
              id='grupo'
              name="grupo"
              disabled
              value={data.grupo}
              readOnly={true}
            />
            <FormFloating.Label htmlFor='grupo'>Grupo</FormFloating.Label>
          </FormFloating>


          <SelectFloating>
            <SelectFloating.Selected
              id='modulo'
              name="modulo"
              value={data.modulo}
              onChange={(e) => setData('modulo', e.target.value)}
            >
              <option defaultValue="">Selecciona el modulo</option>
              <option>Administración de los recursos de la oficina</option>
              <option>Administración de sistemas de interconexión de redes departamentales</option>
              <option>Administración de servicio</option>
              <option>Análisis derivativo de las funciones</option>
              <option>Aplicación de estándares de calidad</option>
              <option>Aplicación de técnicas de manejo en transporte ligero</option>
              <option>Captación y distribución de señales audiovisuales</option>
              <option>Certificación de sistemas de cableado estructurado</option>
            </SelectFloating.Selected>
            <SelectFloating.Label
              htmlFor='modulo'
            >
              Modulo
            </SelectFloating.Label>
          </SelectFloating>

          <TextAreaFloating>
            <TextAreaFloating.TextArea
              id="problematica"
              rows="4"
              value={data.descripcion_problema}
              onChange={(e) => setData('descripcion_problema', e.target.value)}
            >
            </TextAreaFloating.TextArea>
            <TextAreaFloating.Label
              htmlFor="problematica"
            >
              Descripción de la problematica
            </TextAreaFloating.Label>
          </TextAreaFloating>

          <SelectFloating>
            <SelectFloating.Selected
              id='clasificacionProblematica'
              name="clasificacionProblematica"
              value={data.clasificacion_problematica}
              onChange={(e) => setData('clasificacion_problematica', e.target.value)}
            >
              <option defaultValue="">Selecciona la categoria de la problematica</option>
              <option>Emocional: orientación educativa</option>
              <option>Académico/Conductual: formación técnica</option>
              <option>Económico: resposanble de becas</option>
            </SelectFloating.Selected>
            <SelectFloating.Label
              htmlFor='clasificacionProblematica'
            >
              Clasificación de la problematica
            </SelectFloating.Label>
          </SelectFloating>

          <PrimaryButton style={{ height: '50px', fontSize: '16px' }} className="my-2 w-full" disabled={processing}>
            Enviar
          </PrimaryButton>

        </form>
      </div>
    </Menu>
  )
}

export default Canalizar
