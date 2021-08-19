let HTMLFOOTER = (props) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "50px",
            position:"absolute",
            bottom:"0px",
            backgroundColor: "green"
        }}>

            <h3>
                {props.foot}

            </h3>


        </div>
    )
}
export default HTMLFOOTER