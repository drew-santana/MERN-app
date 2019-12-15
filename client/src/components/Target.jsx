import React, { useState } from 'react';
import '../assets/styles/components/Target.scss';
import { Link } from '@reach/router';
import Rx1 from '../assets/static/Rx1.png';
import Rx2 from '../assets/static/Rx2.jpg';
import Rx3 from '../assets/static/Rx3.jpg';

const Target = ({diagnosis, onDelete}) => {

  return (
    <div className='target'>

      <div className='target__date'>
        <h4>Fecha consulta</h4>
        <h2>11</h2>
        <h4>noviembre 2019</h4>
      </div>

      <div className='target__info'>
        <p className='label'>Diagnostigo: </p>
        <p>
        {diagnosis}
        </p>
      </div>
      <button type="button" onClick={onDelete}>Delete</button>

    </div>
  );
};
export default Target;

