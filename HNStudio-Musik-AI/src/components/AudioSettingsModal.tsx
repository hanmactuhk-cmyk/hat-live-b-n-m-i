import React from 'react';

export interface AudioSettingsModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  [key: string]: any;
}

export const AudioSettingsModal: React.FC<AudioSettingsModalProps> = ({ isOpen = false, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-[#121824] border border-[#25334e] rounded-xl p-6 max-w-lg w-full text-white shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-[#00f0ff]">Cài Đặt Thiết Bị Âm Thanh (Audio I/O)</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">✕</button>
        </div>
        <p className="text-sm text-gray-300 mb-4">Quản lý và chọn thiết bị đầu vào (Microphone) và đầu ra (Loa/Tai nghe).</p>
        <div className="flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40 rounded-lg text-sm font-semibold hover:bg-[#00f0ff]/30">
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioSettingsModal;
