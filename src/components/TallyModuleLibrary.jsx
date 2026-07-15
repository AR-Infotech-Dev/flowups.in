import React, { useState } from 'react';
import { 
  Building2, 
  Receipt, 
  Package, 
  BarChart3, 
  ShieldCheck, 
  Gavel, 
  Mail, 
  CreditCard, 
  Settings,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const TallyModuleLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('Industry-Specific');

  const categories = [
    { id: 'Industry-Specific', name: 'Industry-Specific', icon: <Building2 className="w-5 h-5" /> },
    { id: 'Billing & Invoice', name: 'Billing & Invoice', icon: <Receipt className="w-5 h-5" /> },
    { id: 'Inventory & Stock', name: 'Inventory & Stock', icon: <Package className="w-5 h-5" /> },
    { id: 'Reports & MIS', name: 'Reports & MIS', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'Security & Workflow', name: 'Security & Workflow', icon: <ShieldCheck className="w-5 h-5" /> },
    { id: 'GST & Compliance', name: 'GST & Compliance', icon: <Gavel className="w-5 h-5" /> },
    { id: 'Automation', name: 'Automation', icon: <Mail className="w-5 h-5" /> },
    { id: 'Payment & Receipt', name: 'Payment & Receipt', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'Utility Modules', name: 'Utility Modules', icon: <Settings className="w-5 h-5" /> },
  ];

  const modules = {
    'Industry-Specific': [
      { title: 'School / College ERP', desc: 'Manage admissions, fees, and academic records seamlessly.', tag: 'INDUSTRY' },
      { title: 'Wholesale Garment', desc: 'Optimized for size, color, and fabric-wise stock tracking.', tag: 'INDUSTRY' },
      { title: 'Mobile Shoppe', desc: 'IMEI tracking, service warranties, and accessory management.', tag: 'INDUSTRY' },
      { title: 'Hospital Management', desc: 'Patient billing, pharmacy integration, and doctor payout.', tag: 'INDUSTRY' },
      { title: 'APMC / ADA', desc: 'Market yard commission billing and mandi-specific accounting.', tag: 'INDUSTRY' },
      { title: 'Petrol Pump', desc: 'Nozzle-wise meter readings and automated evaporation loss.', tag: 'INDUSTRY' },
      { title: 'Jewellery Module', desc: 'HUID tracking, gold/silver billing, and making charges.', tag: 'INDUSTRY' },
      { title: 'Dairy Integration', desc: 'Milk collection sync via API for farmer ledger management.', tag: 'INDUSTRY' },
    ],
    'Billing & Invoice': [
      { title: 'Smart Invoice Format', desc: 'Clean, professional layouts for all your sales documents.', tag: 'BILLING' },
      { title: 'Dynamic QR Code', desc: 'QR codes for instant digital payments on invoices.', tag: 'BILLING' },
      { title: 'Barcode / QR Module', desc: 'High-speed scanning and generation for inventory tracking.', tag: 'UTILITY' },
      { title: 'Transport LR Module', desc: 'Update transport details and print Lorry Receipts.', tag: 'BILLING' },
    ],
    // Add more categories as needed based on DOCUMENT_30
  };

  return (
    <div className="min-h-screen bg-[#fbf9f8] font-['Manrope'] text-[#1a1c1e]">
      {/* Hero Section */}
      <header className="bg-[#003366] py-20 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Tally Customization & Integration Categories</h1>
        <p className="max-w-2xl mx-auto text-blue-100 text-lg opacity-90">
          Unlock the full potential of your business management software. We build bespoke solutions 
          around your unique business logic.
        </p>
        <button className="mt-10 bg-white text-[#003366] px-8 py-3 rounded-lg font-bold flex items-center gap-2 mx-auto hover:bg-blue-50 transition-colors">
          Explore Categories <ChevronRight className="w-5 h-5" />
        </button>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-6 lg:flex gap-12">
        {/* Sidebar Navigation */}
        <aside className="lg:w-64 flex-shrink-0 mb-12 lg:mb-0">
          <div className="sticky top-8 bg-white rounded-xl shadow-sm border border-[#dcd9d9] overflow-hidden">
            <div className="p-4 border-b border-[#dcd9d9] bg-[#f6f3f2]">
              <h3 className="font-bold text-sm uppercase tracking-wider text-[#44474e]">Module Groups</h3>
            </div>
            <nav className="p-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                    activeCategory === cat.id 
                      ? 'bg-[#003366] text-white shadow-md' 
                      : 'text-[#44474e] hover:bg-[#f6f3f2]'
                  }`}
                >
                  {cat.icon}
                  <span className="text-sm font-medium">{cat.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content Grid */}
        <section className="flex-grow">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#003366] p-3 rounded-lg text-white">
              {categories.find(c => c.id === activeCategory)?.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#003366]">{activeCategory}</h2>
              <p className="text-[#44474e] mt-1">Tailored frameworks designed for niche market requirements.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {(modules[activeCategory] || []).map((item, idx) => (
              <div 
                key={idx}
                className="group bg-white p-6 rounded-xl border border-[#dcd9d9] hover:border-[#003366] hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold tracking-widest bg-[#f6f3f2] text-[#44474e] px-2 py-1 rounded uppercase">
                    {item.tag}
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#dcd9d9] group-hover:text-[#003366] transition-colors" />
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-[#003366] transition-colors">{item.title}</h4>
                <p className="text-sm text-[#44474e] leading-relaxed">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#003366] group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {(!modules[activeCategory] || modules[activeCategory].length === 0) && (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-[#dcd9d9]">
              <Settings className="w-12 h-12 text-[#dcd9d9] mx-auto mb-4" />
              <p className="text-[#44474e]">More modules for {activeCategory} coming soon.</p>
            </div>
          )}
        </section>
      </main>

      {/* Footer CTA */}
      <section className="bg-[#001d35] py-20 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Have a specific Tally requirement?</h2>
        <p className="text-blue-100 opacity-80 mb-10">Let's discuss a custom solution built specifically for your business logic.</p>
        <button className="bg-[#003366] border border-white/20 hover:bg-blue-700 px-10 py-4 rounded-lg font-bold transition-all transform hover:scale-105">
          Start My Custom Project
        </button>
      </section>
    </div>
  );
};

export default TallyModuleLibrary;