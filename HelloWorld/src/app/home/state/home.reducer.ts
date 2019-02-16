import {CAMBIAR_MOSTRAR_LABEL} from '~/app/home/state/actions/cambiar-mostrar-label';
import {HomeState} from '~/app/home/state/home.state';

const initialHomeState: HomeState = {
    labelVisible: true,
}

export function homeReducer(state = initialHomeState, action): HomeState {
    switch (action.type) {
        case CAMBIAR_MOSTRAR_LABEL:
            console.log(JSON.stringify(state))
            console.log(action.payload)
            return {
                ...state,
                labelVisible: action.payload
            }
        default:
            return state
    }
}