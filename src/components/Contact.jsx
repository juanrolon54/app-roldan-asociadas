import { useState } from 'react';

import Hr from './Utils/Hr';
import Slider from './Utils/Slider';

const Card = ({ children }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-md p-4 w-[70vw] min-h-[50vh] h-fit">
      {children}
    </div>
  );
};
const Input = ({
  type,
  id,
  place,
  label,
  className,
  options = [],
  onChange,
}) => {
  const input = {
    text: (
      <input
        required
        placeholder={place}
        type={type}
        id={id}
        className={className}
      />
    ),
    textarea: (
      <textarea required className={className} id={id} placeholder={place} />
    ),
    select: (
      <select id={id} required>
        {options.map((option, key) => (
          <option {...{ key }}>{option}</option>
        ))}
      </select>
    ),
  };
  return (
    <div className={`flex flex-col`}>
      <label
        htmlFor={id}
        className="text-[10px] tracking-widest font-semibold uppercase"
      >
        {label}
      </label>
      {input[type] ? input[type] : input.text}
    </div>
  );
};

const ContactForm = ({ onSubmit: apply }) => {
  const [pass, setPass] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const data = [...e.target]
      .map((input) => ({ [input.id]: input.value }))
      .reduce((prev, curr) => ({ ...prev, ...curr }), {});
    delete data[''];
    console.log(data);
  };
  return pass ? (
    <div className="grid place-items-center h-full select-none">
      <div>
        <p className="text-2xl font-semibold leading-5">
          Formulario enviado con exito!
        </p>
        <br />
        <p className="text-xs tracking-widest">
          Su consulta se le respondera en breve
        </p>
        <div className="grid place-items-center">
          <p className="font-icon w-fit leading-none text-[6rem] border-8 border-green-400 rounded-full">
            done
          </p>
        </div>
      </div>
    </div>
  ) : (
    <form className="flex flex-col gap-8" {...{ onSubmit }}>
      <p className="text-2xl font-semibold">Evienos su consulta</p>
      <div className="flex flex-col gap-1">
        <Input
          {...{
            id: 'name',
            place: 'Como dirijirse hacia usted',
            label: 'nombre',
          }}
        />
        <hr />
        <Input
          {...{
            id: 'email',
            place: 'Le enviaremos un mensaje',
            label: 'Correo',
            type: 'email',
          }}
        />
        <hr />
        <Input
          {...{
            id: 'phone',
            place: 'En caso de urgencia',
            label: 'Telefono ó celular',
            type: 'tel',
          }}
        />
        <hr />
        <Input
          {...{
            type: 'select',
            id: 'type',
            label: 'Area',
            options: [
              'Gestoria del Automotor',
              'Accidentes de Transito',
              'Infracciones de Transito',
              'Jubilaciones y Pensiones',
              'Accidentes Laborales (ART)',
              'Escrituracion y Usucapion',
              'Divorcios, Familia y Sucesiones',
            ],
          }}
        />
        <hr />
        <Input
          {...{
            type: 'textarea',
            id: 'value',
            label: 'Consulta',
            place: 'Sea conciso, asi lo podremos ayudar.',
            className: 'w-full resize-none',
          }}
        />
        <hr />
      </div>
      <div className="w-full grid place-items-end">
        <input
          type="submit"
          value="Enviar"
          className="font-bold bg-primary w-fit p-2 px-3 rounded-full shadow-md cursor-pointer"
        />
      </div>
    </form>
  );
};

export default () => {
  return (
    <>
      <div id="contacto" />
      <Hr>Contactenos</Hr>
      <Slider>
        <Card>
          <ContactForm
            onSubmit={(e) => {
              console.log(e);
            }}
          />
        </Card>
        <Card>
          <div className="flex flex-col gap-8">
            <p className="text-2xl font-semibold">Horarios de Atencion</p>
            <div>
              <p className="text-xs">Lunes a Viernes</p>
              <hr />
              <p className="text-xl font-semibold text-right">
                9 <span className="font-normal">a</span> 19hs
              </p>
              <p className="text-xs">Sabados</p>
              <hr />
              <p className="text-xl font-semibold text-right">
                10 <span className="font-normal">a</span> 16hs
              </p>
            </div>
          </div>
        </Card>
        <div className="relative bg-white rounded-lg shadow-md w-[70vw] h-[50vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.101925606311!2d-58.66534508047211!3d-34.47493850492866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca3690eb57bc3%3A0x2c340646770f9291!2sColombia%201076%2C%20B1618EMD%20El%20Talar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1667701409545!5m2!1ses-419!2sar"
            className="w-full h-full rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Card>
          <div className="flex flex-col gap-8">
            <p className="text-2xl font-semibold">Datos de contacto</p>
            <div className="flex flex-col">
              <p className="text-xs">Telefono</p>
              <hr />
              <span className="text-xl font-semibold gap-1 text-right">
                5253<span className="text-xs font-light">-</span>2789
                <span className="text-xl font-semibold font-icon">call</span>
              </span>
            </div>
            <div className="flex flex-col">
              <p className="text-xs">Telefono</p>
              <hr />
              <span className="text-xl font-semibold gap-1 text-right">
                5253<span className="text-xs font-light">-</span>2789
                <span className="text-xl font-semibold font-icon">call</span>
              </span>
            </div>
          </div>
        </Card>
      </Slider>
    </>
  );
};