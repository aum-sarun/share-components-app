'use client';


import { Table, DataFieldsEnum } from "./components/Table";

export default function Home() {
  const columns = [
    { header: "Name", field: DataFieldsEnum.NAME },
    { header: "Location", field: DataFieldsEnum.LOCATION },
    {
      header: "Status",
      render: (row: any) => (
        <span
          className={
            row.status === "Active" ? "text-green-600" : "text-red-600"
          }
        >
          {row.status}
        </span>
      ),
    },
    {
      header: "Actions",
      render: (row: any) => (
        <div className="flex gap-x-6">
          <button
            onClick={() => console.log(row)}
            className="items-center justify-center rounded-lg border px-3"
          >
            Edit
          </button>
          <button
            onClick={() => console.log(row)}
            className="items-center justify-center rounded-lg border px-3"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const data = [
    { name: "Alice", age: 25, location: "New York", status: "Active" },
    { name: "Bob", age: 30, location: "Los Angeles", status: "Inactive" },
    { name: "Charlie", age: 35, location: "Chicago", status: "Active" },
  ];

  return (
    <>
      <Table columns={columns} data={data}></Table>
    </>
  );
}
