import {  ArrowDown, ArrowUp, DollarSign,  ShoppingCart, TrendingUp, Users } from "lucide-react";
import { Tooltip } from "react-leaflet";
import { Area, AreaChart, CartesianGrid, Cell, Legend, Line, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts";





const AdminOverview = () => {
  // Sample data - replace with your backend data
  const monthlySales = [
    { month: 'Jan', sales: 65000, orders: 320 },
    { month: 'Feb', sales: 59000, orders: 302 },
    { month: 'Mar', sales: 80000, orders: 401 },
    { month: 'Apr', sales: 81000, orders: 404 },
    { month: 'May', sales: 76000, orders: 388 },
    { month: 'Jun', sales: 85000, orders: 426 },
    { month: 'Jul', sales: 101000, orders: 510 },
  ];

  const productPerformance = [
    { name: 'Quick Seal', sales: 35000, percentage: 35 },
    { name: 'Ultra Bond', sales: 25000, percentage: 25 },
    { name: 'Industrial Strength', sales: 20000, percentage: 20 },
    { name: 'Precision Tip', sales: 15000, percentage: 15 },
    { name: 'Clear Dry', sales: 5000, percentage: 5 },
  ];

  const paymentMethods = [
    { name: 'Credit Card', value: 65 },
    { name: 'PayPal', value: 20 },
    { name: 'Bank Transfer', value: 10 },
    { name: 'Other', value: 5 },
  ];

  const recentOrders = [
    { id: '32457', customer: 'Acme Corp', date: '20 Mar 2025', amount: '$2,450.00', status: 'Completed' },
    { id: '32458', customer: 'Globex Inc', date: '19 Mar 2025', amount: '$1,850.00', status: 'Processing' },
    { id: '32459', customer: 'Initech', date: '18 Mar 2025', amount: '$3,375.00', status: 'Shipped' },
    { id: '32460', customer: 'Hooli', date: '17 Mar 2025', amount: '$950.00', status: 'Pending' },
  ];

  const topCustomers = [
    { name: 'Acme Corp', orders: 47, spend: '$24,500' },
    { name: 'Globex Inc', orders: 36, spend: '$18,300' },
    { name: 'Initech', orders: 31, spend: '$15,750' },
    { name: 'Hooli', orders: 28, spend: '$14,200' },
    { name: 'Massive Dynamic', orders: 25, spend: '$12,850' },
  ];

  const inventoryAlerts = [
    { product: 'Quick Seal 50ml', stock: 24, threshold: 30 },
    { product: 'Industrial Strength 100ml', stock: 12, threshold: 25 },
    { product: 'Precision Tip 30ml', stock: 8, threshold: 20 },
  ];

  const COLORS = ['#FF9F1C', '#FFB941', '#FFCE73', '#FFE3B0', '#CBF3F0'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
     

      {/* Main Content */}
      <main className=" px-4 sm:px-6 lg:px-8 py-8">
        <div className="">
          {/* Sidebar */}
     

          {/* Main Content */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Overview</h2>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">Total Revenue</p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-1">$437,800</h3>
                  </div>
                  <div className="p-2 rounded-md bg-yellow-50">
                    <DollarSign className="h-6 w-6 text-yellow-500" />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-green-500 flex items-center text-sm">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    12.5%
                  </span>
                  <span className="text-gray-500 text-sm ml-2">from last month</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">Total Orders</p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-1">2,751</h3>
                  </div>
                  <div className="p-2 rounded-md bg-yellow-50">
                    <ShoppingCart className="h-6 w-6 text-yellow-500" />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-green-500 flex items-center text-sm">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    8.2%
                  </span>
                  <span className="text-gray-500 text-sm ml-2">from last month</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">Total Customers</p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-1">528</h3>
                  </div>
                  <div className="p-2 rounded-md bg-yellow-50">
                    <Users className="h-6 w-6 text-yellow-500" />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-green-500 flex items-center text-sm">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    5.3%
                  </span>
                  <span className="text-gray-500 text-sm ml-2">from last month</span>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">Conversion Rate</p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-1">3.42%</h3>
                  </div>
                  <div className="p-2 rounded-md bg-yellow-50">
                    <TrendingUp className="h-6 w-6 text-yellow-500" />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="text-red-500 flex items-center text-sm">
                    <ArrowDown className="h-3 w-3 mr-1" />
                    0.5%
                  </span>
                  <span className="text-gray-500 text-sm ml-2">from last month</span>
                </div>
              </div>
            </div>

            {/* Sales Overview */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-800">Sales Overview</h3>
                <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                  <option>Last 7 months</option>
                  <option>Last 12 months</option>
                  <option>Last 30 days</option>
                </select>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlySales}>
                    <defs>
                      <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF9F1C" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#FF9F1C" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="sales" stroke="#FF9F1C" fillOpacity={1} fill="url(#colorSales)" />
                    <Line type="monotone" dataKey="orders" stroke="#CBF3F0" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Product Performance and Payment Method */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-6">Product Performance</h3>
                <div className="space-y-4">
                  {productPerformance.map((product) => (
                    <div key={product.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700">{product.name}</span>
                        <span className="text-gray-700">${(product.sales / 1000).toFixed(1)}k</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-yellow-500 h-2.5 rounded-full" 
                          style={{ width: `${product.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Payment Methods</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={paymentMethods}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {paymentMethods.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Recent Orders and Top Customers */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-800">Recent Orders</h3>
                  <button className="text-sm text-yellow-500 hover:text-yellow-600">View All</button>
                </div>
                <div className="divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="px-6 py-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-800">{order.customer}</p>
                        <p className="text-sm text-gray-500">Order #{order.id} • {order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-800">{order.amount}</p>
                        <p className={`text-sm ${
                          order.status === 'Completed' ? 'text-green-500' : 
                          order.status === 'Processing' ? 'text-blue-500' : 
                          order.status === 'Shipped' ? 'text-orange-500' : 'text-gray-500'
                        }`}>{order.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-800">Top Customers</h3>
                  <button className="text-sm text-yellow-500 hover:text-yellow-600">View All</button>
                </div>
                <div className="divide-y divide-gray-200">
                  {topCustomers.map((customer, index) => (
                    <div key={customer.name} className="px-6 py-4 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                        <span className="font-medium text-gray-600">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{customer.name}</p>
                        <p className="text-sm text-gray-500">{customer.orders} orders</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-800">{customer.spend}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inventory Alerts */}
       
          </div>
        </div>
      </main>

   

    </div>
  );
};

export default AdminOverview;