import { Col, Flex, Row } from "antd";
import { UniversalTable } from "../../../components/TableLayout";
import useAttendance from "../../../hooks/useAttendance";
import moment from "moment";
import DetailModal from "./DetailModal";
import Pagination from "../../../components/Pagination";

export default function AttendanceTable() {
  const attendanceData = useAttendance();

  const attendanceColumns = [
    { key: "account", title: "Tài khoản", dataIndex: "account" },
    {
      key: "totalDays",
      title: "Tổng số ngày",
      dataIndex: "totalDays",
    },
    {
      key: "lastAttendanceDate",
      title: "Lần điểm danh gần nhất",
      dataIndex: "lastAttendanceDate",
      render: (lastAttendanceDate) => {
        return (
          <b>{moment(lastAttendanceDate).format("DD/MM/YYYY HH:mm:ss")}</b>
        );
      },
    },
    {
      key: "action",
      title: "Hành động",
      dataIndex: "action",
      align: "center",
      render: (_, record) => <DetailModal record={record} />,
    },
  ];

  return (
    <>
      <UniversalTable
        queryData={attendanceData}
        columns={attendanceColumns}
        scroll={{ x: 500, y: 550 }}
        pagination={false}
      />
      <Pagination total={attendanceData?.data?.data?.pagination?.total} />
    </>
  );
}
