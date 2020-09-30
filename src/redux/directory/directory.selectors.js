import { createSelector } from 'reselect'

const  SelectDirectory = state => state.directory

export const SelectSections = createSelector(
    [SelectDirectory],
    (directory) => directory.sections
)