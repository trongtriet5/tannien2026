'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Users, X, FileText } from 'lucide-react';

export default function ParticipantsModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('participants'); // tab state

    // Ngăn scroll khi mở modal
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Open Button */}
            <div className="flex justify-center mt-8 mb-16">
                <button
                    onClick={() => setIsOpen(true)}
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-medium tracking-wide text-white transition-all duration-500 ease-out bg-[#8b0000] rounded-full hover:bg-red-800 hover:shadow-[0_0_20px_rgba(139,0,0,0.4)] hover:-translate-y-1 overflow-hidden border border-white/20"
                >
                    <span className="relative flex items-center gap-3 text-sm sm:text-base uppercase tracking-widest font-bold">
                        <Users className="w-5 h-5" />
                        Danh sách tham gia
                    </span>
                </button>
            </div>

            {isOpen &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    >
                        {/* Modal */}
                        <div
                            className="relative w-full max-w-6xl h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-5 border-b bg-stone-50">
                                <h3 className="text-lg sm:text-xl font-black text-stone-800 uppercase tracking-widest flex items-center gap-3">
                                    <div className="p-2 bg-[#8b0000]/10 rounded-full">
                                        <Users className="w-5 h-5 text-[#8b0000]" />
                                    </div>
                                    {activeTab === 'participants'
                                        ? 'Danh sách tham gia'
                                        : 'Danh sách xe'}
                                </h3>

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-stone-400 hover:bg-red-50 hover:text-[#8b0000] rounded-full"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Tabs (Sheet style) */}
                            <div className="flex border-b bg-white">
                                <button
                                    onClick={() => setActiveTab('participants')}
                                    className={`px-6 py-3 font-semibold text-sm transition ${activeTab === 'participants'
                                        ? 'border-b-2 border-[#8b0000] text-[#8b0000]'
                                        : 'text-stone-500 hover:text-stone-700'
                                        }`}
                                >
                                    <FileText className="inline w-4 h-4 mr-2" />
                                    Danh sách tham gia
                                </button>

                                <button
                                    onClick={() => setActiveTab('vehicles')}
                                    className={`px-6 py-3 font-semibold text-sm transition ${activeTab === 'vehicles'
                                        ? 'border-b-2 border-[#8b0000] text-[#8b0000]'
                                        : 'text-stone-500 hover:text-stone-700'
                                        }`}
                                >
                                    <FileText className="inline w-4 h-4 mr-2" />
                                    Danh sách xe
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 relative bg-stone-100 overflow-hidden">

                                {/* Loading background */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
                                    <div className="w-10 h-10 border-4 border-stone-200 border-t-[#8b0000] rounded-full animate-spin mb-4" />
                                    <p className="text-stone-500 font-medium">
                                        Đang tải danh sách...
                                    </p>
                                </div>

                                {/* Conditional Render iframe */}
                                {activeTab === 'participants' && (
                                    <iframe
                                        src="/danh_sach_chia_doi.pdf#toolbar=0"
                                        className="w-full h-full absolute inset-0 z-10"
                                        title="Danh sách tham gia"
                                        loading="lazy"
                                    />
                                )}

                                {activeTab === 'vehicles' && (
                                    <iframe
                                        src="/danh_sach_xe.pdf#toolbar=0"
                                        className="w-full h-full absolute inset-0 z-10"
                                        title="Danh sách xe"
                                        loading="lazy"
                                    />
                                )}
                            </div>

                            {/* Footer */}
                            <div className="px-6 py-4 border-t bg-stone-50 text-right">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="px-6 py-2.5 text-sm font-bold uppercase text-stone-600 bg-white border rounded-full hover:bg-stone-100"
                                >
                                    Đóng
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}