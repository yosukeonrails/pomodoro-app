
    let redux = require('redux');
    const thunk=  require ('redux-thunk').default;
    import reducer from './reducers/main';

    let store= redux.createStore( reducer);

    store.subscribe( ()=>{ 
        let state = store.getState();
    })

    export default store;

