import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Ranjan Kumar Mandal',
        email: 'ranjan@gmail.com',
        phone: '111-222-333-4',
        type: 'personal',
      },
      {
        id: 2,
        name: 'brad T',
        email: 'brad@gmail.com',
        phone: '444-333-666-2',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Shree Satya',
        email: 'satya@gmail.com',
        phone: '435-231-165-3',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // delete contact

  // set current contact

  // clear current contact

  // update contact

  // filter contacts

  // clear filters

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
