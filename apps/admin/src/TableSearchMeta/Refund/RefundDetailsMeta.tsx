import { CardContainer, IDetailsSummary } from "~/packages/components/Page/DetailsPage/DetailsPageInterfaces"
import { IDetailsMeta, IDetailsTabMeta } from "~/packages/components/Page/DetailsPage/Common"
import { renderLink } from "~/packages/components/ResponsiveTable/tableUtils"
import { IconButton } from "~/packages/components/Form/Buttons/IconButton"
import { RefundQueries } from "~/packages/services/Api/Queries/AdminQueries/Refunds"
import { message } from "antd"

export const getRefundDetailsMeta = (refund: { [key: string]: any }): IDetailsMeta => {
  const cancelEnrollment = async () => {
    const resp = await RefundQueries.cancelEnrollment({ params: { refund_id: refund.id } })
    if (!resp.success) {
      if (Array.isArray(resp.error)) resp.error.forEach(e => message.error(e.message || 'Failed'))
      else message.error('Failed')
    }
  }

  const updateTaxRecord = async () => {
    const resp = await RefundQueries.updateTaxRecord({ params: { refund_id: refund.id } })
    if (!resp.success) {
      if (Array.isArray(resp.error)) resp.error.forEach(e => message.error(e.message || 'Failed'))
      else message.error('Failed')
    }
  }

  const sendInfoToCRM = async () => {
    const resp = await RefundQueries.sendInformationToCRM({ params: { refund_id: refund.id } })
    if (!resp.success) {
      if (Array.isArray(resp.error)) resp.error.forEach(e => message.error(e.message || 'Failed'))
      else message.error('Failed')
    }
  }

  const summaryInfo: CardContainer = {
    title: `Refund: ${refund.id}`,
    contents: [
      { label: 'Store', value: renderLink(`/administration/store/${refund.store.id}`, refund.store.name), },
      { label: 'Payment ID', value: renderLink(`/storefront-data/payment/${refund.payment.id}`, refund.payment.id), },
      { label: 'Student', value: renderLink(`/storefront-data/student/${refund.profile.id}`, `${refund.profile.first_name} ${refund.profile.last_name}`), },
      { label: 'Order ID', value: renderLink(`/storefront-data/order/${refund.cart_id}`, refund.cart_id), },
      // { label: 'Product', value: renderLink(`/store/product/${refund.product.id}`, refund.product.title), },
      { label: 'Product', value: refund.product.title, },
      { label: 'Paid Amount', value: refund.paid_amount, },
      { label: 'Refund Amount', value: refund.amount, },
      { label: 'Refund Status', value: refund.status, },
      { label: 'Cancel Enrollment', value: refund.task_cancel_enrollment, render: (text) => <IconButton iconType="run" toolTip="Start" text={text} onClick={cancelEnrollment} /> },
      { label: 'Tax Refund', value: refund.task_tax_refund, render: (text) => <IconButton iconType="run" toolTip="Start" text={text} onClick={updateTaxRecord} /> },
      { label: 'CRM Update', value: refund.task_crm_update, render: (text) => <IconButton iconType="run" toolTip="Start" text={text} onClick={sendInfoToCRM} /> },
    ]
  }

  const summaryMeta: IDetailsSummary = {
    summary: [summaryInfo]
  }

  const tabMetas: IDetailsTabMeta[] = [
    {
      tabTitle: "Summary",
      tabType: "summary",
      tabMeta: summaryMeta,
      helpKey: "refundSummaryTab"
    },
  ]

  return {
    pageTitle: `Refund: ${refund.id}`,
    tabs: tabMetas
  }
}