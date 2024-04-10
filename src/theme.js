import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const APP_BAR_HEIGHT = '48px'
const BOARD_BAR_HEIGHT = '48px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${BOARD_BAR_HEIGHT} - ${APP_BAR_HEIGHT})`

const theme = extendTheme({

    trello: {
        headerHeight: APP_BAR_HEIGHT,
        navbarHeight: BOARD_BAR_HEIGHT,
        contentHeight: BOARD_CONTENT_HEIGHT
    },

    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#28470a'
                }
            }
        },
        dark: {
            palette: {
                primary: {
                    main: '#000'
                }
            }
        }
    }
    // ...other properties
})

export default theme