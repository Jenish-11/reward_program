import { Box } from '@mui/material'
import React from 'react'

export default function ImageCommon({src,aspectRatio,width="100%",height="100%",objectFit="cover"}) {
  return (
    <>
    <Box sx={{aspectRatio:aspectRatio,width:width,height:height}}display={"flex"}>
        <img src={src} alt="" style={{width:"100%",height:"100%",objectFit:objectFit}}/>
    </Box>
    </>
  )
}
