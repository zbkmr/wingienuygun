import TableContainer from '@mui/material/TableContainer';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

export const StyledButton = styled(IconButton)({
    "&:hover, &.Mui-focusVisible": { color: "#ff6d75" }
  });
export const TableWrapper = styled(TableContainer)(({ theme }) => ({
    marginTop: '2rem',
}))
export const AvatarContainer = styled(Avatar)(({ theme }) => ({
  "&:hover": { cursor: "pointer" }
}))
