import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AdminPage () {
    const dispatch = useDispatch();

    const adminList = useSelector(store => store.adminList);

    useEffect(() => {
        fetchAdminList();
    }, []);

    const fetchAdminList = () => {
        axios.get('/admin')
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
            </div>
        </>
    )
};

export default AdminPage;