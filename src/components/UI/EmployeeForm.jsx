import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import api from '../../utils/api';

// Perbaikan schema Yup (sesuaikan dengan nama field di useForm)
const schema = yup.object().shape({
  nama_lengkap: yup.string().required('Nama wajib diisi'),
  username: yup.string().required('Username wajib diisi'),
  password: yup.string().required('Password wajib diisi'),
  // Tambahkan validasi lain sesuai kebutuhan
});

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

export default function EmployeeForm({ initial = {}, onSuccess, isEditMode = false }) {
  // Setup form awal
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      nama_lengkap: '',
      no_kartu_identitas: '',
      jenis_kelamin: '',
      tempat_lahir: '',
      tanggal_lahir: '',
      no_telepon: '',
      provinsi: '',
      kota: '',
      kecamatan: '',
      kelurahan: '',
      alamat: '',
      username: '',
      email: '',
      password: '',
      tipe: [],
      tipeRadio: '',
      tipeLainnya: '',
      tgl_mulai_kontrak: '',
      tgl_selesai_kontrak: '',
      status_menikah: '',
      kode_dokter_bpjs: '',
    },
    resolver: yupResolver(schema),
  });

  // Effect untuk mengupdate form ketika initial berubah
  useEffect(() => {
    if (initial && Object.keys(initial).length > 0) {
      // Reset form dengan nilai initial baru
      reset({
        nama_lengkap: initial.nama_lengkap || '',
        no_kartu_identitas: initial.no_kartu_identitas || '',
        jenis_kelamin: initial.jenis_kelamin || '',
        tempat_lahir: initial.tempat_lahir || '',
        tanggal_lahir: initial.tanggal_lahir || '',
        no_telepon: initial.no_telepon || '',
        provinsi: initial.provinsi || '',
        kota: initial.kota || '',
        kecamatan: initial.kecamatan || '',
        kelurahan: initial.kelurahan || '',
        alamat: initial.alamat || '',
        username: initial.User?.username || '',
        email: initial.User?.email || '',
        password: isEditMode ? '' : '', // Password kosong saat edit
        tipe: initial.User?.tipe || [],
        tipeRadio: initial.tipeRadio || '',
        tipeLainnya: initial.tipeLainnya || '',
        tgl_mulai_kontrak: initial.User?.tgl_mulai_kontrak || '',
        tgl_selesai_kontrak: initial.User?.tgl_selesai_kontrak || '',
        status_menikah: initial.User?.status_menikah || '',
        kode_dokter_bpjs: initial.User?.kode_dokter_bpjs || '',
      });
    } else {
      // Reset form ke nilai default jika tidak ada initial data
      reset({
        nama_lengkap: '',
        no_kartu_identitas: '',
        jenis_kelamin: '',
        // ...sisanya kosong
      });
    }
  }, [initial, reset, isEditMode]);
  const tipeRadio = watch('tipeRadio');
  const tipe = watch('tipe');

  const onSubmit = async (data) => {
    // Gabungkan tipe dari checkbox dan radio menjadi    
    let tipeFinal = Array.isArray(data.tipe) ? data.tipe.join(',') : '';
    if (data.tipeRadio) {
      const radioValue = data.tipeRadio === 'lainnya' ? data.tipeLainnya : data.tipeRadio;
      tipeFinal = tipeFinal ? `${tipeFinal},${radioValue}` : radioValue;
    }
    const payload = { ...data, tipe: tipeFinal };
    try {
      if (isEditMode) {
          await api.put(`/users/${initial.id}`, payload);
          window.alert('Data berhasil diupdate');
          reset(); // Reset form setelah update
          window.location.reload(); // Reload halaman untuk melihat perubahan
          return ;
      } 

    } catch (err) {
      alert(err.response?.data?.message || 'Gagal menyimpan data');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h5 className="fw-bold mb-4">{isEditMode ? 'FORM EDIT KARYAWAN' : 'FORM TAMBAH KARYAWAN'}</h5>
      <div className="row">
        {/* Kiri */}
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label fw-semibold">Nama Lengkap *</label>
            <input {...register('nama_lengkap')} type="text" className={`form-control ${errors.nama_lengkap ? 'is-invalid' : ''}`} />
            {errors.nama_lengkap && <div className="invalid-feedback">{errors.nama_lengkap.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">No. Kartu Identitas <span className="text-muted small">(Nomor induk Kependudukan)</span></label>
            <input {...register('no_kartu_identitas')} type="text" className={`form-control ${errors.no_kartu_identitas ? 'is-invalid' : ''}`} />
            {errors.no_kartu_identitas && <div className="invalid-feedback">{errors.no_kartu_identitas.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Jenis Kelamin</label>
            <div>
              <div className="form-check form-check-inline">
                <input {...register('jenis_kelamin')} type="radio" className="form-check-input" value="Laki-laki" />
                <label className="form-check-label">Laki-laki</label>
              </div>
              <div className="form-check form-check-inline">
                <input {...register('jenis_kelamin')} type="radio" className="form-check-input" value="Perempuan" />
                <label className="form-check-label">Perempuan</label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Tempat Lahir</label>
            <input {...register('tempat_lahir')} type="text" className={`form-control ${errors.tempat_lahir ? 'is-invalid' : ''}`} />
            {errors.tempat_lahir && <div className="invalid-feedback">{errors.tempat_lahir.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Tanggal Lahir</label>
            <input {...register('tanggal_lahir')} type="date" className={`form-control ${errors.tanggal_lahir ? 'is-invalid' : ''}`} />
            {errors.tanggal_lahir && <div className="invalid-feedback">{errors.tanggal_lahir.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">No. Telepon</label>
            <input {...register('no_telepon')} type="text" className={`form-control ${errors.no_telepon ? 'is-invalid' : ''}`} />
            {errors.no_telepon && <div className="invalid-feedback">{errors.no_telepon.message}</div>}
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <label className="form-label fw-semibold">Provinsi</label>
              <select {...register('provinsi')} className={`form-select ${errors.provinsi ? 'is-invalid' : ''}`}>
                <option value="">Pilih Provinsi</option>
                {/* Tambahkan opsi provinsi */}
              </select>
            </div>
            <div className="col-6">
              <label className="form-label fw-semibold">Kota / Kabupaten</label>
              <select {...register('kota')} className={`form-select ${errors.kota ? 'is-invalid' : ''}`}>
                <option value="">Pilih Kota/Kabupaten</option>
                {/* Tambahkan opsi kota */}
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <label className="form-label fw-semibold">Kecamatan</label>
              <select {...register('kecamatan')} className={`form-select ${errors.kecamatan ? 'is-invalid' : ''}`}>
                <option value="">Pilih Kecamatan</option>
                {/* Tambahkan opsi kecamatan */}
              </select>
            </div>
            <div className="col-6">
              <label className="form-label fw-semibold">Kelurahan</label>
              <select {...register('kelurahan')} className={`form-select ${errors.kelurahan ? 'is-invalid' : ''}`}>
                <option value="">Pilih Kelurahan</option>
                {/* Tambahkan opsi kelurahan */}
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Detil Alamat</label>
            <textarea {...register('alamat')} className={`form-control ${errors.alamat ? 'is-invalid' : ''}`} rows={2} />
            {errors.alamat && <div className="invalid-feedback">{errors.alamat.message}</div>}
          </div>
        </div>
        {/* Kanan */}
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label fw-semibold">Username *</label>
            <input {...register('username')} type="text" className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
            {errors.username && <div className="invalid-feedback">{errors.username.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input {...register('email')} type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password *</label>
            <input {...register('password')} type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Tipe *</label>
            <div className="row">
              <div className="col-6">
                {tipeList.filter(t => t.group === 'left').map(t => (
                  <div className="form-check" key={t.value}>
                    <input
                      {...register('tipe')}
                      type="checkbox"
                      value={t.value}
                      className="form-check-input"
                    />
                    <label className="form-check-label">{t.label}</label>
                  </div>
                ))}
              </div>
              <div className="col-6">
                {tipeList.filter(t => t.group === 'right' && t.value !== 'lainnya').map(t => (
                  <div className="form-check" key={t.value}>
                    <input
                      {...register('tipeRadio')}
                      type="radio"
                      value={t.value}
                      className="form-check-input"
                    />
                    <label className="form-check-label">{t.label}</label>
                  </div>
                ))}
                {/* Lainnya */}
                <div className="form-check d-flex align-items-center">
                  <input
                    {...register('tipeRadio')}
                    type="radio"
                    value="lainnya"
                    className="form-check-input"
                  />
                  <label className="form-check-label me-2">Lainnya</label>
                  <input
                    {...register('tipeLainnya')}
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Lainnya"
                    disabled={tipeRadio !== 'lainnya'}
                    style={{ maxWidth: 120 }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-6">
              <label className="form-label fw-semibold">Tanggal Mulai Kontrak</label>
              <input {...register('tgl_mulai_kontrak')} type="date" className={`form-control ${errors.tgl_mulai_kontrak ? 'is-invalid' : ''}`} />
            </div>
            <div className="col-6">
              <label className="form-label fw-semibold">Tanggal Selesai Kontrak</label>
              <input {...register('tgl_selesai_kontrak')} type="date" className={`form-control ${errors.tgl_selesai_kontrak ? 'is-invalid' : ''}`} />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Status Menikah</label>
            <select {...register('status_menikah')} className={`form-select ${errors.status_menikah ? 'is-invalid' : ''}`}>
              <option value="">Pilih Status</option>
              <option value="Menikah">Menikah</option>
              <option value="Belum Menikah">Belum Menikah</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Kode Dokter BPJS</label>
            <select {...register('kode_dokter_bpjs')} className={`form-select ${errors.kode_dokter_bpjs ? 'is-invalid' : ''}`}>
              <option value="">Pilih Kode Dokter</option>
              {/* Tambahkan opsi kode dokter */}
            </select>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-4">
        <button type="submit" className="btn btn-primary px-4" disabled={isSubmitting}>
          {isSubmitting ? 'Menyimpan...' : 'Simpan'}
        </button>
      </div>
    </form>
  );
}