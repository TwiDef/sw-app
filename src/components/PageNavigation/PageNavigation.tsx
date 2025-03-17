import React from 'react'
import { Pagination } from 'antd'
import type { PaginationProps } from 'antd'

import './PageNavigation.css'

type PageNavigation = {
  totalElements?: number,
  currentPage?: number,
  setCurrentPage: (page: number) => void
}

const PageNavigation: React.FC<PageNavigation> = ({ totalElements, currentPage, setCurrentPage }) => {

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page)
  }

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <Pagination
        onChange={onChange}
        current={currentPage}
        align="center"
        total={totalElements}
        showSizeChanger={false}
        responsive={true}
      />
    </div>
  )
}

export default PageNavigation