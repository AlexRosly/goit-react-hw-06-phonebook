import types from "./types";
import { v4 as uuidv4 } from "uuid";

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name: name,
    number: number,
  },
});

const deleteContact = (contactsName) => ({
  type: types.DELETE,
  payload: contactsName,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
