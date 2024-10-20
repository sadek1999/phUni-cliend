import React from "react";
import { useGetAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement";
import { Button, Table } from "antd";

export type TFacultyData={
_id:string,
name:string,
}
const AcademicFaculty = () => {
  const {
    data: facultyData,
    isLoading,
    isFetching,
  } = useGetAcademicFacultyQuery(undefined);
  console.log(facultyData);
  const tableData = facultyData?.data?.map(({ _id, name }:TFacultyData) => ({
    key: _id,
    name,
  }));
  const columns: TableColumnsType<TFacultyData> = [
      {
        title: "Name",
        dataIndex: "name",
        // showSorterTooltip: { target: "full-header" },
       
      },
      ,{
        title:"Action",
        key:"x",
        render:()=>{
          return (
            <div>
           <Button>Delete</Button>
          </div>
          )

        }
      }
    ];
//   const onChange: TableProps<TFacultyData>["onChange"] = (
//       pagination,
//       filters,
//       sorter,
//       extra
//     ) => {
//       console.log("params", pagination, filters, sorter, extra);
//     //   if (extra.action === "filter") {
//     //     const queryParams: TQueryParams[] = [];
//     //     // console.log(filters.name)
//     //     filters?.name?.forEach((item) => {
//     //       queryParams.push({ name: "name", value: item });
//     //     });
//     //     filters.year?.forEach((item) => {
//     //       queryParams.push({ name: "year", value: item });
//     //     });
//     //     setParams(queryParams);
//     //   }
//     };
  return (
   
        <Table<TFacultyData>
      loading={isLoading}
      columns={columns}
      dataSource={tableData}
    //   onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicFaculty;
