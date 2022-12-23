import React from 'react';
const CLick = props => {
    const {kind,...other} = props;
    const className = kind === "Primary" ? "Primary Click" : "Secondary Click" ;
    return <button className={className} {...other} />
};



const Spread = () => {
    return (
        <div>
            <CLick kind="Primary" onClick={()=>{console.log("Clicked")}}>
                Clicked
            </CLick>
        </div>
    );
}

export default Spread;
