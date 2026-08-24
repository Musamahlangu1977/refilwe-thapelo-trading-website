import React, { useState, useEffect } from 'react';
import { establishedBusinesses, developmentProjects, companyContact } from '../data/companyData';
import { X, Send, Phone, Mail, CheckCircle, ShieldCheck } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  preselectedEntity?: string;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  preselectedEntity = '',
  onClose,
}) => {
  const [selectedEntity, setSelectedEntity] = useState(preselectedEntity || 'General Inquiry');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedEntity) {
      setSelectedEntity(preselectedEntity);
    }
  }, [preselectedEntity]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                Direct Inquiry & Quotes
              </span>
              <h2 className="text-2xl font-extrabold text-stone-900 tracking-tight mt-2">
                Connect With Our Team
              </h2>
              <p className="text-stone-600 text-xs mt-1">
                Refilwe Thapelo Trading & Projects — "We never miss it."
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Select Service or Division */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Business Division / Project
                </label>
                <select
                  value={selectedEntity}
                  onChange={(e) => setSelectedEntity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 text-sm font-medium focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                >
                  <option value="General Inquiry">General Group Inquiry</option>
                  <optgroup label="Established Businesses">
                    {establishedBusinesses.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name} ({b.subtitle})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Projects & Development">
                    {developmentProjects.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.subtitle})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Your Name / Company *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lerato Mokoena"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="072 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Inquiry / Quote Requirement
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us how we can assist you (e.g. Transport quote, Fridge rental contract, Meat Ranch order)..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-[#0f382c] hover:bg-emerald-900 text-white font-extrabold text-sm shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>Submit Direct Inquiry</span>
              </button>

              <div className="text-[11px] text-stone-500 text-center flex items-center justify-center space-x-1 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direct response from Director General Mr Refilwe Xhali</span>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation View */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-emerald-700" />
            </div>

            <h3 className="text-2xl font-extrabold text-stone-900">
              Inquiry Received!
            </h3>

            <p className="text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-stone-900">{name}</span>. Your inquiry regarding <span className="font-bold text-emerald-800">{selectedEntity}</span> has been routed to our executive team.
            </p>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs text-stone-700 space-y-1.5 text-left">
              <div className="font-bold text-stone-900">Direct Contact Details:</div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span>{companyContact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-emerald-700" />
                <span>{companyContact.email}</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="px-6 py-2.5 rounded-xl bg-emerald-900 text-white text-xs font-bold hover:bg-emerald-800 transition"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
