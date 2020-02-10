import  React  from 'react';
import { InputGroup } from 'react-bootstrap';

const  SearchBox = ({searchfield,  searchChange }) => {
 
  return (
    <div >
       <InputGroup className="input-wrapper">
       <div className="col-md-4 search_wrapper">
          <div className="input-wrapper">
           <input type="text" className="inputSearch search-input" placeholder="search..." 
            onChange={searchChange} title="filter by name or email"/>
           <img className="icon" src="/public/search-solid.svg" alt=""/>
         </div>
       </div>
       </InputGroup>
    </div>
  );
}
export default SearchBox;

