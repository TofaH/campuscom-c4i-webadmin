import React, { useCallback } from "react"
import { Button, PaginationProps, Pagination as AntdPagination } from "antd"

export const Pagination = (props: {
  current: number
  total?: number
  onChange: (page: number, pageSize?: number) => void
  defaultPageSize: number
  showSummary?: boolean
}) => {
  const startPos = ((props.current - 1) * props.defaultPageSize) + 1
  let endPos = props.current * props.defaultPageSize
  endPos = endPos > (props.total || 0) ? (props.total || 0) : endPos

  const itemRender: PaginationProps['itemRender'] = useCallback((_, type, originalElement) => {
    if (type === 'prev') {
      return <Button title="Previous" children="Prev" />
    }
    if (type === 'next') {
      return <Button title="Next" children="Next" />
    }
    return originalElement;
  }, [])

  const handleShowAll = useCallback(() => {
    props.onChange(1, props.total)
    // eslint-disable-next-line
  }, [])

  return (
    <div className="mt-5 ml-10 mb-15">
      {props.showSummary ?
        <p>
          Viewing {startPos} to {endPos} of {props.total}
        </p>
        : null}
      <div style={{
        display: "flex"
      }}>
        <AntdPagination
          total={props.total || 0}
          pageSize={props.defaultPageSize}
          current={props.current}
          onChange={props.onChange}
          showSizeChanger={false}
          itemRender={itemRender}
          showLessItems
        />
        <Button className="ml-12" title="Show All" children={"Show All"} onClick={handleShowAll} />
      </div>
    </div>
  )
}
