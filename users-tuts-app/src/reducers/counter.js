const counterReducer = (state=0,action) => {
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state
    }
}
export default counterReducer;
/*
his is known as Redux initialization error, it happens when Redux fires multiple dispatches at the very first mount of your application, where it's being initialized for the first time.

From the logic behind how reducers work, a dispatch for an Action in redux is meant to tell a specific Reducer that some piece of data within it needs to be changed depending on the Action Type/Payload that got dispatched.

In a Reducer, we catch the dispatched Action by providing -commonly- a case with-in a JS switch that matches the Action Type that got dispatched, we do the logic, return a new state to update the state with-in that Reducer.

Since that is the normal flow and behavior of the communication between an Action and a Reducer in Redux, and we now know that Redux fires an Initialization Action at the very first mount, what case do we provide to handle this Initialization Action? since we are using switch it has to be the default case of js switch!

Consider adding a default case at at the end of each of your Reducers to catch all non-related Actions for a specific reducer, such as the Initialization Action, or any other non handled actions around the app.
*/