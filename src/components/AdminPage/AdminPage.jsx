import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    }

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
            <TableRow
              key={feedback.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell align="right">{feedback.feeling}</TableCell>
              <TableCell align="right">{feedback.understanding}</TableCell>
              <TableCell align="right">{feedback.support}</TableCell>
              <TableCell>{feedback.comments}</TableCell>
              <TableCell><button>Delete</button></TableCell>
              <TableCell><button>Flag</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        </>
    )
};

export default AdminPage;

