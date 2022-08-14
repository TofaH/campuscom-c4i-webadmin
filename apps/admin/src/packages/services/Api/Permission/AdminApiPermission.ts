import { IQuery } from "~/packages/services/Api/Queries/AdminQueries/Proxy/types"
import { getUser } from "~/packages/services/Api/utils/TokenStore"
import { IApiPermission } from "~/packages/services/Api/utils/Interfaces"
import { checkApiPermission } from "./Permission"


export const checkAdminApiPermission = (data: IQuery | IApiPermission[]): boolean => {
  const user = getUser()
  const permissions = Array.isArray(data) ? data : data.__permissions

  if (!user) return false
  if (user.is_superuser) return true
  if (!permissions.length) return false

  if (permissions.some(permission => !checkApiPermission(permission, user.permissions))) return false
  else return true
}
