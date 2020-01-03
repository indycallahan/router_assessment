import React from 'react';



const DynamicUrl = ({ match }) => {

    
    let name = match.params.name;

    
    return (
        <div className="main-content" >
            
                <h1>Welcome {name}</h1>


        </div>
    );
}

export default DynamicUrl;