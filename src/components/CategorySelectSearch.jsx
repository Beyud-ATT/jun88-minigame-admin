import { createSearchComponent } from "./factory/createSearchComponent";
import { GAME_CATEGORY } from "../utils/constants";
import { FaGamepad } from "react-icons/fa";

export const CategorySelectSearch = createSearchComponent({
  type: "select",
  fieldName: "category",
  placeholder: "Tìm kiếm theo loại trò chơi",
  options: GAME_CATEGORY,
  prefix: <FaGamepad className="text-xl text-[var(--color-brand-primary)]" />,
});
