import notesCategories from "../redux-states/users"

//Define Actions
const notesCategoriesReducer = (localStorage) => {
    return (state = localStorage.notesCategories || notesCategories, action) => {
        switch (action.type) {
            default:
                return state
        }
    }
}

export default notesCategoriesReducer;