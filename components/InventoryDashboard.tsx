
import React from 'react';
import { InventoryItem, ExpiryStatus } from '../types';

interface Props {
  items: InventoryItem[];
  onDeleteItem: (id: string) => void;
}

const InventoryDashboard: React.FC<Props> = ({ items, onDeleteItem }) => {
  const getStatusColor = (status: ExpiryStatus) => {
    switch (status) {
      case ExpiryStatus.FRESH: return 'status-fresh';
      case ExpiryStatus.EXPIRING_SOON: return 'status-expiring';
      case ExpiryStatus.EXPIRED: return 'status-expired';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="w-full min-h-screen">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
        <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-sm border border-gray-100 glow-green flex flex-col sm:flex-row items-start sm:items-center justify-between hover:shadow-sm cursor-pointer">
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Total Assets</p>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">{items.length}</h3>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-4 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-lg flex-shrink-0">
            <i className="fas fa-boxes-stacked"></i>
          </div>
        </div>
        <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-sm border border-gray-100 glow-amber flex flex-col sm:flex-row items-start sm:items-center justify-between hover:shadow-sm cursor-pointer">
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Critical Expiry</p>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-600">
              {items.filter(i => i.status === ExpiryStatus.EXPIRING_SOON).length}
            </h3>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-4 w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-500 text-lg flex-shrink-0">
            <i className="fas fa-hourglass-half"></i>
          </div>
        </div>
        <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-sm border border-gray-100 glow-rose flex flex-col sm:flex-row items-start sm:items-center justify-between hover:shadow-sm cursor-pointer col-span-1 sm:col-span-2 lg:col-span-1">
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Waste Identified</p>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-rose-600">
              {items.filter(i => i.status === ExpiryStatus.EXPIRED).length}
            </h3>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-4 w-12 h-12 bg-rose-50 rounded-lg flex items-center justify-center text-rose-500 text-lg flex-shrink-0">
            <i className="fas fa-trash-can"></i>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="table-container">
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          <h3 className="font-semibold text-gray-800 text-sm lg:text-base">Managed Inventory Store</h3>
          <button className="text-green-600 text-xs font-semibold hover:bg-green-50 px-3 py-2 rounded transition-all w-full sm:w-auto">+ Add SKU Manually</button>
        </div>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th className="text-left">Item Name</th>
                <th className="text-left hidden sm:table-cell">Category</th>
                <th className="text-left">Quantity</th>
                <th className="text-left hidden lg:table-cell">Predicted Shelf Life</th>
                <th className="text-left">Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="font-medium text-gray-800 text-sm sm:text-base">{item.name}</td>
                  <td className="text-gray-600 text-sm hidden sm:table-cell">{item.category}</td>
                  <td className="text-gray-700 text-sm sm:text-base">{item.quantity}</td>
                  <td className="text-gray-600 text-sm hidden lg:table-cell">
                    {new Date(item.expiryDate).toLocaleDateString()}
                  </td>
                  <td>
                    <span className={`status-badge ${getStatusColor(item.status)} text-xs`}>
                      {item.status}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <button 
                      onClick={() => onDeleteItem(item.id)}
                      className="text-gray-400 hover:text-gray-600 p-1 sm:p-1.5 transition-all"
                      title="Delete item"
                    >
                      <i className="fas fa-trash text-xs sm:text-sm"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {items.length === 0 && (
          <div className="p-10 text-center bg-gray-50">
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 border border-gray-200">
              <i className="fas fa-inbox text-gray-400 text-xl"></i>
            </div>
            <p className="text-gray-500 text-sm">Your inventory is currently empty. Use the Vision Module to scan items.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryDashboard;
