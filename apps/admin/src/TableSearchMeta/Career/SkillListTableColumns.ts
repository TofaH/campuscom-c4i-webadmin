import { TableColumnType } from "~/packages/components/ResponsiveTable"
import { ITableMeta } from "~/packages/components/ResponsiveTable/ITableMeta"
import { CareerQueries } from "~/packages/services/Api/Queries/AdminQueries/Careers"
import { QueryConstructor } from "~/packages/services/Api/Queries/AdminQueries/Proxy"

export const skillListTableColumns: TableColumnType = [
  {
    title: 'Skill Type',
    dataIndex: 'skill_type',
    sorter: (a: any, b: any) => a.soc_code - b.soc_code,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a: any, b: any) => a.name - b.name
  },
]

export const getSkillListTableColumns = (isModal = false): ITableMeta => {
  return {
    columns: skillListTableColumns,
    searchFunc: QueryConstructor((params) => CareerQueries.getSkillsByCourse(params), [CareerQueries.getSkillsByCourse]),
    tableName: 'Skill'
  }
}
