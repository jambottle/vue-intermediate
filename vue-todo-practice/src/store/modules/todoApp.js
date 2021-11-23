const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

const state = {
  todoItems: storage.fetch(),
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
};

const mutations = {
  addNewTodoItem(state, newTodoItem) {
    const obj = { isCompleted: false, item: newTodoItem };
    localStorage.setItem(newTodoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  toggleComplete(state, payload) {
    state.todoItems[payload.index].isCompleted =
      !state.todoItems[payload.index].isCompleted;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(
      payload.todoItem.item,
      JSON.stringify(payload.todoItem)
    );
  },
  removeTodoItem(state, payload) {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
  },
  clearTodoItems(state) {
    localStorage.clear();
    state.todoItems = [];
  },
};

export default { state, getters, mutations };
