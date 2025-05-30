import React from 'react';

export default function TopBar() {
return (
     <nav className="navbar navbar-light bg-white shadow-sm px-4 py-2 topbar">
        <div className="d-flex align-items-center w-100 justify-content-between">
            <div className="fw-bold fs-5">Klinik Training</div>
            <span className="me-2 text-center fw-bold">Medeva</span>
            <div className="d-flex align-items-center gap-3">
                    <i className="bi bi-bell"></i>
            <div className='d-flex flex-column' >
                    <p className="text-muted small m-0 text-end fw-bold">
                            kliniktraining 
                    </p>
                    <p className="text-secondary">
                            (Manager, Dokter, Kasir)
                    </p>
            </div>
                
                <img src="https://ui-avatars.com/api/?name=KT" alt="avatar" className="rounded-circle" width={32} height={32} />
            </div>
        </div>
    </nav>
);
}