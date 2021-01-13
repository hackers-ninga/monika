import CreateContact from './components/CreateContact';
import SearchContact from './components/SearchContact';
import IndexContact from './components/IndexContact';

function App() {
  const defaultContactLists = [
    {name: 'Doo bal', email: 'doo@gmail.com', phone: '040583834'},
    {name: 'Ahmed khaled', email: 'ahmed@gmail.com', phone: '57384954'}
  ];
  // use state here to create the contacts list
  // the use the default users list above to initialize the contact list state whene you use useState

  function addNewContact() {
    // write the logic to add new contact object to the list
  }

  function searchContacts() {
    // write the logic to perform the search on any user property (name, email, phone)
  }

  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="border-b flex flex-col text-center w-full mb-4">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">MONIKA</h1>
        </div>
        <SearchContact searchContacts={searchContacts} />
        <CreateContact addNewContact={addNewContact} />

        {/* Once you define the contacts array using useState above update the defaultContactLists to the new varialbe name you choose */}
        <IndexContact contacts={defaultContactLists} />
      </div>
    </div>
  );
}

export default App;
