import React, {Component} from 'react'
import Footer from '../common/footer.js'

class MainPage extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default MainPage
