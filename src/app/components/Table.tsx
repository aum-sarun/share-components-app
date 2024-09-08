export enum DataFieldsEnum {
  NAME = "name",
  AGE = "age",
  LOCATION = "location",
  STATUS = "status",
}

interface Column {
  header: string;
  field?: DataFieldsEnum; // Optional
  render?: (row: any) => JSX.Element; // Optional Function that renders custom content
}

interface Data {
  name: string;
  age: number;
  location: string;
  status: string;
}

interface TableProps {
  columns: Column[]; // Array of Column objects
  data: Data[]; // Adjust this type as needed
}

export function Table({ columns, data }: TableProps) {
  return (
    <table className="text-sm">
      <thead className="text-blue-600 border-b border-b-zinc-950/10">
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="px-3">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b h-10">
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="">
                {column.render ? column.render(row) : row[column.field!]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
