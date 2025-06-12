import { updateSettings } from "../services/setttingsAPI";
import useMutationFactory from "./factory/mutationFactory";

export default function useSettingsUpdate() {
  return useMutationFactory({
    queryKey: ["settings"],
    mutationFn: updateSettings,
    successMessage: "Cập nhật thành công",
  });
}
