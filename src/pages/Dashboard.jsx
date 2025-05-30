import React from 'react';
import EmployeeTable from './EmployeeTable';

export default function Dashboard() {
    return (
        <div className="row">
            <div className="col-12">
                <EmployeeTable />
            </div>
        </div>
    )
}