import { Box } from '@mui/material'
import React from 'react'
import ModeToggle from '../ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'

const AppBar = () => {
    return (
        <>
            <Box sx={{
                backgroundColor: 'primary.main',
                width: '100%',
                height: (theme) => theme.trello.headerHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                    }}>
                    <AppsIcon sx={{
                        color: '#fff',
                    }} />

                    <img style={{ width: '80px' }} src='https://trello.com/assets/87e1af770a49ce8e84e3.gif' />
                </Box>
                <Box></Box>
                <Box></Box>
            </Box>
        </>
    )
}

export default AppBar