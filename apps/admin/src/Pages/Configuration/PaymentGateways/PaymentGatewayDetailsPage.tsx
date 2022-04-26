import { RouteComponentProps } from "react-router-dom"
import { DetailsPage } from "~/packages/components/Page/DetailsPage/DetailsPage"
import { getPaymentGatewayDetailsMeta } from "~/TableSearchMeta/PaymentGateway/PaymentGatewayDetailsMeta"
import { PaymentGatewayQueries } from "~/packages/services/Api/Queries/AdminQueries/PaymentGateways"

export function PaymentGatewayDetailsPage(props: RouteComponentProps<{ paymentGatewayID?: string }>) {
  const PaymentGatewayID = props?.match?.params?.paymentGatewayID

  return <DetailsPage getMeta={getPaymentGatewayDetailsMeta} getDetailsPageContent={PaymentGatewayQueries.getSingle} entityType="paymentGateway" entityID={PaymentGatewayID} titleKey="transaction_request_id" />
}