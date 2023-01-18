import { reducerActionType } from "../types/reducerActionsType";

export type ThemeType = {
    status: string | null
}

export const themeInitialState: ThemeType = {

    //Concatenasse para poder usar o localStorage
    status: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
}


export const themeReducer = (state: ThemeType, action: reducerActionType) => {

    switch(action.type) {
        case 'changeTheme':
            return {...state,  status: action.payload.status}
        break
    }

    return state
}