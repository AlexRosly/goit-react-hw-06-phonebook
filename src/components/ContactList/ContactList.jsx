import React from "react";
import { connect } from "react-redux";
import phoneBookActions from "../../redux/actions";
import { Button, List, Span } from "./ContactList.styled";

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map((contact) => (
      <List key={contact.name}>
        <p>
          {contact.name}: <Span>{contact.number}</Span>
        </p>
        <Button type="button" onClick={() => onDelete(contact.name)}>
          Delete
        </Button>
      </List>
    ))}
  </ul>
);

const getVisibleContact = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
};

// const mapStateToProps = state => {
//     const { filter, items } = state.contacts;
//     const normalizeFilter = filter.toLowerCase();

//     const visibleContact = items.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizeFilter));

//     return {
//         contacts: visibleContact,
//     }
// };

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContact(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (contactsName) =>
    dispatch(phoneBookActions.deleteContact(contactsName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
