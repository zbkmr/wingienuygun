import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { MyToolbar } from './styles';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import enuygunSVG from '../../../assets/enuygun.svg'



const DenseAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <MyToolbar sx={{ bgcolor: "green" }}>
          <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
            <Image
            src={enuygunSVG}
            alt="My SVG"
            width={100}
            height={20}
        />
          </IconButton>
        </MyToolbar>
      </AppBar>
    </Box>
  );
}
export default DenseAppBar;