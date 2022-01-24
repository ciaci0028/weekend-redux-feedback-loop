import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import AdminTable from './AdminTable'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';



function AdminPage () {
    const dispatch = useDispatch();

    const adminList = useSelector(store => store.adminList);

    useEffect(() => {
        fetchAdminList();
    }, []);

    const fetchAdminList = () => {
        axios.get('/feedback/admin')
            .then(res => {
                console.log('get /admin success', res.data);

                dispatch({
                    type: 'SET_ADMIN_LIST',
                    payload: res.data
                })
            })
            .catch(err => {
                console.log('get /admin failure', err);
            })
    };



    return (
        <>
            <div className="container">
                <h1>Admin Page</h1>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Feeling Input:</TableCell>
                            <TableCell>Understanding Input:</TableCell>
                            <TableCell>Support Input:</TableCell>
                            <TableCell>Comment Input:</TableCell>
                            <TableCell>Delete</TableCell>
                            <TableCell>Flag</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {adminList.map((feedback) => (
                            <AdminTable 
                                key={feedback.id} 
                                feedback={feedback}
                                fetchAdminList={fetchAdminList}    
                            />
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
};

export default AdminPage;

