export default (state, action) => {
    console.log(action);
    switch(action.type) {
        case "SET_PAGE":
            return {
                ...state,
                showingPage: action.page
            }
        default: return state;
    }
}