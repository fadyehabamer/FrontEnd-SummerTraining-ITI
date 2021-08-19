let HTMLCONTENT = (props) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            float:'left',
            width: "77%",          
            height: "200px",
            marginTop: "50px",
            backgroundColor: "green"
        }}>

            <h3>
                {props.data.id}
                <br />
                {props.data.name}
            </h3>


        </div>
    )
}
export default HTMLCONTENT