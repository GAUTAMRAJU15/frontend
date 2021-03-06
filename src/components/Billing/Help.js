import React, { Component } from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import {
    Grid,Popover,Tooltip,Modal,Checkbox,Radio,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl
  } from 'react-bootstrap';
  import CardHeader from 'components/Template/card-with-header';
  import FormInputs from 'components/Template/FormTemp';
  import Button from 'components/Template/customButton';
  import {ToastContainer, toast} from 'react-toastify';

  
export default class Help extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div>

        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Help
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
        <Row>
          <Col md={8}>
             <Modal.Title id="feedbackPopup">How can we help you today</Modal.Title> 
          </Col>
          <Col md={3}>
          <Modal.Header closeButton>   
          </Modal.Header>
          </Col>
          </Row>
          <Modal.Body>
    <FormGroup>
      <Radio name="radioGroup" inline>
        I need help setting up my team
      </Radio>{' '}
      <Radio name="radioGroup" inline>
        I want to know how to use flock
      </Radio>{' '}
      <Radio name="radioGroup" inline>
        Something is not working
      </Radio>

       <Radio name="radioGroup" inline>
        I have feedback / feature request
      </Radio>

       <Radio name="radioGroup" inline>
        I need help with something else
      </Radio>
    </FormGroup>

            <h4>Tell us more</h4>
            {/* <label for="exampleFormControlTextarea1">Large textarea</label> */}
            <textarea class="form-control z-depth-1" style={{ height: 200, width:500 }} id="exampleFormControlTextarea6"  rows="3" placeholder="Briefly explain what happened and steps to replicate the issue.">
                
            </textarea>


          </Modal.Body>
          <Modal.Footer>
          <Row>
          <div className="sendRequest">
                <Button
                      bsStyle="success"
                      pullRight
                      fill
                      type="button"
                      >
                       Send Request
                </Button>
            </div>
            <div  className="Cancel">
                 <Button
                      bsStyle="warning"
                      pullRight
                      fill
                      type="button"
                      >
                         Cancel
                </Button>
            </div>
         </Row>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
