function SearchContact() {
    return (
        <div className="border-b pb-4 mb-4 lg:w-2/3 w-full mx-auto px-8 sm:px-0">
            <p className="block mb-2">Search in contacts</p>
            <input type="text" placeholder="Search using name, email, or phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
    )
}

export default SearchContact;