import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const Message = (props) => {
  return (
    <Box sx={{display:"flex", flexDirection:"column", alignItems: props.sender == 'you'
    ? "end": ''}}>
    <Card sx={{marginBottom: '8px',
    background: props.sender == 'you'?'#F6C927': '#121231',
    width: '45%',
    
    alignItems: 'flex-end'
    }}>
      <CardContent >
        <Typography variant="subtitle2" color="textSecondary" gutterBottom sx={{
            

    }}>
          {props.sender} - {props.time}
        </Typography>
        <Typography variant="body1" sx={{
            color:'white',
            
    }}>{props.message}</Typography>
      </CardContent>
    </Card>
    </Box>
  );
};



export default Message