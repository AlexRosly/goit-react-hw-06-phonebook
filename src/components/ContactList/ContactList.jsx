import React from "react";
import { connect } from "react-redux";
import phoneBookActions from "../../redux/actions";
import { Button, List, Span, Paragraf, Item } from "./ContactList.styled";

const ContactList = ({ contacts, onDelete }) => (
  <Item>
    {contacts.map((contact) => (
      <List key={contact.name}>
        <Paragraf>
          {contact.name}: <Span>{contact.number}</Span>
        </Paragraf>
        <Button type="button" onClick={() => onDelete(contact.name)}>
          Delete
        </Button>
      </List>
    ))}
  </Item>
);

const getVisibleContact = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContact(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (contactsName) =>
    dispatch(phoneBookActions.deleteContact(contactsName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
