
import CircularProgress from '@mui/material/CircularProgress';


export default function LoadingMobile() {
  return (
    <div className='w-full h-[200px] flex justify-center items-center'>
      <CircularProgress sx={{color: '#C81A78'}} />
    </div>
  );
}