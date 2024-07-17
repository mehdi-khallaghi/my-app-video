import { Component } from "react";
import { connect } from "react-redux";

import {INC,DEC} from './../Redux/actions/index'


class Plus extends Component {
    render() {
        return (
            <div>
              <button onClick={()=>{this.props.onInCrement()}}>+</button>
            </div >
        );
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        onInCrement :()=>dispatch({type:INC})
    }
}
export default connect(null,mapDispatchToProps)(Plus);