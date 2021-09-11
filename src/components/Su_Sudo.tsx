import React, { useEffect, useState } from "react"
import "@/styles/component/MDArea.scss"
import "@/styles/component/cutieButton.scss"
import "@/styles/component/MDText.scss"
import '@/styles/component/MPPost.scss'
import '@/styles/component/nysh.scss'
import "@/styles/component/su_sudo.scss"
import CutieButton from "./CutieButton"

enum auth_enum {
    waiting,
    failed,
    ok
}

export const usb_data = {
    vendorId: 0,
    productId: 0,
    serialNumber: "XXXX"
}

export const Su_Sudo = () => {

    const [is3d, setIs3d] = useState<boolean>(false)

    const [auth_status, setAuth_status] = useState<auth_enum>(auth_enum.waiting)

    const auth = (
        vendorId: number,
        productId: number,
        serialNumber: string
    ) => {
        navigator.usb.requestDevice({
            'filters': [
                { 'vendorId': vendorId, 'productId': productId }
            ]
        }).then(device => {
            if (device.serialNumber === serialNumber) {
                setAuth_status(auth_enum.ok)
            } else {
                setAuth_status(auth_enum.failed)
            }
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        setIs3d(localStorage.getItem("is3d") === "true")
    }, [])

    return (
        <div className={is3d ? "bdroper" : ""}>
            <div className="MDArea">
                <div className="MDArea2">
                    <div className="MDText nysh_flex" >
                        <div className={"MPPost"}>
                            <div className={"title"}> su_sudo💿 </div>
                            <div className={"nysh_back flex-col"}>
                                <div> -! insert dedicated USB device to login </div>

                                {
                                    auth_status === auth_enum.waiting &&
                                    <div> -o waiting...</div>
                                }

                                {
                                    auth_status === auth_enum.failed &&
                                    <div> -! failed. </div>
                                }

                                {
                                    auth_status === auth_enum.ok &&
                                    <div> -! X_API_KEY=18bada45-3c77-465f-a63d-fe8d830f0989
                                    </div>
                                }
                            </div>

                            <div className={"killa"}>
                                <div onClick={() => {
                                    auth(usb_data.vendorId, usb_data.productId, usb_data.serialNumber)
                                }}>
                                    <CutieButton Name={"auth"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}