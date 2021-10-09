import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const items = createReducer(
  [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  {
    [actions.addContact]: (state, { payload }) =>
      checkAddContacts(state, { payload }),
    [actions.deleteContact]: (state, { payload }) =>
      state.filter((contact) => contact.name !== payload),
  }
);

const checkAddContacts = (state, { payload }) => {
  const searchName = state.map((cont) => cont.name).includes(payload.name);
  const messege = `${payload.name} is already in contacts`;
  if (searchName) {
    alert(messege);
    return [...state];
  } else {
    return [payload, ...state];
  }
};

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

//Made on Redux

// import { combineReducers } from "redux";
// import types from "./types";

// const items = (
//   state = [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ],
//   { type, payload }
// ) => {
//   switch (type) {
//     case types.ADD:
//       const searchName = state.map((cont) => cont.name).includes(payload.name);
//       const messege = `${payload.name} is already in contacts`;
//       if (searchName) {
//         alert(messege);
//         return [...state];
//       } else {
//         return [...state, payload];
//       }

//     case types.DELETE:
//       return state.filter((contact) => contact.name !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });
