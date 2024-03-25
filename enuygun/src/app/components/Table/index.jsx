import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, incrementRate } from '@/redux/features/users/userSlice';
import { StyledButton, TableWrapper, AvatarContainer } from './styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';


const Tables = () => {
  const dispatch = useDispatch()
  const {users} = useSelector(state => state.users)
  const router = useRouter()
  useEffect(()=> {
    dispatch(getUsers())
  }, [])
return (
  <>
  {users.length <= 0 ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box> ):
    (    <TableWrapper component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell align="right">Full Name</TableCell>
            <TableCell align="right">Job</TableCell>
            <TableCell align="right">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Link 
              href={{
                pathname: "/userDetail",
                query: {
                  name: row.fullName,
                  avatar: row.avatar,
                  job: row.job,
                  rating: row.rating,
                  email: row.eMail,
                  address: row.address
                }
              }}
              >
              <AvatarContainer alt="Remy Sharp" src={row.avatar} />
              </Link>

              </TableCell>
              <TableCell align="right">{row.fullName}</TableCell>
              <TableCell align="right">{row.job}</TableCell>
              <TableCell align="right">
                <Box
                  sx={{
                    '& > legend': { mt: 2 },
                  }}
                >
                  <Typography component="legend">Total Rating: {row.rating}</Typography>
                  <StyledButton aria-label="delete" onClick={() =>  dispatch(incrementRate(row))}>
                    <FavoriteIcon />
                  </StyledButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableWrapper>)
    }
  </>

)
}

export default Tables