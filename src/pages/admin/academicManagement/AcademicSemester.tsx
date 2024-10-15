import { useGetAcademicSemestersQuery } from "../../../redux/features/admin/academicManagement";

import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TAcademicSemester } from "../../../Types/academicSemesterTypes";
import { useState } from "react";
import { TQueryParams } from "../../../Types";

export type TTableData = Pick<
  TAcademicSemester,
  "name" | "startMonth" | "endMonth" | "year"
>;

const AcademicSemester = () => {
  const [params,setParams]=useState<TQueryParams[] | undefined>(undefined)
  const { data: semesterData } = useGetAcademicSemestersQuery(params);
  // console.log(semesterData);
  const tableData = semesterData?.data?.map(
    ({ _id, name, startMonth, endMonth, year }) => ({
      key: _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );
  

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      // showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Spring",
          value: "Spring",
        },
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
      ],
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
    if(extra.action==='filter'){
      const queryParams:TQueryParams[]=[]
      // console.log(filters.name)
      filters?.name?.forEach(item => {
        queryParams.push({name:"name",value:item})
      });
     filters.year?.forEach(item=>{
      queryParams.push({name:"year",value:item})
     })
    setParams(queryParams)
    }
  };
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
