import { useGetAcademicSemestersQuery } from "../../../redux/features/admin/academicManagement";
import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TAcademicSemester } from "../../../Types/academicSemesterTypes";

export type TTableData=Pick<TAcademicSemester,"_id"|"name"|"startMonth"|"endMonth"|'year'>

const columns: TableColumnsType<TTableData> = [
  {
    title: "Name",
    dataIndex: "name",
    showSorterTooltip: { target: "full-header" },
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
   
  },
  {
    title: "Year",
    dataIndex: "year",
   
  },
  {
    title: "Start Month",
    dataIndex: "startMonth",
    
  },
  {
    title: "End Month",
    dataIndex: "endMonth",
    
  },
];

const onChange: TableProps<TTableData>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const AcademicSemester = () => {
  const { data: semesterData } = useGetAcademicSemestersQuery(undefined);
  // console.log(semesterData);
  const tableData = semesterData?.data?.map(
    ({ _id, name, startMonth, endMonth, year }) => ({
      _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );
  // console.log(tableData);

  return (
   
    <Table<TTableData>
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicSemester;
