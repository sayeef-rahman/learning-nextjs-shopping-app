import Link from "next/link";

const ClientPage = () => {
    const clients = [
        { id: 1, Name: "Sayeef" },
        { id: 2, Name: "Robin" },
        { id: 3, Name: "Mojo" },
        { id: 4, Name: "Wanda" },
      ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id} >
            <Link href={`clients/${client.id}`}>{client.Name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
