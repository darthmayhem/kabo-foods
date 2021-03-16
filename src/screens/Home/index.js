import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';

import { getUsersSaga } from '../../actions';
import styles from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.usersReducer.users);

  useEffect(() => {
    dispatch(getUsersSaga());
  }, [dispatch]);

  const handleBtnOnClick = () => {
    dispatch(getUsersSaga());
  };

  return (
    <>
      <div style={styles.container}>
        {users && users.length > 0
            && (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>E-mail</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Website</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map(({
                  id,
                  name,
                  email,
                  phone,
                  username,
                  website
                }, i) => (
                  <TableRow key={i}>
                    <TableCell>{id}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{username}</TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell>{phone}</TableCell>
                    <TableCell>{website}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            )
            }
        <br />
        <Button
          variant="outlined"
          onClick={handleBtnOnClick}
        >
          Load Users
        </Button>
      </div>
    </>
  );
};

Home.propTypes = {};

export default Home;
