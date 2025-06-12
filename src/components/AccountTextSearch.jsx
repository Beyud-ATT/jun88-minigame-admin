import { FaUser } from "react-icons/fa";
import { createSearchComponent } from "./factory/createSearchComponent";

export const AccountTextSearch = createSearchComponent({
  type: "text",
  fieldName: "account",
  placeholder: "Tài khoản",
  icon: <FaUser className="text-[var(--color-brand-primary)]" />,
});
