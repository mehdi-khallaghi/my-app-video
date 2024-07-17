import { Component } from "react";
import { connect } from "react-redux";

import {INC,DEC} from './../Redux/actions/index'


class Minus extends Component {
    render() {
        return (
            <div>
              <button onClick={()=>{this.props.onDeCrement()}}>-</button>
            </div >
        );
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        onDeCrement :()=>dispatch({type:DEC})
    }
}
export default connect(null,mapDispatchToProps)(Minus);