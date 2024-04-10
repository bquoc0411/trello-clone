import { Box } from '@mui/material'
import React from 'react'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '50px'

const BoardContent = () => {
    return (
        <>
            <Box sx={{
                width: '100%',
                height: (theme) => theme.trello.contentHeight,
                display: 'flex',
                backgroundColor: '#000'
            }}>
                <Box sx={{
                    minWidth: '300px',
                    maxWidth: '300px',
                    bgcolor: 'rgba(255, 255, 255)',
                    ml: 2,
                    borderRadius: '5px',
                }}>
                    <Box sx={{
                        height: COLUMN_HEADER_HEIGHT,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        px: 2,
                        py: 1,
                    }}>Header</Box>
                    <Box sx={{}}>List Card</Box>
                    <Box sx={{
                        height: COLUMN_FOOTER_HEIGHT,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        px: 2,
                        py: 1,
                    }}>Footer</Box>
                </Box>

            </Box>
        </>
    )
}

export default BoardContent