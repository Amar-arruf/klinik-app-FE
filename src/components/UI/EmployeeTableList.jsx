
export default function EmployeeTableList({ data }) {
  return (
    <div className="employee-table-list">
      {/* Desktop Table */}
      <div className="d-none d-md-block">
        <table className="table align-middle mb-0">
          <thead>
            <tr>
              <th style={{ width: 40 }}>#</th>
              <th>Nama</th>
              <th>Role</th>
              <th>Status</th>
              <th style={{ width: 60 }}></th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, idx) => (
              <tr key={d.id}>
                <td>{idx + 1}</td>
                <td className="fw-bold">{d.name}</td>
                <td>{d.role}</td>
                <td>
                  <span className="badge bg-success">{d.status}</span>
                </td>
                <td>
                  <button className="btn btn-primary rounded-circle ms-2 me-3">
                    <i className="bi bi-arrow-right text-light"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile Card List */}
      <div className="d-block d-md-none">
        <div className="bg-light rounded-top px-3 py-2 border-bottom fw-semibold small text-secondary">
          # Karyawan / Tenaga Kesehatan
        </div>
        {data.map((d, idx) => (
          <div className="employee-card m-0  rounded shadow-sm bg-white d-flex align-items-center" key={d.id}>
            <div className=''>
                 <div className="fw-bold  p-3 text-secondary ">{idx + 1}</div>
            </div>
            <div className="border-start border-end flex-grow-1 m-0">
                <div className="p-3">
                    <div className="fw-bold">{d.name}</div>
                    <div className="text-muted small">{d.role}</div>
                    <span className="badge bg-success mt-1">{d.status}</span>
                </div>
            </div>
            <button className="btn btn-primary rounded-circle ms-2 me-3">
              <i className="bi bi-arrow-right text-light"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}