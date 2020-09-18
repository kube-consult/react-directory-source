import React from "react";
import Filter from '../../components/Filter/';

function Head(props) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-3">
                        <Filter
                            name={"name"}
                            function={props.onClick2}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-3">
                        <Filter
                            name={"occupation"}
                            function={props.onClick2}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-3">
                        <Filter
                            name={"team"}
                            function={props.onClick2}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-3">
                        <Filter
                            name={"location"}
                            function={props.onClick2}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}


export default Head;