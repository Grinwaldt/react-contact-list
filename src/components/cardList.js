import * as React from 'react';
import DriverCard from './driverCard';

  class CardList extends React.Component{
    constructor(props){
      super(props)
    }

  render(){
    const contacts = this.props.contacts;

  return (  
    <div  style={{ padding: '5%'}}>
        <ul className="row">
          {contacts.map((user, i) => {
        return (
          <DriverCard 
            key={i}
            name={user.name}
            email={contacts[i].email}
            driverType={contacts[i].driverType}
            profileImage={contacts[i].profile_image}
            driverRank={contacts[i].driverRank}
            phoneNumber={contacts[i].phone}
          />
        );
      })}  
      </ul>
   </div>
  );
    }
};

export default CardList;