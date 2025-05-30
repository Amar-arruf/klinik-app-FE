import React, { useState } from 'react';
import Card from '../components/UI/Card';
import StatusTabs from '../components/UI/StatusTabs';
import EmployeeTableList from '../components/UI/EmployeeTableList';

const dummyData = [
  { id: 1, name: 'Guntoro Putra Wibowo', role: 'Perawat', status: 'Aktif' },
  { id: 2, name: 'asadsad', role: 'Lainnya', status: 'Aktif' },
  { id: 3, name: 'as@as!1', role: 'Lainnya', status: 'Aktif' },
  { id: 4, name: 'Fifi Cantik', role: 'Perawat', status: 'Aktif' },
  { id: 5, name: 'Kemei Alkaline', role: 'Lainnya', status: 'Aktif' },
];

const roles = ['Semua Karyawan', 'Perawat', 'Lainnya'];

export default function EmployeeTable() {
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('Semua Karyawan');
  const [status, setStatus] = useState('AKTIF');

  const filtered = dummyData.filter(
    (d) =>
        (role === 'Semua Karyawan' || d.role === role) &&
        (status === 'SEMUA' || d.status.toUpperCase() === status) &&
        (d.name.toLowerCase().includes(search.toLowerCase()) || d.role.toLowerCase().includes(search.toLowerCase()) || d.status.toLowerCase().includes(search.toLowerCase()))
    );   
  return (
    <Card>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold mb-0">DATA KARYAWAN & TENAGA KESEHATAN</h5>
          <div className="dropdown">
            <button className="btn btn-light border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-three-dots"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">Tambah Karyawan</a></li>
              <li><a className="dropdown-item" href="#">Salin Data Karyawan</a></li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="w-100">
            <select className="form-select" value={role} onChange={e => setRole(e.target.value)}>
              {roles.map(r => <option key={r}>{r}</option>)}
            </select>
          </div>
          <label className="form-label mt-2 fw-bold">Status</label>
          <div className="d-flex flex-column gap-2">
            <div className="mb-1">
            <StatusTabs status={status} setStatus={setStatus} />
            </div>
            <div className="input-group w-100 mb-5">
              <input
                type="text"
                className="form-control"
                placeholder="Pencarian"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <span className="input-group-text bg-white"><i className="bi bi-search"></i></span>
            </div>
          </div>
        </div>
        <div className="table-responsive" style={{minHeight: 300}}>
           <EmployeeTableList data={filtered} />
        </div>
    </Card>
  );
}