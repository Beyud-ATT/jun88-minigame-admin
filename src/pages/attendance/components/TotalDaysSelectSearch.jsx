import { FaCalendarAlt } from "react-icons/fa";
import { createSearchComponent } from "../../../components/factory/createSearchComponent";

export const TotalDaysSelectSearch = createSearchComponent({
  type: "select",
  fieldName: "totalDays",
  placeholder: "Tìm kiếm theo số ngày",
  options: [
    { value: "3", label: "3 ngày" },
    { value: "7", label: "7 ngày" },
    { value: "14", label: "14 ngày" },
    { value: "21", label: "21 ngày" },
    { value: "28", label: "28 ngày" },
  ],
  prefix: (
    <FaCalendarAlt className="text-xl text-[var(--color-brand-primary)]" />
  ),
});
