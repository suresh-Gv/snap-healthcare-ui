import React from 'react';
import PropTypes from 'prop-types';
import { isSet } from '../../../utils/commonUtils';
import Icons from '../Icons';
import withReduxState from '../../../hoc/wReduxState';
import { acl_check } from '../../../utils/aclUtils';

const Button = ({ label, iconType, className, clickHandler, acl,title,profile,href='#!' }) => {
    let hasAccess = true;
    try{
        hasAccess = acl_check(profile.permissions,isSet(acl,''));
    }catch(e){

    }
    
    const buttonStyle = {
      cursor: isSet(hasAccess,true) ? 'pointer' : 'not-allowed', // Enable or disable pointer events pointerEvents
      opacity: isSet(hasAccess,true) ? 1 : 0.5, // Adjust opacity based on access
    };
      return (
        <a
          className={className}
          onClick={(isSet(hasAccess,true))?clickHandler:()=>{}}
          title={!isSet(hasAccess,true) ? 'No permission' : isSet(title,'')} // Add title if no permission
          style={buttonStyle}
          href={href}
        >
          <Icons type={iconType} />
          {label}
        </a>
      );
    };

Button.defaultProps = {
    clickHandler:()=>{}
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

export default withReduxState(Button);