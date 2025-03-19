import React from 'react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { 
  Calendar, 
  Package, 
  ShoppingCart, 
  CreditCard, 
  User, 
  Settings, 
  LogOut, 
  Bell, 
  Truck, 
  ChevronDown, 
  Search 
} from 'lucide-react';

const UserProfile = () => {
  // Sample data - replace with your backend data
  const purchaseData = [
    { name: 'Jan', amount: 3000 },
    { name: 'Feb', amount: 2500 },
    { name: 'Mar', amount: 4000 },
    { name: 'Apr', amount: 3500 },
    { name: 'May', amount: 4500 },
    { name: 'Jun', amount: 5000 },
  ];

  const productDistribution = [
    { name: 'Quick Seal', value: 35 },
    { name: 'Ultra Bond', value: 25 },
    { name: 'Industrial Strength', value: 20 },
    { name: 'Precision Tip', value: 15 },
    { name: 'Clear Dry', value: 5 },
  ];

  const recentOrders = [
    { id: '32454', date: '15 Mar 2025', product: 'Quick Seal (50pc)', amount: '$450.00', status: 'Delivered' },
    { id: '32455', date: '10 Mar 2025', product: 'Ultra Bond (100pc)', amount: '$850.00', status: 'Processing' },
    { id: '32456', date: '28 Feb 2025', product: 'Industrial Strength (25pc)', amount: '$375.00', status: 'Shipped' },
  ];

  const COLORS = ['#FF9F1C', '#FFB941', '#FFCE73', '#FFE3B0', '#CBF3F0'];

  return (
    <div className="min-h-screen bg-gray-50">
 

      {/* Main Content */}
      <main className=" px-4 sm:px-6 lg:px-8 py-8">
        <div className="">
          {/* Sidebar */}
        

          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-500 text-sm font-medium">Total Orders</h3>
                  <ShoppingCart className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="text-2xl font-bold text-gray-800 mt-2">152</p>
                <p className="text-green-500 text-sm mt-1">+12.5% from last month</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-500 text-sm font-medium">Total Spent</h3>
                  <CreditCard className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="text-2xl font-bold text-gray-800 mt-2">$24,350</p>
                <p className="text-green-500 text-sm mt-1">+8.2% from last month</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-500 text-sm font-medium">Active Orders</h3>
                  <Package className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="text-2xl font-bold text-gray-800 mt-2">5</p>
                <p className="text-red-500 text-sm mt-1">-2 from last week</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-500 text-sm font-medium">Loyalty Points</h3>
                  <Calendar className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="text-2xl font-bold text-gray-800 mt-2">1,250</p>
                <p className="text-green-500 text-sm mt-1">+150 from last order</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Purchase History</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={purchaseData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="amount" stroke="#FF9F1C" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Product Distribution</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={productDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {productDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-800">Recent Orders</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <div key={order.id} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                          <Package className="h-5 w-5 text-yellow-500" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{order.product}</p>
                          <p className="text-sm text-gray-500">Order #{order.id} • {order.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-6 text-right">
                          <p className="font-medium text-gray-800">{order.amount}</p>
                          <p className={`text-sm ${
                            order.status === 'Delivered' ? 'text-green-500' : 
                            order.status === 'Processing' ? 'text-blue-500' : 'text-orange-500'
                          }`}>{order.status}</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <button className="text-yellow-500 hover:text-yellow-600 font-medium">View All Orders</button>
              </div>
            </div>

            {/* User Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <p className="text-gray-800">John Doe</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <p className="text-gray-800">john.doe@example.com</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <p className="text-gray-800">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <p className="text-gray-800">Acme Adhesives Inc.</p>
                  </div>
                </div>
                <button className="mt-6 py-2 px-4 bg-yellow-50 text-yellow-600 font-medium rounded-lg hover:bg-yellow-100 transition-colors">
                  Edit Information
                </button>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Shipping Address</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 1</label>
                    <p className="text-gray-800">123 Adhesive Way</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address Line 2</label>
                    <p className="text-gray-800">Suite 456</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City, State, ZIP</label>
                    <p className="text-gray-800">Bondville, CA 90210</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <p className="text-gray-800">United States</p>
                  </div>
                </div>
                <button className="mt-6 py-2 px-4 bg-yellow-50 text-yellow-600 font-medium rounded-lg hover:bg-yellow-100 transition-colors">
                  Edit Address
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
};

export default UserProfile;