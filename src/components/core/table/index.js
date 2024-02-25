import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { flexRender, Table } from '@tanstack/react-table';
import { useMemo } from 'react';


const TableComponent = ({
  table,
  showFooter,
  totalCount,
  onRowCountSelect,
  handleNextPrevPage,
  currentPage,
  pageSize,
  onRowClick,
  loading,
  hidePagination = false,
}) => {
  const currentDataCount = useMemo(() => (Number(currentPage) - 1) * pageSize, [currentPage, pageSize]);
  return (
    <Card className="flex flex-col w-full">

        <CardBody className="overflow-auto px-0">
        <div className="inline-block min-w-full py-4 p-0.5">
          <div className="overflow-hidden  ">
            <table className="min-w-full text-left">
              <thead className="">
                {table && table?.getHeaderGroups()?.map((headerGroup) => (
                  <tr className="last:pr-8" key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="border-y border-blue-gray-100 text-left bg-blue-gray-50/50 p-4"
                      >
                        {header.isPlaceholder ? null : (
                          <Typography
                          variant="small"
                          color="blue-gray"
                            {...{
                              className: header.column.getCanSort() ? 'font-normal leading-none opacity-70 cursor-pointer select-none' : 'font-normal leading-none opacity-70',
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {{
                              asc: ' 🔼',
                              desc: ' 🔽',
                            }[header.column.getIsSorted()] ?? null}
                          </Typography>
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="relative rounded-2xl">
                {table?.getRowModel().rows.length <= 0 && loading ? (
                  <div className="flex items-center justify-center w-full h-28">
                    <progress className="absolute left-0 right-0 w-56 mx-auto progress"></progress>
                  </div>
                ) : (
                  table?.getRowModel().rows.map((row) => (
                    <tr key={row.id} className={`border-b bg-white even:bg-[#F7F6F7] ${onRowClick ? 'cursor-pointer' : ''}`}>
                      {row.getVisibleCells().map((cell) => (
                        <td
                          onClick={() => {
                            onRowClick(row.original)
                             
                          }}
                          className="whitespace-nowrap px-5 py-6 text-centerleft last:pr-10 text-[18px] leading-6 font-[375] text-black"
                          key={cell.id}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))
                )}

                {table?.getRowModel().rows.length === 0 && !loading ? (
                  <div className="flex items-center justify-center w-full h-28">
                    <div className="absolute left-0 right-0 w-56 mx-auto text-black">No Data Available</div>
                  </div>
                ) : null}
              </tbody>
              {showFooter ? (
                <tfoot className="border-t bg-gray-50">
                  {table?.getFooterGroups().map((footerGroup) => (
                    <tr key={footerGroup.id}>
                      {footerGroup.headers.map((header) => (
                        <th key={header.id} colSpan={header.colSpan}>
                          {header.isPlaceholder ? null : flexRender(header.column.columnDef.footer, header.getContext())}
                        </th>
                      ))}
                    </tr>
                  ))}
                </tfoot>
              ) : null}
            </table>
            {!hidePagination && (
              <div className="flex items-center justify-end gap-2 py-4 mr-8 text-color-neutral-50">
                <div>
                  Rows per page
                  <select
                    style={{ border: '1px solid #000' }}
                    className="!border rounded-lg py-0.5 outline-none px-1.5 ml-1"
                    value={pageSize || table?.getState().pagination.pageSize}
                    onChange={(e) => {
                      onRowCountSelect(Number(e.target.value));
                      table?.setPageSize(Number(e.target.value));
                    }}
                  >
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        {pageSize}
                      </option>
                    ))}
                  </select>
                </div>

                <span className="flex items-center gap-1 text-color-neutral-30">
                  {totalCount === 0 ? currentDataCount : currentDataCount + 1} -{' '}
                  {totalCount - currentDataCount > pageSize ? currentDataCount + pageSize : totalCount} of {totalCount}
                </span>
                <button className="p-1 border rounded" onClick={() => handleNextPrevPage?.('prev')} disabled={Number(currentPage) <= 1}>
                  {'<'}
                </button>
                <button
                  className="p-1 border rounded"
                  onClick={() => handleNextPrevPage?.('next')}
                  disabled={pageSize * Number(currentPage) >= totalCount}
                >
                  {'>'}
                </button>
              </div>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TableComponent;
