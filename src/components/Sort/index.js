import React from "react";
function Filter(props) {
    return (
        <>
              <button type="button" className="btn btn-lg btn-block"
                onClick={() => {
                  props.function(props.name,props.type)
                }}
              >{props.name}</button>
        </>
    );
}

export default Filter; 