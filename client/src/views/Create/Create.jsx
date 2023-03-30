import React from 'react';

const BreedForm = () => {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '20px'}}>
      <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>Nombre:</label>
      <input style={{ padding: '5px' }} type="text" />

      <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>Imagen URL:</label>
      <input style={{ padding: '5px' }} type="text" />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , gap: '10px'}}>
        <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>Altura:</label>
        <div style={{ display: 'flex' }}>
          <label style={{ marginRight: '5px' }}>Mín:</label>
          <input style={{ padding: '5px', marginRight: '10px' }} type="number" />
          <label style={{ marginRight: '5px' }}>Máx:</label>
          <input style={{ padding: '5px' }} type="number" />
          <p>cm</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , gap: '10px'}}>
        <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>Peso:</label>
        <div style={{ display: 'flex' }}>
          <label style={{ marginRight: '5px' }}>Mín:</label>
          <input style={{ padding: '5px', marginRight: '10px' }} type="number" />
          <label style={{ marginRight: '5px' }}>Máx:</label>
          <input style={{ padding: '5px' }} type="number" />
          <p>kg</p>
        </div>
      </div>


      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
        <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>Esperanza de vida:</label>
        <div style={{ display: 'flex' }}>
          <label style={{ marginRight: '5px' }}>Mín:</label>
          <input style={{ padding: '5px', marginRight: '10px' }} type="number" />
          <label style={{ marginRight: '5px' }}>Máx:</label>
          <input style={{ padding: '5px' }} type="number" />
          <p>años</p>



        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label style={{ marginBottom: '10px', fontWeight: 'bold' }}>Temperamentos:</label>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: '5px' }}>
            <input type="checkbox" />
            Calmado
          </label>
          <label style={{ marginBottom: '5px' }}>
            <input type="checkbox" />
            Juguetón
          </label>
          <label style={{ marginBottom: '5px' }}>
            <input type="checkbox" />
            Amistoso
          </label>
        </div>
      </div>

      <button style={{ marginTop: '20px', backgroundColor: '#007aff', color: '#fff', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '16px'}}>Crear nueva raza</button>
    </form>
  );
};

export default BreedForm;