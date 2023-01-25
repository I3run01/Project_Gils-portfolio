import { createContext, useReducer } from "react";
import { useEffect } from "react";
import { reducerActionType } from "../types/reducerActionsType";

//Imports
import { themeReducer, themeInitialState, ThemeType  } from "../reducers/themeReducer";
import { ColorReducer, ColorInitialState, ColorsType } from '../reducers/bkColorsReducer'

//Campo editável
type initialStateType = {
    theme: ThemeType,
    color: ColorsType
}

type ContextType = {
    state: initialStateType
    dispatch: React.Dispatch<any>
}

///Campo editável
const initialState = {
    theme: themeInitialState,
    color: ColorInitialState
}



export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

///Campo editável
const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    theme: themeReducer(state.theme, action),
    color: ColorReducer(state.color, action)
})

export const ContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    
    const [state, dispatch] = useReducer(mainReducer, initialState)

    //coloque dentro do useEffect as função que queira guardar no localStorage
    useEffect(() => {
        localStorage.setItem('theme', state.theme.status as string)
    })

    return (
        <Context.Provider value={{state, dispatch}} >
            {children}
        </Context.Provider>
    )

}