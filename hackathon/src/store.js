let store = {
  _state: {

  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("state changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    
  },
};

window.store = store;

export default store;