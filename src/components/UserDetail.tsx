import { useParams } from "react-router-dom";
import { User } from "./UserList";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";


export default function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      setUser(data);
      setLoading(false);
    };
    fetchUsers();
  }, [id]);
  if (loading) return <h3>Loading...</h3>;
  if (!user) return <h1>User not found</h1>;
  return (
    <div className="flex flex-col text-center items-center gap-11 mt-11">
      <h1 className="text-2xl font-extrabold ">{user.name}</h1>
      <div className="overflow-x-auto">
        <table className="table-auto">
          <thead className="bg-gray-50 border-gray-500 text-center">
            <tr>
              <th className="px-4 py-2 sm:table-cell hidden">Information</th>
              <th className="px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 text-sm text-gray-700 sm:table-cell hidden">
                Email
              </td>
              <td className="border px-4 py-2 text-sm text-gray-700">
                {user.email}
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-sm text-gray-700 sm:table-cell hidden">
                Username
              </td>
              <td className="border px-4 py-2 text-sm text-gray-700">
                {user.username}
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-sm text-gray-700 sm:table-cell hidden">
                Phone
              </td>
              <td className="border px-4 py-2 text-sm text-gray-700">
                {user.phone}
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-sm text-gray-700 sm:table-cell hidden">
                Website
              </td>
              <td className="border px-4 py-2 text-sm text-gray-700">
                {user.website}
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-sm text-gray-700 sm:table-cell hidden">
                Address
              </td>
              <td className="border px-4 py-2 text-sm text-gray-700">
                {user.address.street}, {user.address.suite}, {user.address.city}
                , {user.address.zipcode}
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-sm text-gray-700 sm:table-cell hidden">
                Company Name
              </td>
              <td className="border px-4 py-2 text-sm text-gray-700">
                {user.company.name}
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-sm text-gray-700 sm:table-cell hidden">
                Company Catch Phrase
              </td>
              <td className="border px-4 py-2 text-sm text-gray-700">
                {user.company.catchPhrase}
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-sm text-gray-700 sm:table-cell hidden">
                Company BS
              </td>
              <td className="border px-4 py-2 text-sm text-gray-700">
                {user.company.bs}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <MapContainer center={[Number(user.address.geo.lat),Number(user.address.geo.lng)]} zoom={13} style={{ height: '50vh', width: '60%'}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[Number(user.address.geo.lat),Number(user.address.geo.lng)]}>
        <Popup>
         This is where you can find  <br /> {user.name}
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}
