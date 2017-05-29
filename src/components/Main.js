require('normalize.css/normalize.css');
require('styles/App.scss');
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
// import { Grid } from 'react-bootstrap';
// import { Grid } from 'react-bootstrap';
// import { Grid } from 'react-bootstrap';
// import { Grid } from 'react-bootstrap';
// require('jQuery');
// require('bootstrap');
var md5 = require('js-md5');

import React from 'react';
let yeomanImage = require('../images/file1.jpg');

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    var title = <h1>123</h1>;
    // 设置 initial state
    this.state = {
      title: title
    };

    // ES6 类中函数必须手动绑定
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var hash = md5(event.target.value);

    console.log(hash);
    this.setState({
      title: <h1>{hash}</h1>
    });
  }

  render() {
    return (
      <div className="index">
        <Alert>asd</Alert>
        <input onChange={this.handleChange}
          value={this.state.text}
          className="form-control"
        />
        <div>
          {this.state.title}
          <Button bsStyle="success" href="http://bs.cuidmm.cn">
            asdasd
          </Button>
          <FormExample></FormExample>
        </div>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Image src={yeomanImage} alt="Yeoman Generator" rounded />
            </Col>
             <Col xs={6} md={4}>
              <Image src={yeomanImage} alt="Yeoman Generator" rounded />
            </Col>
             <Col xs={6} md={4}>
              <Image src={yeomanImage} alt="Yeoman Generator" rounded />
            </Col>
          </Row>
        </Grid>

        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}


class FormExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }


  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
