import { RouteComponentProps } from "react-router-dom"
import { DetailsPage } from "~/packages/components/Page/DetailsPage/DetailsPage"
import { getStoreConfigurationDetailsMeta } from "~/TableSearchMeta/StoreConfiguration/StoreConfigurationDetailsMeta"
import { StoreConfigQueries } from "~/packages/services/Api/Queries/AdminQueries/StoreConfigs"

export function StoreConfigurationDetailsPage(props: RouteComponentProps<{ storeConfigurationID?: string }>) {
  const StoreConfigurationID = props?.match?.params?.storeConfigurationID

  return <DetailsPage getMeta={getStoreConfigurationDetailsMeta} getDetailsPageContent={StoreConfigQueries.getSingle} entityType="storeConfiguration" entityID={StoreConfigurationID} />
}