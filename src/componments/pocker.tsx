import "./pocker.css"

type GameProps = {
    img_url: string;
}


function Pocker({img_url}: GameProps) {
    return (
        <div className="pocker-container">
            <img src= {img_url} 
            className = "pocker_img" 
            alt="Pocker Card" 
            draggable= {false}  
            style={{ userSelect: "none", pointerEvents: "none" }}/>
        </div>
    )
}

export default Pocker;