import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import $ from 'jquery';
import CardHeader from 'components/Template/card-with-header'
import FormInputs from 'components/Template/FormTemp';
import Button from 'components/Template/customButton';
import { ToastContainer, toast } from 'react-toastify';
import { css } from 'glamor';
import { validatewebsite } from 'components/Common/function';
import { createCampaign } from 'ducks/campaign';

function validate(campaignname, website) {
  // true means invalid, so our conditions got reversed
  return {
    name: campaignname.length === 0,
    email: !validatewebsite(website)
  };
}

export class NewUser extends Component {
  constructor() {
    super();
    this.state = {
      campaignname: '',
      website: '',
      status: {}
    }
    this.handleNextButton = this.handleNextButton.bind(this)
  }

  handleCampaignNameChange(evt) {
    this.setState({campaignname: evt.target.value})
  }

  handleWebsiteChange(evt) {
    this.setState({website: evt.target.value})
  }

  handleCampaignAuth(evt) {
    if (evt.target.value == '') {
      $('#' + evt.target.id).addClass('has-error');
      toast("Enter campaign name", {
        position: toast.POSITION.BOTTOM_LEFT,
        className: css({background: "#dd5258", color: '#fff'}),
        autoClose: 2000
      });
    } else {
      $('#' + evt.target.id).removeClass('has-error')
    }
  }

  handleWebsiteAuth(evt) {
    if (!validatewebsite(evt.target.value)) {
      toast("Enter valid website name", {
        position: toast.POSITION.BOTTOM_LEFT,
        className: css({background: "#dd5258", color: '#fff'}),
        autoClose: 2000
      });

    } else {
      $('.error-bg').fadeOut().html('')
      $('#' + evt.target.id).removeClass('has-error')

    }
  }

  canBeSubmitted() {
    const errors = validate(this.state.campaignname, this.state.website);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  handleBrandingChnage() {}

  handleCheckCookie() {
    var usertoken = localStorage.getItem("authToken");
    if (usertoken != "") {
      return usertoken;
    } else {
      this.setState({render: false});
      browserHistory.push('/login');
    }
  }

  handleNextButton(evt) {
    evt.preventDefault();
    var tokenverify = this.handleCheckCookie();
    const data = {
      campaignName: this.state.campaignname,
      websiteUrl: this.state.website,
      profile: this.props.profile._id
    };
    return this.props.createCampaign(data)
    // this.props.callbackFromParent({'active': 2});

  }

  componentWillMount() {
    if(this.props.campaign && Object.keys(this.props.campaign).length !== 0 && this.props.campaign.constructor === Object)
      this.props.callbackFromParent({'active': 2});
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.campaign != this.props.campaign)
      this.props.callbackFromParent({'active': 2});
  }


  render() {
    const errors = validate(this.state.campaignname, this.state.website);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return (<div className="content fill">
      <Grid fluid="fluid">
        <Row>
          <Col md={12}>
            <CardHeader title="Website" content={
              <form onSubmit={this.handleNextButton}>
                <FormInputs
                  ncols = {["col-md-6","col-md-6"]}
                  proprieties = {[
                    {
                     label : "Name",
                     type : "text",
                     bsClass : "form-control",
                     id:"campaignname",
                     placeholder : "example: Acme Co, Blog, Online Store",
                     onChange: this.handleCampaignNameChange.bind(this),
                     onBlur : this.handleCampaignAuth.bind(this),
                     value: this.state.campaignname,
                     required: true
                    },
                     {
                     label : "Website URL",
                     type : "text",
                     bsClass : "form-control",
                     placeholder : "http://",
                     id:"website",
                     onChange: this.handleWebsiteChange.bind(this),
                     onBlur : this.handleWebsiteAuth.bind(this),
                     value: this.state.website,
                     required: true
                    }
                  ]}
                />
                <Button
                  bsStyle="info"
                  pullRight
                  fill
                  type="submit"
                  disabled={isDisabled}
                  >
                  Next >
                </Button>
                <div className="clearfix"></div>
              </form>
            }/>
          </Col>
        </Row>
      </Grid>
      <ToastContainer hideProgressBar={true}/>
    </div>);
  }
}
const mapStateToProps = state => ({
  profile: state.getIn(['profile', 'profile']),
  campaign: state.getIn(['campaign', 'campaign'])
});

const mapDispatchToProps = {
  createCampaign
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
