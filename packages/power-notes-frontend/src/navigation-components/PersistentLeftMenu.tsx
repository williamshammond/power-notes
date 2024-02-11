import { Button, Drawer } from '@mui/material'
import React from 'react'

export function PersistentLeftMenu() {
    const [isOpen, setIsOpen] = React.useState(false)

    const handleMenuOpen = React.useCallback(() => {
        setIsOpen(true)
    }, [])

    const handleMenuClose = React.useCallback(() => {
        setIsOpen(false)
    }, [])

    return (
        <React.Fragment>
            <Button onClick={handleMenuOpen}>Toggle Menu</Button>
            <Drawer variant={'persistent'} open={isOpen}>
                Test text!
                <Button onClick={handleMenuClose}>Close</Button>
            </Drawer>
        </React.Fragment>
    )
}
