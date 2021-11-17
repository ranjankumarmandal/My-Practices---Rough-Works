import React, { Fragment, useContext } from 'react';
import ContactItem from './ContactItem';
import contactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext1 = useContext(contactContext);
  const { contacts } = contactContext1;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
