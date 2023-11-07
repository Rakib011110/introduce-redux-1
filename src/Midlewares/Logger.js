const logger = (store) => (next) => (action) => {
    const currentStore = store.getState();
    console.log(currentStore);
    console.log(action);

}
export default logger