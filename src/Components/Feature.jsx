import React from 'react';
import FeatureHeader from './FeatureHeader';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';

{/* importing rest of images ^ */}

function Feature() {
    return (
        <div id='features'>
            <div className = 'a-container'>
                <FeatureHeader image={featureimage} title='Reddit & Twitter Media Enhancer' text = "BrickHack 7 hackathon winning project hosted online by Rochester Institute of Technology. 
                Won award for [Dolby.io] 2nd: Best Use of Media Processing APIs and Best Use of Interactivity APIs.
                Developed in Python, the program is a bot that looks for specified keyboards in   replies to a tweet with a media file. 
                If the keyword is found, it will download the   video, pass it through the Dolby.io API, and then upload the enhanced media video as a reply." 
                text2 = "Here is the link to the DevPost of the hackathon"/>
                <FeatureHeader image={featureimage1} title='Google Map C++ App' text = "Developed in C++, this console based program takes in an input map of UIC's campus from openstreetmap.org. The program takes in two inputs 
                from the user and then uses Dijkstra’s algorithm to find the shortest weighted path. This is repeated until the user enters # for the start building. It is built using a graph data structure I made."/>
                <FeatureHeader image={featureimage2} title='Skills' text = "Languages: " text3="- C/C++, Python, HTML/CSS, JavaScript"
                text4="Frameworks: " text5= "- reactJS, vueJS" gitt= "Link to my github"/>

                         
            </div>
            
        </div>
    )
}

export default Feature;
