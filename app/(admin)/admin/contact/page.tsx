import { getContactQueries } from "@/features/contact/services/get-contact-queries";

export default async function ContactPage() {
  const contacts = await getContactQueries();

  return (
    <div className="max-w-7xl space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-slate-900">Contact Queries</h1>
        <p className="text-sm text-slate-500 mt-1">Messages submitted through the contact form.</p>
      </div>

      <div className="overflow-x-auto rounded-2xl bg-white shadow-sm border border-slate-100">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50">
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Name</th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Phone</th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Email</th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Message</th>
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Date</th>
            </tr>
          </thead>

          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-5 py-12 text-center text-slate-400">
                  No contact queries yet.
                </td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <tr key={contact.id} className="border-t border-slate-50 hover:bg-slate-50 transition">
                  <td className="px-5 py-4 font-medium text-slate-800">{contact.name}</td>
                  <td className="px-5 py-4 text-slate-600">{contact.phone}</td>
                  <td className="px-5 py-4 text-slate-500">{contact.email || "—"}</td>
                  <td className="px-5 py-4 text-slate-600 max-w-xs">
                    <p className="line-clamp-2">{contact.message}</p>
                  </td>
                  <td className="px-5 py-4 text-slate-400 whitespace-nowrap">
                    {contact.createdAt.toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}