import React from 'react';
import './About.css';

class About extends React.Component {
    render(){
        return (
            <div className="About">
                 <div className="center"><u className="U">About Me</u></div>
                 <div className="para">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                 </div>
            </div>
        )
    }
}
export default About