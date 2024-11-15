import { MdGroupAdd } from "react-icons/md";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdInsertChart } from "react-icons/md";
import { RiFileList2Fill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";
import { HiMiniChevronRight } from "react-icons/hi2";
import { MdOutlineArrowRight } from "react-icons/md";

const links = [
  {
    text: "overview",
    path: ".",
    icon: <RiDashboardHorizontalFill size={18} />,
  },
  { text: "leaduri", path: "leads", icon: <MdGroupAdd size={18} /> },
  { text: "clienți", path: "clienti", icon: <FaHandshake size={18} /> },
  { text: "măsuri", path: "masuri", icon: <RiFileList2Fill size={18} /> },
  { text: "rapoarte", path: "rapoarte", icon: <MdInsertChart size={18} /> },
  {
    text: "admin",
    path: "admin",
    icon: <MdAdminPanelSettings size={18} />,
    children: [
      {
        text: "companii",
        path: "/admin/companii",
        // icon: <MdOutlineArrowRight size={17} />,
      },
    ],
  },
  { text: "useri", path: "useri", icon: <HiMiniUserGroup size={18} /> },
];

export default links;
