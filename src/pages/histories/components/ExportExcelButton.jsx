import { Button } from "antd";
import { LuDownload } from "react-icons/lu";
import usePlayer from "../../../hooks/usePlayer";
import moment from "moment";
import { GAME_CATEGORY } from "../../../utils/constants";

export default function ExportExcelButton() {
  const { data: exportData } = usePlayer();
  const result = [
    "Tên người chơi",
    "Loại trò chơi",
    "Đáp án đúng",
    "Tổng câu hỏi",
    "Bắt đầu",
    "Kết thúc",
    "Thời gian",
    "Mã khuyến mãi",
  ];
  const data = exportData?.data?.result.map((item) => ({
    account: item.account,
    category: GAME_CATEGORY.find((category) => category.value === item.category)
      .label,
    correctAnswer: item.correctAnswer,
    totalQuestion: item.totalQuestion,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    time: moment(item.updatedAt).diff(moment(item.createdAt), "seconds"),
    promo_code: item.promo_code,
  }));

  function handleExport() {
    const csvString = [result, ...data]
      .map((row) => Object.values(row).join(","))
      .join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "export.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <Button
      icon={<LuDownload />}
      className="!bg-[var(--color-brand-primary)] !text-white"
      onClick={handleExport}
    >
      Xuất excel
    </Button>
  );
}
