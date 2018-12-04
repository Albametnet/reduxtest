import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import Plus from '../components/Plus'
import Less from '../components/Less'
import Visor from '../components/Visor'


const Counter = ({addNum, substractNum, count}) => {
  // debugger;
    return (
      <div>
        <Visor count = {count}/>
        <Plus  onClick = {(e)=> addNum()}/>
        <Less onClick = {(e)=> substractNum()}/>
      </div>
    )
}

function mapStateToProps (state) {
  console.log(state)
  return {
    count: state
  };
}

const mapActionToProps = {
  addNum: actions.addNum,
  substractNum: actions.subtractNum
}

export default connect(mapStateToProps, mapActionToProps)(Counter);