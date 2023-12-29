import React from 'react';
import PropTypes from 'prop-types';
import { isSet } from '../utils/commonUtils';
import withReduxState from '../hoc/wReduxState';
import { acl_check } from '../utils/aclUtils';
import Wrap from './Wrap';

const Acl = ({  acl,profile,children }) => {
    let hasAccess = true;
    try{
        hasAccess = acl_check(profile.permissions,isSet(acl,''));
    }catch(e){

    }
    if(hasAccess){
        return  <Wrap>{children}</Wrap>
    }else{
        return <Wrap></Wrap>
    }
    };

Acl.defaultProps = {
    children:null,
}
// Acl.propTypes = {
//   label: PropTypes.string.isRequired,
//   iconType: PropTypes.string.isRequired,
//   clickHandler: PropTypes.func,
// };

export default withReduxState(Acl);