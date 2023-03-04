import React from 'react'
import imageQrCode from "../assets/image-qr-code.png";

export const QrContainer = () => {
  return (
    <div className="flex flex-col p-4 rounded-2xl bg-white w-80 shadow-lg">
        <div className='overflow-hidden rounded-xl'>
            <img src={imageQrCode} alt="qr code" />
        </div>
        <div className="flex flex-col justify-center items-center text-center p-4">
            <h1 className="pb-3 w-full text-[20px] font-extrabold font-qrText text-[hsl(218,_44%,_22%)]">Improve your front-end<br/>skills by building projects</h1>
            <h2 className='w-full text-[15px] font-qrText text-[hsl(220,_15%,_55%)]'>Scan the QR code to visit Frontend<br/>Mentor and take your coding skills to<br/>the next level</h2>
        </div>
    </div>
  )
}
