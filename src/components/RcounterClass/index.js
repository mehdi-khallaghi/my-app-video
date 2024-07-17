import { Component } from "react";
import { connect } from "react-redux";
import Plus from './plus'
import Minus from './minus'

class RCounterClass extends Component {
    render() {
        return (
            <div>
                counter: {this.props.counter}

                <Plus />
                <Minus />
            </div >
        );
    }
}

const mapStateToProps = (state)=> {
    return {counter:state.counter}
}
export default connect(mapStateToProps)(RCounterClass);