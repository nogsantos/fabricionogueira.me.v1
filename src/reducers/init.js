/**
 * Returns a new state object to the Redux store where the started flag
 * is set to true and resets everything else inside the state property.
 */
export default (state, initialAppState) => {
    return {
        ...state,
        appState: {
            ...initialAppState,
            authenticated: false,
        }
    }
};
