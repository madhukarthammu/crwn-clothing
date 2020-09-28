import { createSelector } from 'reselect'

const SelectUser = state => state.user

export const SelectCurrentUser = createSelector(
    [SelectUser],
    (user) => user.currentUser
) 
