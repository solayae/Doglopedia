// import React, { useState } from 'react';
// import './Create.css';

// const Create = () => {
//   const [input, setInput] = useState({
//     name: '',
//     image: '',
//     height: '',
//     weight: '',
//     life_span: '',
//   });

//   const [error, setError] = useState({
//     name: 'Escriba el nombre de la nueva raza',
//     image: 'Escriba la URL de la imagen',
//     height: 'Escriba la altura ',
//     weight: 'Escriba el peso',
//     life_span: 'Escriba la esperanza de vida',
//   });

//   const validateName = (input) => {
//     if (!/^[a-zA-Z ]+$/.test(input.name)) {
//       setError({ ...error, name: 'Formato incorrecto' });
//       return;
//     } else {
//       setError({ ...error, name: '' });
//     }
//   };

//   const validateUrl = (input) => {
//     if (/^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(input.name)) {
//       setError({ ...error, name: 'Formato incorrecto' });
//       return;
//     } else {
//       setError({ ...error, name: '' });
//     }
//   };

//   function handleChange(e, inputValue) {
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value,
//     });

//     switch (inputValue) {
//       case 'name':
//         validateName({
//           ...input,
//           [e.target.name]: e.target.value,
//         });
//         break;
//       case 'image':
//         validateUrl({
//           ...input,
//           [e.target.name]: e.target.value,
//         });
//         break;

//       default:
//         break;
//     }
//   }

//   return (
//     <form className='create-breed-form' onSubmit={''}>
//       <div className='name-container'>
//         <label>Name:</label>
//         <input
//           name='name'
//           onChange={(e) => handleChange(e, 'name')}
//           value={input.value}
//           placeholder='Example: Bull Terrier'
//         />
//         <span>{error.name}</span>
//       </div>

//       <div className='image-container'>
//         <label>Image URL:</label>
//         <input
//           name='image'
//           onChange={(e) => handleChange(e, 'image')}
//           value={input.value}
//           placeholder='Example: https://breed-dog.jpg'
//         />
//         <span>{error.image}</span>

//       </div>

//       <div className='altura-container'>
//         <label>Height:</label>
//         <div>
//           <input name='height' onChange={handleChange} value={input.value} />
//           <span>cm</span>
//         </div>
//       </div>

//       <div className='peso-container'>
//         <label>Weight:</label>
//         <div>
//           <input name='weight' onChange={handleChange} value={input.value} />
//           <p>kg</p>
//         </div>
//       </div>

//       <div className='esperanza-container'>
//         <label>Life Span:</label>
//         <div>
//           <input name='life_span' onChange={handleChange} value={input.value} />
//           <p>years</p>
//         </div>
//       </div>

//       <div className='temperamentos-container'>
//         <label>Temperaments:</label>
//         <input
//           name='temperaments'
//           onChange={handleChange}
//           value={input.value}
//         />
//       </div>

//       <button>Crear nueva raza</button>
//     </form>
//   );
// };

// export default Create;

import React, { useState, useEffect } from 'react';
import './Create.css';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [url, setUrl] = useState('');
  const [pesoMin, setPesoMin] = useState('');
  const [pesoMax, setPesoMax] = useState('');
  const [alturaMin, setAlturaMin] = useState('');
  const [alturaMax, setAlturaMax] = useState('');
  const [life_spanMin, setLifeSpanMin] = useState('');
  const [life_spanMax, setLifeSpanMax] = useState('');
  const [hayCamposVacios, setHayCamposVacios] = useState(false);
  const [temperamentos, setTemperamentos] = useState([]);
  const [perroCreado, setPerroCreado] = useState(false);
  const [temperamentosSeleccionados, setTemperamentosSeleccionados] = useState(
    []
  );

  //traemos temperamentos
  useEffect(() => {
    fetch('http://localhost:3001/temperaments')
      .then((response) => response.json())
      .then((data) => {
        const temperamentosNombres = data.map(
          (temperamento) => temperamento.name
        );
        setTemperamentos(temperamentosNombres);
      })
      .catch((error) => console.error(error));
  }, []);

  //eliminar temperamento seleccionado
  const handleDelete = (temperamento) => {
    const newTemperamentos = temperamentosSeleccionados.filter(
      (item) => item !== temperamento
    );
    setTemperamentosSeleccionados(newTemperamentos);
  };

  //enviar raza al post
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      nombre &&
      url &&
      alturaMin &&
      alturaMax &&
      pesoMin &&
      pesoMax &&
      life_spanMin &&
      life_spanMax
    ) {
      const perro = {
        image: url,
        name: nombre,
        height: `${alturaMin} - ${alturaMax} cm`,
        weight: `${pesoMin} - ${pesoMax} kg`,
        life_span: `${life_spanMin} - ${life_spanMax} years`,
        temperament: temperamentosSeleccionados.join(', '),
      };

      fetch('http://localhost:3001/dogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(perro),
      })
        .then((response) => {
          if (response.status === 200) {
            setPerroCreado(true);
          }
          return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    } else {
      setHayCamposVacios(true);
    }
  };

  const handleNombreChange = (event) => {
    const inputNombre = event.target.value;
    setNombre(inputNombre);
  };

  const handleUrlChange = (event) => {
    const inputUrl = event.target.value;
    setUrl(inputUrl);
  };

  const handleAlturaMinChange = (event) => {
    setAlturaMin(event.target.value);
  };

  const handleAlturaMaxChange = (event) => {
    setAlturaMax(event.target.value);
  };

  const handlePesoMinChange = (event) => {
    setPesoMin(event.target.value);
  };

  const handlePesoMaxChange = (event) => {
    setPesoMax(event.target.value);
  };

  const handleLifeSpanMinChange = (event) => {
    setLifeSpanMin(event.target.value);
  };

  const handleLifeSpanMaxChange = (event) => {
    setLifeSpanMax(event.target.value);
  };

  const nombreValido = /^([a-zA-ZñÑáéíóúÁÉÍÓÚ]+\s?)+$/g.test(nombre);
  const urlValida = /^(ftp|http|https):\/\/[^ "]+$/g.test(url);
  const pesoValido = /^[0-9]+(\.[0-9]{1,2})?$/g.test(pesoMax, pesoMin);
  const alturaValida = /^[0-9]+(\.[0-9]{1,2})?$/g.test(alturaMax, alturaMin);
  const lifeSpanValida = /^[0-9]+(\.[0-9]{1,2})?$/g.test(
    life_spanMax,
    life_spanMin
  );

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Breed</h2>
      <div className='form-container-parts'>
        <div className='form-container-part'>
          <div className='form-input-container' id='create-name-container'>
            <label htmlFor='nombre'>Nombre:</label>
            <input
              type='text'
              id='nombre'
              value={nombre}
              onChange={handleNombreChange}
              className={nombreValido ? '' : 'invalido'}
            />
            {!nombreValido && (
              <span className='mensaje-error'>El nombre es inválido</span>
            )}
          </div>

          <div className='form-input-container'>
            <label htmlFor='url'>URL:</label>
            <input
              type='text'
              id='url'
              value={url}
              onChange={handleUrlChange}
              className={urlValida ? '' : 'invalido'}
            />
            {!urlValida && (
              <span className='mensaje-error'>La URL es inválida</span>
            )}
          </div>

          <div id='form-temperaments-container'>
            <label htmlFor='temperamento'>Temperamento:</label>
            <select
              id='temperamento'
              name='temperamento'
              onChange={(event) =>
                setTemperamentosSeleccionados([
                  ...temperamentosSeleccionados,
                  event.target.value,
                ])
              }
            >
              <option value=''>Selecciona un temperamento</option>
              {temperamentos.map((temperamento) => (
                <option key={temperamento} value={temperamento}>
                  {temperamento}
                </option>
              ))}
            </select>
            <div className='temperaments-select-container'>
              {temperamentosSeleccionados.map((temperamento, index) => (
                <div key={index} className='div-temperament-container'>
                  <span>{temperamento}</span>
                  <button
                    className='button-delete-temperament'
                    onClick={() => handleDelete(temperamento)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='form-container-part'>
          <div className='form-input-container' id='input-peso'>
            <label htmlFor='pesoMin'>Peso:</label>
            <div className='input-maxmin'>
              <input
                type='text'
                id='pesoMin'
                value={pesoMin}
                onChange={handlePesoMinChange}
                placeholder='Mínimo'
                className={pesoValido ? '' : 'invalido'}
              />
              <span> - </span>
              <input
                type='text'
                id='pesoMax'
                value={pesoMax}
                onChange={handlePesoMaxChange}
                placeholder='Máximo'
                className={pesoValido ? '' : 'invalido'}
              />
            </div>

            {!pesoValido && (
              <span className='mensaje-error'>El peso es inválida</span>
            )}
          </div>

          <div className='form-input-container'>
            <label htmlFor='alturaMin'>Altura:</label>
            <div className='input-maxmin'>
              <input
                type='text'
                id='alturaMin'
                value={alturaMin}
                onChange={handleAlturaMinChange}
                placeholder='Mínimo'
                className={alturaValida ? '' : 'invalido'}
              />
              <span> - </span>
              <input
                type='text'
                id='alturaMax'
                value={alturaMax}
                onChange={handleAlturaMaxChange}
                placeholder='Máximo'
                className={alturaValida ? '' : 'invalido'}
              />
            </div>

            {!alturaValida && (
              <span className='mensaje-error'>La altura es inválida</span>
            )}
          </div>

          <div className='form-input-container'>
            <label htmlFor='life_spanMin'>Life Span:</label>
            <div className='input-maxmin'>
              <input
                type='text'
                id='life_spanMin'
                value={life_spanMin}
                onChange={handleLifeSpanMinChange}
                placeholder='Mínimo'
                className={lifeSpanValida ? '' : 'invalido'}
              />
              <span> - </span>
              <input
                type='text'
                id='life_spanMax'
                value={life_spanMax}
                onChange={handleLifeSpanMaxChange}
                placeholder='Máximo'
                className={lifeSpanValida ? '' : 'invalido'}
              />
            </div>

            {!lifeSpanValida && (
              <span className='mensaje-error'>
                La esperanza de vida es inválida
              </span>
            )}
          </div>
        </div>
      </div>

      <div className='button-form-container'>
        {hayCamposVacios && (
          <span className='mensaje-error'>Hay campos vacíos</span>
        )}

        <button className='button-create' type='submit'>
          Enviar
        </button>
        {perroCreado ? <span>Perro creado</span> : null}
      </div>
    </form>
  );
};

export default Formulario;
