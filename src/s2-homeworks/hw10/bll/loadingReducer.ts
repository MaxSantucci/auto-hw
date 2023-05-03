type LoadingStateType = {
   isLoading: boolean
}

const initState: LoadingStateType = {
   isLoading: false,
}

type ActionType = LoadingActionType

export const loadingReducer = (state: LoadingStateType = initState, action: ActionType): LoadingStateType => { // fix any
   switch (action.type) {
      // пишет студент  // need to fix
      case 'CHANGE_LOADING': {
         return {
            ...state, isLoading: action.isLoading
         }
      }
      default:
         return state
   }
}

type LoadingActionType = {
   type: 'CHANGE_LOADING'
   isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
   type: 'CHANGE_LOADING',
   isLoading,
})
