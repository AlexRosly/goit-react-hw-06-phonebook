import { Section } from "./App.styled";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

export default function App() {
  return (
    <Section>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Section>
  );
}
