import React, {useContext} from 'react';
import { Bookcontext } from '../contexts/BookContext';
//functional component
const Navbar = () => {
  const{books} = useContext(Bookcontext)
    return ( 
        <div className="navbar">
            <h1>کتاب های شما</h1>
            <p>
               شما 
                {` ${books.length} `}
                کتاب دارید
            </p>
        </div>
     );
}
 
export default Navbar;

