import React from "react";
import { DataTable } from "carbon-components-react";
import { useQuery } from "@apollo/react-hooks";
import { ALL_BOOTCAMPS_QUERY } from "../graphql/queries";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
} = DataTable;

const getRowItems = (rows) =>
  rows.map((row) => ({
    ...row,
  }));

const headers = [
  {
    header: "Name",
    key: "name",
  },
  {
    header: "Description",
    key: "description",
  },
];

const BootcampList = () => {
  const { loading, error, data } = useQuery(ALL_BOOTCAMPS_QUERY);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const { allBootcamps } = data;
  // const headers = Object.keys(allBootcamps[0]).map((key) => ({
  //   // Capatalise the first letter
  //   header: key.slice(0, 1).toUpperCase().concat(key.slice(1, key.length)),
  //   key: key,
  // }));

  return (
    <div>
      <DataTable
        filterRows={function noRefCheck() {}}
        headers={headers}
        locale="en"
        overflowMenuOnHover
        rows={allBootcamps}
        render={({ rows, headers, getHeaderProps }) => (
          <TableContainer title="Bootcamps">
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    </div>
  );
};

export default BootcampList;
