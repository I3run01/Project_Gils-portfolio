import { reducerActionType } from "../types/reducerActionsType";

export type ColorsType = {
    rightColor_1: string,
    rightColor_2: string,
    leftColor_1: string,
    leftColor_2: string,
}

export const ColorInitialState: ColorsType = {
    rightColor_1:'#404ABF',
    rightColor_2:'#8C33CC',
    leftColor_1:'#CC3DAA',
    leftColor_2:'#322BD9',
}

export const ColorReducer = (state: ColorsType, action: reducerActionType) => {
    switch(action.type) {
        case 'changerightColor_1':
            return {...state, rightColor_1: action.payload.rightColor_1}
        break

        case 'changerightColor_2':
            return {...state, rightColor_2: action.payload.rightColor_2}
        break

        case 'changeleftColor_1':
            return {...state, leftColor_1: action.payload.leftColor_1}
        break

        case 'changeleftColor_2':
            return {...state, leftColor_2: action.payload.leftColor_2}
        break
    }

    return state
}