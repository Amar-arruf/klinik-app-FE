
# Klinik App
## Overview
Klinik App adalah aplikasi manajemen klinik yang memungkinkan pengelolaan karyawan, pasien, jadwal dokter, dan pelayanan medis. Aplikasi ini terdiri dari frontend dan backend yang terpisah untuk memastikan skalabilitas dan pemeliharaan yang lebih baik.

## Tech Stack
### Frontend

- **React**: Library JavaScript untuk membangun antarmuka pengguna
- **React Router**: Untuk navigasi di sisi klien
- **Bootstrap 5**: Framework CSS untuk desain responsif
- **React Hook Form**: Untuk manajemen dan validasi form
- **Yup**: Untuk validasi skema data
- **Axios**: Untuk melakukan HTTP requests ke backend
- **Bootstrap Icons**: Untuk ikon UI

## setup

- copy dulu `.env.example` ke `.env.example`
```
cp .env.example.com 
```
- sesuaikan url `apinya`
```
VITE_API_BASE_URL='http://localhost:3000/api'
```
- kemudian jalankan command `npm install`

- tunggu selesai dulu