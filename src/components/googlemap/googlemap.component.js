import React from 'react'
import styled from 'styled-components'

export const MyMap=()=>(
        <MapCanvas>
            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=gospodinov%20style&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" title='googlemapscontainer'>
            </iframe>
            <br/>
            <a href="https://www.embedgooglemap.net" aria-label='googlemaps container'>
            </a>
        </MapCanvas>
                    
               
)
export const MapCanvas = styled.div`
align-content: center;
iframe{
    margin: auto;
    display: block;
    width:600px;
    height:400px;
    @media screen and (max-width: 1080px) {
    width: 90%;
    }
}
`