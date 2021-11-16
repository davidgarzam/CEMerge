import React from "react";
import "./Tab.css";






export default function Tab() {

  return (
 <div>


  <div className="vid-list-container">
    <div className="vid-list">
     <div className="vid-container">
        <div className="vid-frame">
            <iframe className="vid" src="https://www.youtube.com/embed/De4jPjoHatA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="vid-info">
            <div className="vid-title">Video title two lines lorem ipsum dolor sit adipiscing elit ultrices nulla</div>
            <div className="vid-options">
                <button className="vid-options__btn vid-options__btn-preview"><i class="fa fa-play-circle-o vid-options__btn__icon-play"></i>Preview</button><button className="vid-options__btn vid-options__btn-more">...</button>
            </div>
        </div>
     </div>

     <div className="vid-container">
        <div className="vid-frame">
            <iframe className="vid" src="https://www.youtube.com/embed/ip7VSKaMZlw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="vid-info">
            <div className="vid-title">Video title two lines lorem ipsum dolor sit adipiscing elit ultrices nulla</div>
            <div className="vid-options">
                <button className="vid-options__btn vid-options__btn-preview"><i class="fa fa-play-circle-o vid-options__btn__icon-play"></i>Preview</button><button className="vid-options__btn vid-options__btn-more">...</button>
            </div>
        </div>
     </div>

     <div className="vid-container">
        <div className="vid-frame">
            <iframe className="vid" src="https://www.youtube.com/embed/i6sHaNTSvzA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="vid-info">
            <div className="vid-title">Video title two lines lorem ipsum dolor sit adipiscing elit ultrices nulla</div>
            <div className="vid-options">
                <button className="vid-options__btn vid-options__btn-preview"><i class="fa fa-play-circle-o vid-options__btn__icon-play"></i>Preview</button><button className="vid-options__btn vid-options__btn-more">...</button>
            </div>
        </div>
     </div>

    </div>

  </div>


 </div>
  );
}
