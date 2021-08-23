import React, { Component  } from 'react'

class HorizontalAd extends Component {

    componentDidMount() {
     (window.adsbygoogle = window.adsbygoogle || []).push({})

    //  (adsbygoogle = window.adsbygoogle || []).push({});

    }

   render () {
    return(
        <div>
            <p style={{color: "orange"}}>Testing Ad Unit --- Below</p>
        <ins className="adsbygoogle"
            style={{display:"block"}}
            data-ad-client="ca-pub-4251956377464127"
            data-ad-slot="7141229439"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
            <p style={{color: "orange"}}>End Testing Ad Unit Space</p>
         </div>
        
        
        )
    }
}

export default HorizontalAd;