import React, { useReducer, useState } from 'react';
import { portalReducer } from '../Reducers/PortalReducer';
import { portalState } from '../Store/portalState';

const Portal = () => {
    const [ state, dispatch ] = useReducer( portalReducer, portalState );
    const [ name, setName ] = useState( '' );

    return (
        <div>
            <h1>My Doctors Portal </h1>
            <h2>Total Patients: { state.patients.length }</h2>
            <input type="text" onChange={ e => setName( e.target.value ) } />
            <button onClick={ () => dispatch( { type: 'ADD_PATIENT', name: name } ) }>Add</button>
            <br />
            <h3>------------------------------------------------</h3>
            {
                state.patients.map( patient => <p key={ patient.id }>
                    { patient.name } - { patient.id }<button onClick={ () => dispatch( { type: 'REMOVE_PATIENT', id: patient.id } ) }>X</button>
                </p> )
            }
        </div >
    );
};

export default Portal;