import { MdGroupAdd } from "react-icons/md";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdInsertChart } from "react-icons/md";
import { RiFileList2Fill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  {
    text: "overview",
    path: ".",
    icon: <RiDashboardHorizontalFill size={16} />,
  },
  { text: "leaduri", path: "leads", icon: <MdGroupAdd size={16} /> },
  { text: "clienți", path: "clienti", icon: <FaHandshake size={16} /> },
  { text: "măsuri", path: "masuri", icon: <RiFileList2Fill size={16} /> },
  { text: "rapoarte", path: "rapoarte", icon: <MdInsertChart size={16} /> },
  { text: "useri", path: "useri", icon: <HiMiniUserGroup size={16} /> },
  { text: "admin", path: "admin", icon: <MdAdminPanelSettings size={16} /> },
];

export default links;
