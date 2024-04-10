import { Button, useColorScheme, useMediaQuery } from "@mui/material"

const ModeToggle = () => {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
    console.log('preferencesDarkMode', prefersDarkMode)
    console.log('preferencesLightMode', prefersLightMode)
    
    const { mode, setMode } = useColorScheme();

    return (
        <Button
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light')
            }}
        >
            {mode === 'light' ? 'Turn dark' : 'Turn light'}
        </Button>
    )
}

export default ModeToggle
