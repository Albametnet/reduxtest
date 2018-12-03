import React from "react";
import '../stylesheets/Control.css';
import Plus from './Plus'
import Less from './Less'

class Control extends React.Component {
  render() {
    return (
    <div className="control__Box">
        <Plus />
        <Less />
    </div>
    );
  }
}

export default Control;