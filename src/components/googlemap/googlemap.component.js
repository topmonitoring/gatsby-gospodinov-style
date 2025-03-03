import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

export const MyMap=()=>(
        <MapCanvas>
            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=gospodinov%20style&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" title='googlemapscontainer'>
            </iframe>
            <br/>
            <a href="https://www.embedgooglemap.net" aria-label='googlemaps container'>
            </a>
            <StaticImage src="../../../static/location.jpg" alt="picture of the interior" width={600} height={400} style={{margin:"auto"}}/>  
        </MapCanvas>  
)
export const MapCanvas = styled.div`
align-content: center;
display: flex;
width: 70%;
margin: auto;
@media screen and (max-width: 1210px) {
    flex-direction: column;
    width: 100%;
    }
iframe{
    margin:auto;
    display: block;
    width:600px;
    height:400px;
    max-width: 600px;
    @media screen and (max-width: 1080px) {
    width: 90%;
    }
}
`