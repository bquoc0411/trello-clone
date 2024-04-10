import { Box } from '@mui/material'
import React from 'react'

const BoardBar = () => {
    return (
        <>
            <Box sx={{
                width: '100%',
                height: (theme) => theme.trello.navbarHeight,
                display: 'flex',
                alignItems: 'center'
            }}>
                <p>Boardbar</p>
            </Box>
        </>
    )
}

export default BoardBar