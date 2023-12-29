import React from "react";
import LogoIcon from "./LogoIcon";
import { CompaniesIcon } from "./CompaniesIcon";
import { ScheduleIcon } from "./AppointmentsIcon";
import { WhiteboardIcon } from "./WhiteBoardIcon";
import { PatientVisitIcon } from "./PatientVisit";
import { LabIcon } from "./LabIcon";
import { PatientChatIcon } from "./PatientChartIcon";
import { ResultIcon } from "./ResultIcon";
import { SettingsIcon } from "./SettingsIcon";
import { EditIcon } from "./EditIcon";
import { RemoveIcon } from "./RemoveIcon";
import {UpdatetickIcon} from "./UpdatetickIcon";
import CancelIcon from "./CancelIcon";
import Permission from "./PermissionIcon";

const Icons = (props) => {
  const { type } = props;
  switch (type) {
    case "Logo":
      return <LogoIcon {...props} />;
    case "Company":
      return <CompaniesIcon {...props} />;
    case "Schedule":
      return <ScheduleIcon {...props} />;
    case "WhiteBoard":
      return <WhiteboardIcon {...props} />;
    case "PatientVisit":
      return <PatientVisitIcon {...props} />;
    case "Results":
      return <ResultIcon {...props} />;
    case "Labs":
      return <LabIcon {...props} />;
    case "PatientChart":
      return <PatientChatIcon {...props} />;
    case "Settings":
      return <SettingsIcon {...props} />;
    case "Edit":
      return <EditIcon {...props} />;
    case "Cancel":
      return <CancelIcon {...props} />;
    case "Remove":
        return <RemoveIcon {...props} />;
    case "Update":
        return <UpdatetickIcon {...props} />;
        case "Permission":
          return <Permission {...props} />;
    default:
      return <></>;
  }
};

export default Icons;
