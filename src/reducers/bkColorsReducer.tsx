import { reducerActionType } from "../types/reducerActionsType";

export type ColorsType = {
    rightColor_1: string
    rightColor_2: string
    leftColor_1: string
    leftColor_2: string
}

export const colorInitialState: ColorsType = {

    //Concatenasse para poder usar o localStorage
    rightColor_1: '#404ABF',
    rightColor_2: '#8C33CC',
    leftColor_1: '#CC3DAA',
    leftColor_2: '#322BD9',

}


export const colorReducer = (state: ColorsType, action: reducerActionType) => {

    switch(action.type) {
        case 'changeColor':
            return {...state,  status: action.payload.status}
        break
    }

    return state
}