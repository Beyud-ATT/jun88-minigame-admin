import { createSearchComponent } from "../../../components/factory/createSearchComponent";

export const EndDateSearch = createSearchComponent({
  type: "date",
  fieldName: "endDate",
  placeholder: "Đến ngày",
});
