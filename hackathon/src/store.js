let store = {
  _state: {
    rivers: [
      {
        name: "В",
        location: "г. Дубна, Московская обл.",
        annualOutput: 119,
        startOfConstruction: 1933,
        yearOfEntry: "1937-1938",
      },
      {
        name: "А",
        location: "г. Дубна, Московская обл.",
        annualOutput: 119,
        startOfConstruction: 1933,
        yearOfEntry: "1937-1938",
      },
      {
        name: "Б",
        location: "г. Дубна, Московская обл.",
        annualOutput: 119,
        startOfConstruction: 1933,
        yearOfEntry: "1937-1938",
      },
    ],
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

  dispatch(action) {},
};

window.store = store;

export default store;
