import { combineReducers } from "redux";
// import actions from "./actions";
import types from "./types";

const items = (
  state = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  { type, payload }
) => {
  switch (type) {
    case types.ADD:
      // const searchName = state.contacts
      //   .map((cont) => cont.name)
      //   .includes(payload.name);
      // const messege = `${payload.name} is already in contacts`;
      // if (searchName) {
      //   alert(messege);
      // } else {
      //   return [...state, payload];
      // }
      // break;
      return [...state, payload];

    case types.DELETE:
      return state.filter((contact) => contact.name !== payload);

    default:
      return state;
  }
};

// addContact = ({ name, number }) => {
//   const contact = {
//     id: uuidv4(),
//     name: name,
//     number: number,
//   };

//   const searchName = this.state.contacts
// .map(cont => cont.name)
// .includes(contact.name);

//   const messege = `${contact.name} is already in contacts`;

//   if (searchName) {
//     alert(messege);
//   } else {
//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   }
// };

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
