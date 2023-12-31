import React from 'react';
import PropTypes from 'prop-types';
import { isSet } from '../../../utils/commonUtils';
import Icons from '../Icons';
import withReduxState from '../../../hoc/wReduxState';
import { acl_check } from '../../../utils/aclUtils';
import { Link } from 'react-router-dom';

const Button = ({ label, iconType, className, clickHandler, acl,title,profile,accessType,href='#!',children }) => {
    let hasAccess = true;
    try{
        hasAccess = acl_check(profile.permissions,isSet(acl,''));
    }catch(e){

    }
    if(accessType=='Hide' && hasAccess===false){
        return false;
    }
    const buttonStyle = {
      cursor: isSet(hasAccess,true) ? 'pointer' : 'not-allowed', // Enable or disable pointer events pointerEvents
      opacity: isSet(hasAccess,true) ? 1 : 0.5, // Adjust opacity based on access
    };
      return (
        <Link
        className={className}
        onClick={hasAccess ? clickHandler : () => {}}
        title={!hasAccess ? 'No permission' : title}
        style={buttonStyle}
        to={href} // Use 'to' instead of 'href' for React Router
      >
        {iconType !== null ? <Icons type={iconType} /> : null}
        {label !== null ? label : ''}
        {children && children !== null ? children : ''}
      </Link>
      );
    };

Button.defaultProps = {
    clickHandler:()=>{},
    iconType:null,
    accessType:'Disabled',
    children:null,
    label:''
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

export default withReduxState(Button);