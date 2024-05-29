import React from 'react'
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Pagi() {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        < div className='flex justify-center w-full  ' >
            <Stack spacing={1}>
                <Typography>Page: {page}</Typography>
                <Pagination
                    count={30}
                    variant="outlined" shape="rounded" color='primary' page={page} onChange={handleChange} boundaryCount={5}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    )}
                />
            </Stack>
        </div>




    )
}

export default Pagi
