
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';



export const SkeletonLoadingHome = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Skeleton variant="text" sx={{ fontSize: '1rem', width: '199px' }} animation="wave"/>
      <Box sx={{width: '100%', gap: '32px', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'}}>
        <Skeleton variant='rectangular' width={'256px'} height={'333px'} animation= "wave" sx={{marginTop: '32px'}}/>
        <Skeleton variant='rectangular' width={'256px'} height={'333px'} animation= "wave" sx={{marginTop: '32px'}}/>
        <Skeleton variant='rectangular' width={'256px'} height={'333px'} animation= "wave" sx={{marginTop: '32px'}}/>
        <Skeleton variant='rectangular' width={'256px'} height={'333px'} animation= "wave" sx={{marginTop: '32px'}}/>
        <Skeleton variant='rectangular' width={'256px'} height={'333px'} animation= "wave" sx={{marginTop: '32px'}}/>
        <Skeleton variant='rectangular' width={'256px'} height={'333px'} animation= "wave" sx={{marginTop: '32px'}}/>
        <Skeleton variant='rectangular' width={'256px'} height={'333px'} animation= "wave" sx={{marginTop: '32px'}}/>
        <Skeleton variant='rectangular' width={'256px'} height={'333px'} animation= "wave" sx={{marginTop: '32px'}}/>
        <Skeleton variant='rectangular' width={'256px'} height={'333px'} animation= "wave" sx={{marginTop: '32px'}}/>
      </Box>
    </Box>
  )
}
