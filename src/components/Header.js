import React, { PureComponent } from 'react';

import '../styles/Header.css';

const Img = ({url}) =>{
    return (
        <img src={url} alt="<--"/>       
    )
}
class Header extends PureComponent{
    render(){
        return(
         <header className='header'>
             <div className='logo'>
                <Img url='https://www.freeiconspng.com/uploads/rick-and-morty-icon-png-images-29.png'/>
                <Img url='http://www.dsource.in/tool/trinetra/img/tool_images/1_1468235581.png'/>
                <Img url='http://www.dsource.in/tool/trinetra/img/tool_images/1_1468235581.png'/>       
                <Img url='http://www.dsource.in/tool/trinetra/img/tool_images/1_1468235581.png'/>       
                <Img url='http://www.dsource.in/tool/trinetra/img/tool_images/1_1468235581.png'/>       
                <Img url='http://www.dsource.in/tool/trinetra/img/tool_images/1_1468235581.png'/>       
                <Img url='http://www.dsource.in/tool/trinetra/img/tool_images/1_1468235581.png'/>       
                <Img url='http://www.dsource.in/tool/trinetra/img/tool_images/1_1468235581.png'/>
                <Img url='http://www.dsource.in/tool/trinetra/img/tool_images/1_1468235581.png'/>
                <Img url='http://www.dsource.in/tool/trinetra/img/tool_images/1_1468235581.png'/>
                <Img url='http://www.dsource.in/tool/trinetra/img/tool_images/1_1468235581.png'/>
                <Img url='http://www.dsource.in/tool/trinetra/img/tool_images/1_1468235581.png'/>
                <Img url='https://www.freeiconspng.com/uploads/rick-and-morty-icon-png-images-29.png'/>       
             </div>
         </header>
        );
    }
}

export default Header;
