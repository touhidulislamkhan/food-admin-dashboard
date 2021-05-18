import React from 'react'
import DishForm from '../Dishes/DishForm'
import DishTable from '../Dishes/DishTable'

const AdminPage = () => {
    return (
        <div>
            <h1 className='mt-3 mb-3' style={{ 'textAlign': 'center' }}>Dashboard</h1>

            {/* Table */}
            <DishTable />

            {/* Form */}
            <DishForm />
        </div>
    )
}

export default AdminPage
