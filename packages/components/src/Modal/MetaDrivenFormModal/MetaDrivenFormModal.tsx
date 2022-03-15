import React, { useState } from "react"
import { Modal } from "~/Modal/Modal"
import { zIndexLevel } from "~/zIndexLevel"
import { IApiResponse } from "@packages/api/lib/utils/Interfaces"
import { IField } from "~/Form/common"
import { Form } from "antd"
import { eventBus } from "@packages/utilities/lib/EventBus"
import { ISimplifiedApiErrorMessage } from "@packages/api/lib/utils/HandleResponse/ProcessedApiError"
import { MetaDrivenForm } from "~/Form/MetaDrivenForm"

export const MetaDrivenFormModal = (props: {
  title: React.ReactNode
  meta: IField[]
  metaName?: string
  helpKey?: string
  isHorizontal?: boolean
  initialFormValue?: { [key: string]: any }
  defaultFormValue?: { [key: string]: any }
  formSubmitApi: (Params: any) => Promise<IApiResponse>
  closeModal: () => void
  refreshEventAfterFormSubmission?: string | symbol | symbol[] | string[] | Array<string | symbol>
}) => {
  const [formInstance] = Form.useForm()
  const [clearTrigger, setClearTrigger] = useState(false)
  const [error, setError] = useState<Array<ISimplifiedApiErrorMessage>>()
  const [loading, setLoading] = useState(false)
  const [stopFirstOnApplyChanges, setStopFirstOnApplyChanges] = useState(true)
  const clearParams = () => {
    Object.keys(formInstance.getFieldsValue()).forEach((key) => formInstance.setFieldsValue({ [key]: undefined }))
    setClearTrigger(!clearTrigger)
  }

  const submit = (newValues: { [key: string]: any }) => {
    setError([])
    setLoading(true)
    props.formSubmitApi(newValues).then((x) => {
      if (x.success) {
        if (props.refreshEventAfterFormSubmission && typeof props.refreshEventAfterFormSubmission === "string")
          eventBus.publish(props.refreshEventAfterFormSubmission)
        else if (props.refreshEventAfterFormSubmission && Array.isArray(props.refreshEventAfterFormSubmission))
          for (let i = 0; i < props.refreshEventAfterFormSubmission.length; i++) {
            eventBus.publish(props.refreshEventAfterFormSubmission[i])
          }
        setLoading(false)
        closeModal()
      } else {
        setError(x.error)
        setLoading(false)
      }
    })
  }

  const closeModal = () => {
    clearParams()
    props.closeModal()
  }

  return (
    <Modal closeModal={props.closeModal} width="1000px" zIndex={zIndexLevel.defaultModal}>
      <MetaDrivenForm
        meta={props.meta}
        metaName={props.metaName}
        title={props.title}
        helpKey={props.helpKey}
        loading={loading}
        isHorizontal={props.isHorizontal}
        isModal={true}
        closeModal={props.closeModal}
        initialFormValue={props.initialFormValue}
        defaultFormValue={props.defaultFormValue}
        applyButtonLabel="Submit"
        stopProducingQueryParams={true}
        errorMessages={error}
        onApplyChanges={(newValues: { [key: string]: any }) => {
          if (stopFirstOnApplyChanges) {
            setStopFirstOnApplyChanges(false)
          } else {
            console.log("submitting form ", newValues)
            submit(newValues)
          }
        }}
      />
    </Modal>
  )
}