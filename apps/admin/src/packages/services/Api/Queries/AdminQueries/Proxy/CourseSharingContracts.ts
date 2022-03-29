import { IQuery } from "./types"

export interface ICourseSharingContractQueries {
  getSingle: IQuery
  getPaginatedList: IQuery
  getList: IQuery
}