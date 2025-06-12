import { createSearchComponent } from "../../../components/factory/createSearchComponent";

export const StartDateSearch = createSearchComponent({
  type: "date",
  fieldName: "startDate",
  placeholder: "Từ ngày",
});
