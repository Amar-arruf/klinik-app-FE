import React, { useState, useEffect} from 'react';
import EmployeeTable from './EmployeeTable';
import EmployeeForm from '../components/UI/EmployeeForm';

import { getUserById, getUsers } from '../utils/api';
import { set } from 'react-hook-form';

export default function Dashboard() {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch employees data when component mounts
    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            setIsLoading(true);
            const { data: users } = await getUsers();
            const formattedUsers = users.map(user => ({
                id: user.id,
                name: user.nama_lengkap,
                nama_lengkap: user.nama_lengkap,
                username: user.username,
                email: user.email,
                role: user.User?.tipe?.toLowerCase() === 'perawat' ? 'Perawat' : 'Lainnya',
                status: user.User?.status_menikah?.toLowerCase() === 'menikah' ? 'AKTIF' : 'TIDAK AKTIF',
                // Tambahkan field lain sesuai kebutuhan
            }));
            setEmployees(formattedUsers);
        } catch (error) {
            console.error('Error fetching employees:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEditEmployee = async (employee) => {
        const getEmployee =  await getUserById(employee.id);

        if (getEmployee) {
            setSelectedEmployee(getEmployee.data);
        } else {
            setSelectedEmployee(employee);
        }
        
    };

    const handleFormSuccess = () => {
        setSelectedEmployee(null); // Reset form
        fetchEmployees(); // Refresh data
    };



    return (
        <div className="row">
            <div className="col-md-4 ">
              <EmployeeTable 
                    employees={employees} 
                    isLoading={isLoading}
                    onEditEmployee={handleEditEmployee} 
                    selectedEmployeeId={selectedEmployee?.id}
                />
            </div>
            <div className="col-md-8">
                <div className="card shadow p-4">
                    <div className="card-body">
                        <EmployeeForm 
                            initial={selectedEmployee} 
                            onSuccess={handleFormSuccess}
                            isEditMode={!!selectedEmployee}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}