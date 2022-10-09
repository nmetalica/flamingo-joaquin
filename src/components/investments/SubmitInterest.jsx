import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../app/Button';
import Input from '../app/Input';

const SubmitInterest = ({ oportunity }) => {
  const [error, updateError] = useState('');
  const [form, updateForm] = useState({});

  const navigate = useNavigate();

  const handleChange = (key) => (value) => {
    updateForm((state) => ({ ...state, [key]: value }));
  };

  const handleSubmit = () => {
    console.log('submit', form, oportunity.id);
    navigate('/profile');
  };
  const validateNumber = /^[0-9]*$/;

  const validateForm = useMemo(
    () => {
      if (!form.amount) {
        updateError('');
        return false;
      }

      if (form.amount && !validateNumber.test(form.amount)) {
        updateError('Ingrese únicamente números');
        return false;
      }

      updateError('');
      return true;
    },
    [form],
  );

  return (
    <div className='mx-auto sm:mt-5 max-h-[95%] sm:max-h-[75%] overflow-auto'>
      <div className="text-black-400 text-lg md:text-2xl mt-5 mb-1">
        ¿Cuánto te gustaría invertir?
      </div>
      <Input
        placeholder="Cantidad tentativa"
        onChange={handleChange('amount')}
        value={form.amount}
        className="w-3/4 md:w-1/2"
        type="number"
        error={error}
      />

      <div className="text-black-400 text-lg md:text-2xl mt-5 mb-1">
        ¿Qué valor podrías añadir a la inversión además del capital
      </div>
      <Input
        placeholder="Experiencia en el sector, network, partners, sinergias empresariales, etc."
        rows={5}
        value={form.description}
        onChange={handleChange('description')}
        className="w-[100%] md:w-[75%]"
      />

      <Button onClick={handleSubmit} type="primary" className="w-[50%] text-xl mx-auto mt-6 text-white" disabled={!validateForm}>Mostrar interés</Button>
    </div>
  );
};

export default SubmitInterest;
