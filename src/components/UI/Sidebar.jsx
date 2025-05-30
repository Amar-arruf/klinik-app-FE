import React from 'react';

const menu = [
  { icon: 'speedometer2', label: 'Dashboard' },
  { icon: 'person', label: 'Pasien' },
  { icon: 'calendar-check', label: 'Kunjungan' },
  { icon: 'heart-pulse', label: 'Pelayanan' },
  { icon: 'cash-stack', label: 'Kasir' },
  { icon: 'capsule', label: 'Farmasi' },
  { icon: 'box-seam', label: 'Inventori' },
  { icon: 'cart', label: 'Purchasing' },
];

export default function Sidebar() {
return (
    <div className="d-flex flex-column flex-shrink-0 bg-light shadow" style={{width:100, minHeight: '100vh'}}>
        <ul className="nav nav-pills flex-column mb-auto align-items-center">
            {menu.map((item, idx) => (
                <li className="nav-item p-0" key={item.label}>
                    <button href="#" className={`nav-link link-dark d-flex flex-column align-items-center`}>
                            <i className={`bi bi-${item.icon} mb-2`} style={{fontSize: '1.25rem'}}></i>
                            <span style={{fontSize: '0.725rem'}}>{item.label}</span>
                    </button>
                    <hr className="w-100 my-1" />
                </li>
            ))}
        </ul>
        <hr />
    </div>
);
}