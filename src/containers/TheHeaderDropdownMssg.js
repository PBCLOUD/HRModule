import React from "react";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const TheHeaderDropdownMssg = () => {
  const itemsCount = 4;
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
      direction="down"
    ></CDropdown>
  );
};

export default TheHeaderDropdownMssg;
