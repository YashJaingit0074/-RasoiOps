
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab, isDark, setIsDark }) => {
  const navItems = [
    { id: 'dashboard', label: 'Inventory Hub', icon: 'fa-box-open' },
    { id: 'vision', label: 'Vision Input', icon: 'fa-camera' },
    { id: 'rag', label: 'RAG Meal Planner', icon: 'fa-utensils' },
    { id: 'analytics', label: 'Sustainability Audit', icon: 'fa-chart-line' },
  ];

  return (
    <div className={`flex h-screen overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Sidebar */}
      <aside className={`w-64 flex flex-col shadow-2xl z-10 ${isDark ? 'bg-slate-800 text-white' : 'bg-slate-900 text-white'}`}>
        <div className="p-6 border-b border-slate-700 flex items-center gap-3">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <i className="fas fa-leaf text-white text-2xl"></i>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">RasoiOps</h1>
            <p className="text-xs text-green-400 font-mono uppercase tracking-widest">Sustainability Engine</p>
          </div>
        </div>
        <nav className="flex-1 p-5 space-y-3 mt-6 overflow-y-auto">
          <div className="px-4 mb-4">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Main Menu</span>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200 text-lg font-semibold ${
                activeTab === item.id 
                  ? 'bg-green-500 text-white shadow-lg scale-105' 
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white hover:scale-102'
              }`}
            >
              <i className={`fas ${item.icon} text-2xl w-7`}></i>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-slate-700 mt-auto">
          <div className={`p-5 rounded-xl text-center border ${isDark ? 'bg-slate-700/50 border-slate-600/50' : 'bg-slate-700/50 border-slate-600/50'}`}>
            <div className="flex justify-center mb-3">
              <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full font-bold border border-green-500/30">Active Mode</span>
            </div>
            <p className="text-sm text-slate-300 mb-2">Weekly Waste Redux</p>
            <p className="text-3xl font-bold text-green-400">-34.2%</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 overflow-y-auto p-8 relative ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-gray-100' : 'text-slate-800'}`}>
              {navItems.find(i => i.id === activeTab)?.label}
            </h2>
            <p className={`text-sm italic mt-1 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Engineered for Zero-Waste Household Operations</p>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-3 rounded-lg transition-all text-xl ${isDark ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              title="Toggle theme"
            >
              <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <div className="hidden md:flex flex-col items-end mr-2">
              <span className={`text-xs font-bold uppercase tracking-tighter ${isDark ? 'text-gray-400' : 'text-slate-400'}`}>System Health</span>
              <span className={`text-[10px] font-mono flex items-center gap-1 ${isDark ? 'text-green-400' : 'text-emerald-500'}`}>
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                AI Core Optimized
              </span>
            </div>
            <button className="bg-white p-2.5 rounded-xl shadow-sm text-slate-500 hover:text-emerald-600 transition-all border border-slate-100">
              <i className="fas fa-bell"></i>
            </button>
            <div className="flex items-center gap-3 bg-white pl-1.5 pr-4 py-1.5 rounded-xl shadow-sm border border-slate-100">
              <div className="w-9 h-9 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center text-slate-600 font-black shadow-inner">RA</div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-800 leading-none mb-0.5">Admin User</span>
                <span className="text-[10px] text-slate-400 font-medium">Small Restaurant Tier</span>
              </div>
            </div>
          </div>
        </header>
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
