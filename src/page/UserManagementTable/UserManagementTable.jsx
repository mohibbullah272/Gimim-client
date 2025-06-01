import React from 'react';
import { Trash2, UserCircle } from 'lucide-react';

const UserManagementTable = () => {
  // Fake user data (to be replaced with actual backend data)
  const users = [
    {
      id: 1,
      name: "Mehedi Hassan",
      email: "mehedi.hassan@gimimcorp.com",
      joinDate: "2023-05-15",
      profilePicture: "/api/placeholder/40/40"
    },
    {
      id: 2,
      name: "Anika Rahman",
      email: "anika.rahman@gimimcorp.com", 
      joinDate: "2023-02-20",
      profilePicture: "/api/placeholder/40/40"
    },
    {
      id: 3,
      name: "Rakib Islam",
      email: "rakib.islam@gimimcorp.com",
      joinDate: "2023-08-10",
      profilePicture: "/api/placeholder/40/40"
    },
    {
      id: 4,
      name: "Tasnim Ahmed",
      email: "tasnim.ahmed@gimimcorp.com",
      joinDate: "2023-11-05",
      profilePicture: "/api/placeholder/40/40"
    },
    {
      id: 5,
      name: "Sadia Afrin",
      email: "sadia.afrin@gimimcorp.com",
      joinDate: "2024-01-22",
      profilePicture: "/api/placeholder/40/40"
    }
  ];

  return (
    <div className="min-h-screen  p-6">
      <div className="container mx-auto">
        {/* Catchy Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#FF9F1C] uppercase tracking-wide">
            User Management Hub
          </h1>
          <p className="text-gray-600 mt-4">
            Empowering Your Team, One User at a Time
          </p>
        </div>

        {/* Responsive Table */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <table className="w-full">
              <thead className="bg-[#FFB941] text-white">
                <tr>
            
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Joining Date</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr 
                    key={user.id} 
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
               
                    <td className="p-4 font-medium">{user.name}</td>
                    <td className="p-4 text-gray-600">{user.email}</td>
                    <td className="p-4 text-gray-500">{user.joinDate}</td>
                    <td className="p-4 text-center">
                      <button 
                        className="text-red-500 hover:text-red-700 transition-colors"
                        title="Remove User"
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            {users.map((user) => (
              <div 
                key={user.id} 
                className="p-4 border-b flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src={user.profilePicture} 
                    alt={user.name} 
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-xs text-gray-500">
                      Joined: {user.joinDate}
                    </p>
                  </div>
                </div>
                <button 
                  className="text-red-500 hover:text-red-700"
                  title="Remove User"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Table Summary */}
        <div className="mt-6 text-center text-gray-600">
          Total Users: {users.length}
        </div>
      </div>
    </div>
  );
};

export default UserManagementTable;