import React from 'react';
import TopBar from '../components/UI/TopBar';
import Sidebar from '../components/UI/Sidebar';


export default function MainLayout({ children }) {
  return (
    <div className="container-fluid p-0">
        <TopBar />
        <div className="d-flex">
            <Sidebar />
            <main className="main-content flex-grow-1 p-4">
            {children}
            </main>
      </div>
    </div>
  );
}