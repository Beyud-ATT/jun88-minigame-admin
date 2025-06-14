import { Menu } from "antd";
import { IoSettingsSharp } from "react-icons/io5";
import Logo from "../components/Logo";
import { MdHistory } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { FaQuestionCircle, FaRegCalendarAlt } from "react-icons/fa";

const items = [
  // {
  //   key: "questions",
  //   icon: <FaQuestionCircle />,
  //   label: "Quản lý câu hỏi",
  // },
  {
    key: "attendance",
    icon: <FaRegCalendarAlt />,
    label: "Lịch sử điểm danh",
  },
  {
    key: "settings",
    icon: <IoSettingsSharp />,
    label: "Cài đặt",
  },
  // {
  //   key: "histories",
  //   icon: <MdHistory />,
  //   label: "Lịch sử người chơi",
  // },
];

export function Sider({ Layout, ...rest }) {
  const { Sider } = Layout;
  const navigate = useNavigate();
  const pathname = useLocation().pathname.replace("/", "");
  const [current, setCurrent] = useState(pathname);

  function handleMenuClick(item) {
    if (item?.key) {
      navigate(item?.key);
      setCurrent(item?.key);
    }
  }

  return (
    <Sider width="17%" {...rest}>
      <Logo />
      <Menu
        theme="dark"
        defaultSelectedKeys={[current]}
        defaultValue={current}
        items={items}
        className="!px-5"
        onClick={handleMenuClick}
      />
    </Sider>
  );
}
