import React from 'react'
import Menu from '../menus/Menu'
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SideProductRange from './SideProductRange';
import Stack from '@mui/material/Stack';
function ProductPage() {
  const imgArray = [
    'https://images.pexels.com/photos/1632242/pexels-photo-1632242.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/906056/pexels-photo-906056.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2363577/pexels-photo-2363577.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1573233/pexels-photo-1573233.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4040608/pexels-photo-4040608.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7445038/pexels-photo-7445038.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];
  const desc = [
    'Timeless Elegance',
    'Luxury Redefined',
    'Effortless Sophistication',
    'Chic Minimalism',
    'Bold Statement Pieces',
    'Handcrafted Treasures',
  ];
  const name = [
    'Product1',
    'Product2',
    'Product3',
    'Product4',
    'Product5',
    'Product6',
    'Product7',
  ];
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div >
      {/* heading div */}
      <div className='w-full p-8 flex justify-center border border-zinc-200 shadow-lg mb-6'>
        <h1 className='text-3xl text-blue-800 '>Gifting Product</h1>
      </div>
      <div className='flex'>
        {/* filter div */}
        <div className=' w-1/4 '>
          <SideProductRange  className='sticky'/>
        </div>

        {/* Product Div */}
        <div className='w-3/4 '>
          <div className='overflow-x-scroll w-full'>
            <div className='flex justify-center items-center gap-7 flex-wrap'>
              <Menu name={name[0]} descp={desc[0]} img={imgArray[0]} />
              <Menu name={name[1]} descp={desc[1]} img={imgArray[1]} />
              <Menu name={name[2]} descp={desc[2]} img={imgArray[2]} />
              <Menu name={name[3]} descp={desc[3]} img={imgArray[3]} />
              <Menu name={name[4]} descp={desc[4]} img={imgArray[4]} />
              <Menu name={name[5]} descp={desc[5]} img={imgArray[5]} />
              <Menu name={name[6]} descp={desc[3]} img={imgArray[2]} />
              <Menu name={name[0]} descp={desc[0]} img={imgArray[0]} />
              <Menu name={name[1]} descp={desc[2]} img={imgArray[1]} />
              <Menu name={name[2]} descp={desc[1]} img={imgArray[2]} />
              <Menu name={name[3]} descp={desc[0]} img={imgArray[0]} />
              <Menu name={name[4]} descp={desc[1]} img={imgArray[1]} />
              <Menu name={name[5]} descp={desc[2]} img={imgArray[2]} />
              <Menu name={name[6]} descp={desc[3]} img={imgArray[3]} />
              <Menu name={name[0]} descp={desc[4]} img={imgArray[4]} />
              <Menu name={name[1]} descp={desc[5]} img={imgArray[5]} />
              <Menu name={name[2]} descp={desc[3]} img={imgArray[2]} />
              <Menu name={name[3]} descp={desc[0]} img={imgArray[0]} />
              <Menu name={name[4]} descp={desc[2]} img={imgArray[1]} />
              <Menu name={name[5]} descp={desc[1]} img={imgArray[2]} />
            </div >

          </div>
        </div>
        
      </div>
      {/* pagination div */}
      <div className='flex justify-center w-full '>
      <Stack spacing={1}>
      <Typography>Page: {page}</Typography>
      <Pagination
        count={30}
        variant="outlined" shape="rounded" color='primary'page={page} onChange={handleChange} boundaryCount={5} 
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
        </div>
    </div>
  )
}

export default ProductPage
