export type ThemeStateType = {
   themeId: number
}

type ActionType = ChangeThemeActionType

const initState = {
   themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): ThemeStateType => { // fix any
   switch (action.type) {
      // дописать
      case 'SET_THEME_ID':
      return {
         ...state, themeId: action.id
      }
      default:
         return state
   }
}


type ChangeThemeActionType = {
   type: 'SET_THEME_ID',
   id: number
}

export const changeThemeId = (id: number): ChangeThemeActionType => ({type: 'SET_THEME_ID', id}) // fix any
