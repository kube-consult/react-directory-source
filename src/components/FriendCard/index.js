import React from "react";
import "./style.css";
import Filter from '../../components/Filter/';
import Sort from '../../components/Sort/';

function FriendCard(props) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-3">
          <Sort
                name={props.name}
                function={props.onClick}
                type="1"
              />
          </div>
          <div className="col-xs-12 col-sm-3">
          <Sort
                name={props.occupation}
                function={props.onClick}
                type="2"
              />
          </div>
          <div className="col-xs-12 col-sm-3">
          <Sort
                name={props.team}
                function={props.onClick}
                type="3"
              />
          </div>
          <div className="col-xs-12 col-sm-3">
          <Sort
                name={props.location}
                function={props.onClick}
                type="4"
              />
          </div>
        </div>
      </div>
    );
}


export default FriendCard;
