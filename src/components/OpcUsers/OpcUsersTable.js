import React, { useState } from 'react'
import TableComponent from '../core/table';
import { usePagination } from '@/src/utils/pagination';
import { getCoreRowModel, useReactTable, getFilteredRowModel } from '@tanstack/react-table';
import { useRouter } from 'next/router';

export default function OPCUsersTable({totalCount,defaultData,columns}) {
  const [loading,setLoading] = useState(false)
  const [data, setData] = useState(defaultData);
  const { state: paginationState, dispatch } = usePagination();
  const [total, setTotal] = useState(totalCount);
  const router = useRouter()
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div> 
       <TableComponent
        loading={loading}
        pageSize={paginationState.perPage}
        currentPage={paginationState.pageNumber}
        handleNextPrevPage={async (nextOrPrev) => {
          if (nextOrPrev === 'next') {
            dispatch({ type: 'NEXT_PAGE', payload: data[data.length - 1].id });
            const paginationObj = { ...paginationState, cursor: data[data.length - 1].id, pageNumber: paginationState.pageNumber + 1 };
          }
          if (nextOrPrev === 'prev') {
            dispatch({ type: 'PREVIOUS_PAGE', payload: data[0].id });
            const paginationObj = { ...paginationState, cursor: data[0].id, pageNumber: paginationState.pageNumber - 1 };
          }
        }}
        onRowClick={(rowData) => {
          router.push(`/opc-users/${rowData.client_id}`)
        }}
        onRowCountSelect={async (count) => {
          dispatch({ type: 'PER_PAGE_COUNT', payload: count });
          const paginationObj = { ...paginationState, perPage: count };
        }}
        totalCount={total}
        table={table}
      />
    </div>
  )
}
