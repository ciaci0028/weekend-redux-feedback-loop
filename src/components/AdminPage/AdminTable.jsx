import axios from 'axios';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

function AdminTable ({feedback, fetchAdminList}) {

    const deleteFeedback = (event) => {
        console.log('feedback id', event.id)
        axios.delete(`/feedback/admin/${event.id}`)
            .then(res => {
                console.log('/delete success', res);
                fetchAdminList();
            })
            .catch(err => {
                console.log('/delete error', err);
            })
    }

    return (
        <TableRow
            key={feedback.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell align="right">{feedback.feeling}</TableCell>
            <TableCell align="right">{feedback.understanding}</TableCell>
            <TableCell align="right">{feedback.support}</TableCell>
            <TableCell>{feedback.comments}</TableCell>
            <TableCell><Button variant="contained" onClick={event => deleteFeedback(feedback)}>Delete</Button></TableCell>
            <TableCell><Button variant="contained">Flag</Button></TableCell>
        </TableRow>
    )
};

export default AdminTable;