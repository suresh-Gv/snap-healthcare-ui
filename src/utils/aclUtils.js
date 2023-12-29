import { useSelector } from "react-redux";

// export const Acl= ()=>{
//     const profile = useSelector(state => state.session.profileDetails);
//     console.log(profile.permission);
//     // return false;
//     return false;//useSelector(state => state.session.profileDetails);

// }

export const acl_check = (permissions, aclStrings) => {
    // const [resource, action] = aclString.split('-');
  
    // return permissions?.[resource]?.[action] || false;
    const aclArray = Array.isArray(aclStrings) ? aclStrings : [aclStrings];
    if(aclArray.indexOf('any')!==-1){
        return true;
    }
    return aclArray.some((aclString) => {
        const [resource, action] = aclString.split('-');
        return permissions?.[resource]?.[action];
    });
  };
