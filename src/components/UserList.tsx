import { useEffect, useMemo, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
//setting up types for the User object
interface Geo {
  lat: string;
  lng: string;
}
interface Address {
  street: string;
  city: string;
  suite: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
export default function UserList() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [search, SetSearch] = useState<string>("");
  //fetching user data from the api
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);
  //created a filter on users names with useMemo
  const filtredUsers = useMemo(() => {
    if (!search) {
      return users;
    }
    return users.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [users, search]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetSearch(event.target.value);
   
  };
  //displaying users list in a table that turns into a grid of cards on smaller screens
  return (
    <div className="p-5 h-screen bg-gray-100 text-start w-screen overflow-hidden">
      <h1 className="text-xl mb-6">Users</h1>
      <input
        placeholder="Search ... "
        onChange={handleSearch}
        value={search}
        className="min-w-[100%] mb-10 h-10 pl-10 "
      />

      <div className="rounded-lg shadow hidden md:block">
        <table className="w-full shadow-lg">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="w-10 p-3 text-sm font-semibold  text-left">Id</th>
              <th className="w-16 p-3 text-sm font-semibold  text-left">
                Name
              </th>
              <th className="w-10 p-3 text-sm font-semibold  text-left">
                Company
              </th>
              <th className="w-26 p-3 text-sm font-semibold  text-left">
                City
              </th>
              <th className="w-26 p-3 text-sm font-semibold  text-left">
                Email
              </th>
              <th className="w-24 p-3 text-sm font-semibold  text-left">
                phone
              </th>
              <th className="w-26 p-3 text-sm font-semibold  text-left">
                website
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtredUsers.map((user) => {
              return (
                <tr
                  key={user.id}
                  className="bg-white hover:cursor-pointer hover:bg-blue-200"
                  onClick={() => {
                    navigate(`/user/${user.id}`);
                  }}
                >
                  <td className="p-3 text-sm text-gray-700 hover:text-blue-400 hover:font-bold">
                    {user.id}
                  </td>

                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {" "}
                    {user.name}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {" "}
                    {user.company.name}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {" "}
                    {user.address.city}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {" "}
                    {user.email}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {" "}
                    {user.phone}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {" "}
                    {user.website}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        {filtredUsers.map((user) => {
          return (
            <Link key={user.id} to={`/user/${user.id}`}>
              <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="text-blue-500 font-bold hover:text-green">
                    {user.id}
                  </div>
                  <div className="text-gray-500"> {user.name}</div>
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                    {user.email}
                  </span>
                </div>
                <div className="text-sm text-gray-700">{user.phone}</div>
                <div className="text-sm font-medium text-black">
                  {user.website}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
