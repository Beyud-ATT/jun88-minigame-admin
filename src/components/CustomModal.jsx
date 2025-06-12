import { Button } from "antd";
import { CompoundModal } from "./CompoundModal";
import { LuPenLine } from "react-icons/lu";

export default function CustomModal({
  trigger,
  content,
  contentConfig,
  triggerConfig,
}) {
  return (
    <CompoundModal>
      <CompoundModal.Trigger {...triggerConfig}>
        {trigger || (
          <Button
            icon={<LuPenLine />}
            type="text"
            className="!text-2xl !text-blue-600"
          />
        )}
      </CompoundModal.Trigger>
      <CompoundModal.Content {...contentConfig}>
        {content}
      </CompoundModal.Content>
    </CompoundModal>
  );
}
