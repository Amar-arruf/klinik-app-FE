import React, { useState } from 'react';

const tipeList = [
  { label: 'Manager', value: 'manager', group: 'left' },
  { label: 'Admin', value: 'admin', group: 'left' },
  { label: 'Resepsionis', value: 'resepsionis', group: 'left' },
  { label: 'Manajemen', value: 'manajemen', group: 'left' },
  { label: 'Finance', value: 'finance', group: 'left' },
  { label: 'Kasir', value: 'kasir', group: 'left' },
  { label: 'Purchasing', value: 'purchasing', group: 'left' },
  { label: 'Perawat', value: 'perawat', group: 'right' },
  { label: 'Bidan', value: 'bidan', group: 'right' },
  { label: 'Dokter', value: 'dokter', group: 'right' },
  { label: 'Lainnya', value: 'lainnya', group: 'right' },
];

export default function EmployeeForm({ initial = {},}) {
  const [form, setForm] = useState({
    nama: initial.nama || '',
    nik: initial.nik || '',
    gender: initial.gender || '',
    tempatLahir: initial.tempatLahir || '',
    tanggalLahir: initial.tanggalLahir || '',
    telepon: initial.telepon || '',
    provinsi: initial.provinsi || '',
    kota: initial.kota || '',
    kecamatan: initial.kecamatan || '',
    kelurahan: initial.kelurahan || '',
    alamat: initial.alamat || '',
    username: initial.username || '',
    email: initial.email || '',
    password: '',
    tipe: initial.tipe || [],
    tipeRadio: initial.tipeRadio || '',
    tipeLainnya: initial.tipeLainnya || '',
    mulaiKontrak: initial.mulaiKontrak || '',
    selesaiKontrak: initial.selesaiKontrak || '',
    statusMenikah: initial.statusMenikah || '',
    kodeBpjs: initial.kodeBpjs || '',
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm(f => ({
        ...f,
        tipe: checked
          ? [...f.tipe, value]
          : f.tipe.filter(v => v !== value),
      }));
    } else if (name === 'tipeRadio') {
      setForm(f => ({
        ...f,
        tipeRadio: value,
        tipeLainnya: value === 'lainnya' ? f.tipeLainnya : '',
      }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };


  const handleSubmit = e => {
    e.preventDefault();
    // Validasi form jika diperlukan
    // Simpan data karyawan
  };

  return (
    <form onSubmit={handleSubmit}>
      <h5 className="fw-bold mb-4">FORM TAMBAH KARYAWAN</h5>
      <div className="row">
        {/* Kiri */}
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label fw-semibold">Nama Lengkap *</label>
            <input type="text" className="form-control" name="nama" value={form.nama} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">No. Kartu Identitas <span className="text-muted small">(Nomor induk Kependudukan)</span></label>
            <input type="text" className="form-control" name="nik" value={form.nik} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Jenis Kelamin</label>
            <div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" value="Laki-laki" checked={form.gender === 'Laki-laki'} onChange={handleChange} />
                <label className="form-check-label">Laki-laki</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" value="Perempuan" checked={form.gender === 'Perempuan'} onChange={handleChange} />
                <label className="form-check-label">Perempuan</label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Tempat Lahir</label>
            <input type="text" className="form-control" name="tempatLahir" value={form.tempatLahir} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Tanggal Lahir</label>
            <input type="date" className="form-control" name="tanggalLahir" value={form.tanggalLahir} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">No. Telepon</label>
            <input type="text" className="form-control" name="telepon" value={form.telepon} onChange={handleChange} />
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <label className="form-label fw-semibold">Provinsi</label>
              <select className="form-select" name="provinsi" value={form.provinsi} onChange={handleChange}>
                <option value="">Pilih Provinsi</option>
                {/* Tambahkan opsi provinsi */}
              </select>
            </div>
            <div className="col-6">
              <label className="form-label fw-semibold">Kota / Kabupaten</label>
              <select className="form-select" name="kota" value={form.kota} onChange={handleChange}>
                <option value="">Pilih Kota/Kabupaten</option>
                {/* Tambahkan opsi kota */}
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <label className="form-label fw-semibold">Kecamatan</label>
              <select className="form-select" name="kecamatan" value={form.kecamatan} onChange={handleChange}>
                <option value="">Pilih Kecamatan</option>
                {/* Tambahkan opsi kecamatan */}
              </select>
            </div>
            <div className="col-6">
              <label className="form-label fw-semibold">Kelurahan</label>
              <select className="form-select" name="kelurahan" value={form.kelurahan} onChange={handleChange}>
                <option value="">Pilih Kelurahan</option>
                {/* Tambahkan opsi kelurahan */}
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Detil Alamat</label>
            <textarea className="form-control" name="alamat" value={form.alamat} onChange={handleChange} rows={2} />
          </div>
        </div>
        {/* Kanan */}
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label fw-semibold">Username *</label>
            <input type="text" className="form-control" name="username" value={form.username} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password *</label>
            <input type="password" className="form-control" name="password" value={form.password} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Tipe *</label>
            <div className="row">
              <div className="col-6">
                {tipeList.filter(t => t.group === 'left').map(t => (
                  <div className="form-check" key={t.value}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="tipe"
                      value={t.value}
                      checked={form.tipe.includes(t.value)}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">{t.label}</label>
                  </div>
                ))}
              </div>
              <div className="col-6">
                {tipeList.filter(t => t.group === 'right' && t.value !== 'lainnya').map(t => (
                  <div className="form-check" key={t.value}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tipeRadio"
                      value={t.value}
                      checked={form.tipeRadio === t.value}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">{t.label}</label>
                  </div>
                ))}
                {/* Lainnya */}
                <div className="form-check d-flex align-items-center">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="tipeRadio"
                    value="lainnya"
                    checked={form.tipeRadio === 'lainnya'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label me-2">Lainnya</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Lainnya"
                    name="tipeLainnya"
                    value={form.tipeLainnya}
                    onChange={handleChange}
                    disabled={form.tipeRadio !== 'lainnya'}
                    style={{ maxWidth: 120 }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-6">
              <label className="form-label fw-semibold">Tanggal Mulai Kontrak</label>
              <input type="date" className="form-control" name="mulaiKontrak" value={form.mulaiKontrak} onChange={handleChange} />
            </div>
            <div className="col-6">
              <label className="form-label fw-semibold">Tanggal Selesai Kontrak</label>
              <input type="date" className="form-control" name="selesaiKontrak" value={form.selesaiKontrak} onChange={handleChange} />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Status Menikah</label>
            <select className="form-select" name="statusMenikah" value={form.statusMenikah} onChange={handleChange}>
              <option value="">Pilih Status</option>
              <option value="Menikah">Menikah</option>
              <option value="Belum Menikah">Belum Menikah</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Kode Dokter BPJS</label>
            <select className="form-select" name="kodeBpjs" value={form.kodeBpjs} onChange={handleChange}>
              <option value="">Pilih Kode Dokter</option>
              {/* Tambahkan opsi kode dokter */}
            </select>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-4">
        <button type="submit" className="btn btn-primary px-4">Simpan</button>
      </div>
    </form>
  );
}