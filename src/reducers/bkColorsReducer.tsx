import { reducerActionType } from "../types/reducerActionsType";

export type ThemeType = {
    rightColor_1: string
    rightColor_2: string
    leftColor_1: string
    leftColor_2: string
}

export const themeInitialState: ThemeType = {

    //Concatenasse para poder usar o localStorage
    rightColor_1: '#'
}


export const themeReducer = (state: ThemeType, action: reducerActionType) => {

    switch(action.type) {
        case 'changeTheme':
            return {...state,  status: action.payload.status}
        break
    }

    return state
}