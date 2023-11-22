
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export const SkeletonLoadingProduct = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Skeleton variant="text" sx={{ fontSize: '1rem', width: '199px' }} animation="wave"/>
      <Box sx={{width: '100%', gap: '32px', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'}}>
        <Skeleton variant='rectangular' width={'100%'} height={'100%'} animation= "wave" sx={{marginTop: '32px',}}/>
        <Skeleton variant='rectangular' width={'100%'} height={'100%'} animation= "wave" sx={{marginTop: '32px'}}/>
      </Box>
    </Box>
  )
}
