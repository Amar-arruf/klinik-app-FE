import React from 'react';
import EmployeeTable from './EmployeeTable';
import EmployeeForm from '../components/UI/EmployeeForm';

export default function Dashboard() {
    return (
        <div className="row">
            <div className="col-md-4 ">
                <EmployeeTable />
            </div>
            <div className="col-md-8">
                <div className="card shadow p-4">
                    <div className="card-body">
                        <EmployeeForm />
                    </div>
                </div>
            </div>
        </div>
    )
}