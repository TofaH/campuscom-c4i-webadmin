import { Input, Table } from "antd"
import { ColumnsType } from "antd/lib/table"
import { IGeneratedField, SearchFieldWrapper } from "~/packages/components/Form/common"
import { renderLink } from "~/packages/components/ResponsiveTable"


export const SectionPrice = (props: IGeneratedField) => {
  const values = props.formInstance.getFieldValue('sections') as any[]
  const columns: ColumnsType<any> = [
    {
      title: 'Section',
      dataIndex: 'name',
      render: (value, record) => renderLink(`/institute/section/${record.id}`, value)
    },
    {
      title: 'Course Provider Fee',
      dataIndex: 'provider_fee',
    },
    {
      title: 'Section Fee',
      dataIndex: 'fee',
      render: (_, record) => (
        <SearchFieldWrapper {...props} label={undefined} fieldName={`section__${record.id}`} rules={[{ required: true, message: "This field is required!" }]}>
          <Input
            type={"number"}
            disabled={props.disabled}
            placeholder={props.placeholder}
            onChange={props.onSelectedItems}
            autoComplete="off"
          />
        </SearchFieldWrapper>
      )
    },
    {
      title: 'Seat Capacity',
      dataIndex: 'seat_capacity',
    },
  ]

  return (
    <Table
      dataSource={values}
      bordered={true}
      pagination={false}
      columns={columns}
      rowKey={'id'}
    />
  )
}