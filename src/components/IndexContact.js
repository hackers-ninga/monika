function IndexContact(props) {
    const contactLists = props.contacts.map(contact => {
        return (
            <tr>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{contact.name}</td>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{contact.email}</td>
                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{contact.phone}</td>
            </tr>
        )
    })
    return (
        <table className="lg:w-2/3 mt-4 w-full mx-auto table-auto w-full text-left whitespace-no-wrap">
            <thead>
                <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Name</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Email</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Phone</th>
                </tr>
            </thead>
            <tbody>
                {contactLists}
            </tbody>
        </table>
    )
}

export default IndexContact;