import { Flex } from "antd";
import LogoImg from "../assets/logo.png";

export default function Logo() {
  return (
    <Flex justify="center" className="!mt-5 !mb-2">
      <img src={LogoImg} alt="logo" />
    </Flex>
  );
}
