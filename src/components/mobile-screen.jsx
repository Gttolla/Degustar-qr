function MobileScren (props){
    return(
        <div id="container">
            <div className="mobile">
                <div className="overflow-auto" id="screen">
                    {props.content}
                </div>
            </div>
        </div>
    );
}

export default MobileScren;