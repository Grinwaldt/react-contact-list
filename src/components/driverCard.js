import * as React from 'react';
import Card  from 'react-bootstrap/Card';

class DriverCard extends React.Component{
  constructor(props){
    super(props)
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    }
  };

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    }
  } 

  render(){
    const { name, email,driverRank ,profileImage,driverType,phoneNumber} = this.props;
    const _driverType = driverType.toLowerCase().replace(/\s/g, '');
    let profileImageStyle = {};
    if (profileImage !== undefined && profileImage !== null) {
        profileImageStyle.backgroundImage = `url(${profileImage})`;
    }

  return (  
<li className="contactCard col-12 col-md-6 col-lg-3 contact-item">
  <Card>
   <div className="contact-item-content" tabIndex="0"
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}>
   <div className="profileImage" style={profileImageStyle}></div>
  <Card.Body  className="contentCard" style={{ position: 'relative',  padding: '0 !important'}}>
          <Card.Img
            variant="top"
            src={ process.env.PUBLIC_URL + '/' + _driverType + '.svg' }
            alt="contact"
            className="icon contact-type"
            title={driverType}
          /> 
          <Card.Title>{name}</Card.Title>
          <p>Driver Rank: {driverRank}</p>
          { this.state.isHovering &&   
          <div> 
           <p>Phone Number: {phoneNumber}</p>
           <p>Email: {email}</p> 
          </div>
          }
    </Card.Body>
    </div>
      </Card>
   </li>
  );
};
};

export default DriverCard;
