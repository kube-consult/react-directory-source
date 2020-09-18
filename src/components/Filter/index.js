import React from "react";
function Sort(props) {
    return (
        <>
              <button type="button" className="btn btn-primary btn-lg btn-block"
                onClick={() => {
                  props.function(props.name)
                }}
              >{props.name}</button>
        </>
    );
}

export default Sort; 