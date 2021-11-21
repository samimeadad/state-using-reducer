export const portalReducer = ( state, action ) => {
    switch ( action.type ) {
        case 'ADD_PATIENT':
            console.log( action );

            const addingPatient = {
                name: action.name,
                id: action.name + state.patients.length
            }

            const newPatients = [ ...state.patients, addingPatient ];

            return {
                ...state,
                patients: newPatients
            }
            break;

        case 'REMOVE_PATIENT':
            console.log( action );
            const allPatientsAfterRemove = state.patients.filter( patient => patient.id !== action.id );
            
            return {
                ...state,
                patients: allPatientsAfterRemove
            }
        default:
            return state;
            break;
    }
}