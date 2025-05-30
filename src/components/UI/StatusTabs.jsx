import React from 'react';

export default function StatusTabs({ status, setStatus }) {
  return (
    <div className='bg-status'>
      <div className="status-tabs bg-transparent d-flex align-items-center mb-2">
        <button
          className={`tab-btn flex-fill rounded-2 ${status === 'SEMUA' ? 'active shadow' : ''}`}
          onClick={() => setStatus('SEMUA')}
          type="button"
        >
          Semua
        </button>
        <button
          className={`tab-btn flex-fill rounded-2 ${status === 'AKTIF' ? 'active shadow' : ''}`}
          onClick={() => setStatus('AKTIF')}
          type="button"
        >
          Aktif
        </button>
        <button
          className={`tab-btn flex-fill rounded-2 ${status === 'NON-AKTIF' ? 'active shadow' : ''}`}
          onClick={() => setStatus('NON-AKTIF')}
          type="button"
        >
          Non-Aktif
        </button>
      </div>
    </div>
  );
}