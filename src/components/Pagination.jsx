import { Pagination as AntdPagination } from "antd";
import { useSearchParams } from "react-router";

export default function Pagination({ total, ...rest }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageIndex = searchParams.get("pageIndex") || 1;
  const pageSize = searchParams.get("pageSize") || 20;

  function handlePageChange(page, pageSize) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("pageIndex", page);
    newSearchParams.set("pageSize", pageSize);
    setSearchParams(newSearchParams);
  }

  return (
    <div className="mt-4">
      <AntdPagination
        align="end"
        current={pageIndex}
        pageSize={pageSize}
        total={total}
        onChange={handlePageChange}
        showSizeChanger={true}
        pageSizeOptions={["20", "50", "100"]}
        {...rest}
      />
    </div>
  );
}
