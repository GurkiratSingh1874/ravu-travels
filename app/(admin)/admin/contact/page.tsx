import { getContactQueries } from "@/features/contact/services/get-contact-queries";

export default async function ContactPage() {
  const contacts = await getContactQueries();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Contact Queries
      </h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3">Name</th>
            <th className="border p-3">Phone</th>
            <th className="border p-3">Email</th>
            <th className="border p-3">Message</th>
            <th className="border p-3">Date</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td className="border p-2">{contact.name}</td>
              <td className="border p-2">{contact.phone}</td>
              <td className="border p-2">{contact.email || "-"}</td>
              <td className="border p-2">{contact.message}</td>
              <td className="border p-2">
                {contact.createdAt.toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}