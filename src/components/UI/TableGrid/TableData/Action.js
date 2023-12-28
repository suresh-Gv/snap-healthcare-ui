import React, { useState } from "react";
import Wrap from "../../../../hoc/Wrap";
import { isSet } from "../../../../utils/commonUtils";
import Icons from '../../Icons';

const Actions = (props) => {
    const { rowId, value,gridEditProps } = props;
    const {activeEditId} = gridEditProps;
    let isEdit = false;

    return (
        <td>
            <Wrap>
                {value.map((btn, btnIndex) => {
                    if (isEdit && rowId === activeEditId) {
                        return null; // Skip rendering if already in edit mode
                    }

                    if (btn.type === 'GridEdit') {
                        isEdit = true;
                        return (
                            <EditGridButtonGroup
                                {...btn}
                                rowId={rowId}
                                key={btnIndex}
                                gridEditProps={gridEditProps}
                            />
                        );
                    }

                    return <Button {...btn} key={btnIndex} />;
                })}
            </Wrap>
        </td>
    );
};
const EditGridButtonGroup = (props)=>{
    const {gridEditProps,rowId,clickHandler,className,iconType,updateHandler} = props;
    const {activeEditId,tableHeaders,rowData} = gridEditProps;

    const getFromData = () => {
        let formDatas = {};
        tableHeaders.forEach((tHead) => {
            formDatas = {
                ...formDatas,
                [tHead.key]: rowData.data[tHead.key],
            };
        });
        return formDatas;
    };
    if(isSet(rowId,null)!==null && rowId===activeEditId){
        return(
            <Wrap>
                <a className="btn btn-outline-secondary rounded-pill" onClick={()=>updateHandler(rowId)}>
                        Update
                </a>
                <a className="btn btn-outline-secondary rounded-pill" onClick={()=>clickHandler(null,{})}>
                        Cancel
                </a>
            </Wrap>
        )
    }else{  
        return  <Button className={className} iconType={iconType} clickHandler={()=>clickHandler(rowId,getFromData())}/>;
    }
}
const Button = ({ label, iconType, className,clickHandler }) => (
    <button className={className} onClick={clickHandler}>
      <Icons type={iconType} />
      {label}
    </button>
  );

export default Actions;