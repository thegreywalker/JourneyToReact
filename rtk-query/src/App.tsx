import React from 'react';
import { useAddContactMutation, useContactQuery, useContactsQuery, useDeleteContactMutation, useUpdateContactMutation } from './services/contactsApi';

function App() {
  const { data, error, isLoading, isFetching, isSuccess } = useContactsQuery();


  return (
    <div className="App">
      <h1>React Redux Toolkit RTK Query Tutorial</h1>
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>Fetching...</h2>}
      {error && <h2>Something Went Wrong!!</h2>}
      {isSuccess && (
        <div>
          {data?.map(contact => {
            return <div className='data' key={contact.id}>
              <span>{contact.name}</span>
              <span><ContactDetail id={contact.id} /></span>
            </div>
          })}
        </div>
      )}
      <div>
        <AddContact />
      </div>
    </div>
  );
}


export const ContactDetail: React.FC<{ id: string }> = ({ id }) => {
  const { data } = useContactQuery(id);
  return (
    <pre>{JSON.stringify(data, undefined)}</pre>
  )
}


export const AddContact = () => {
  const [addContact] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const [deleteContact] = useDeleteContactMutation();
  const contact = {
    "id": "7",
    "name": "Priyashree Sarkar ",
    "email": "priyu@priyu.com"
  }

  const contactUpdated = {
    "id": "7",
    "name": "Priyashree Sarkar Updated",
    "email": "priyu@priyu.com"
  }

  

  const addContactHandler = async () => {
    await addContact(contact);
  }
  const updateContactHandler = async () => {
    await updateContact(contactUpdated);
  }
  const deleteContactHandler = async () => {
    await deleteContact(contact.id);
  }

  return (
    <>
      <button onClick={addContactHandler}>Add Contact</button>
      <button onClick={updateContactHandler}>Update Contact</button>
      <button onClick={deleteContactHandler}>Delete Contact</button>
    </>
  )
}

export default App;
