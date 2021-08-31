import React, { useEffect, useState } from 'react';
import Layout from "@/layouts/Layout"
import SEO from "@/layouts/seo"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme } from '@material-ui/core';


export default () => {

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const handleClose = () => {
        setIsOpenModal(false)
    }

    const setStorage = (bl: boolean) => {
        localStorage.setItem("is3d", bl ? "true" : "false")
        window.location.reload();
    }

    useEffect(() => {
        const _stored = localStorage.getItem("is3d")

        if (!_stored) {
            setIsOpenModal(true)
        }
        }, [])

    return (
        <>

            <Layout />
            <SEO title="jumang potaru" />

            <Dialog
                fullScreen={fullScreen}
                open={isOpenModal}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title padpad"
            >
                <DialogTitle id="responsive-dialog-title">{"open " + (isOpenModal ? "enable 3d jumang" : "") + "?"}</DialogTitle>
                
                <DialogContent>
                    <DialogContentText>
                        enabling 3d heavy as heck doe
                    </DialogContentText>
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={() => {
                        setStorage(true)
                    }} color="primary">
                        yes i love 3d
                    </Button>
                    <Button onClick={() => {
                        setStorage(false)
                    }} color="primary" >
                        no my pc is shit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}