const user = [
  {
    id: crypto.randomUUID(),
    email: "maqa@mamedov.gmail.com",
    name: "Maqa",
    password: "12345",
  },
  {
    id: crypto.randomUUID(),
    email: "ali@mamedov.gmail.com",
    name: "ali",
    password: "123456",
  },
];


export const userREducer = (state = user, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.users];

    // case "EDIT_CARS":
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            ...action.update,
          };
        } else {
          return item;
        }
      });

    case "GET_USERS":
      return action.user;
    case "REMOVE_USERS":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};