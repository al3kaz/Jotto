import React, { Component } from 'react';
import { connect } from 'react-redux'

class Input extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }
   render() {
      return (<div>
         <button>ok</button>
      </div>);
   }
}

const mapStateToProps = (state) => {
   return {}
}

export default connect(mapStateToProps)(Input);