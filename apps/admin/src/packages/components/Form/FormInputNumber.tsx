import React from "react"
import { SearchFieldWrapper, IGeneratedField } from "~/packages/components/Form/common"
import { InputNumber } from "antd"

export function FormInputNumber(
  props: IGeneratedField & {
    formatter?: (value: any) => string
    parser?: (value: any) => string
  }
) {
  // const maxLengthAndNegativeCheck = (object: any) => {
  //   if (object.target.value.length > object.target.maxLength) {
  //     object.target.value = object.target.value.slice(0, object.target.maxLength)
  //   }
  //   if (object.target.value.length < 1) {
  //     object.target.value = 0
  //   }
  // }
  return (
    <SearchFieldWrapper {...props}>
      <InputNumber
        maxLength={props.maxLength}
        style={{ width: "200px", textAlign: "right" }}
        max={props.maxValue ? props.maxValue : 999999}
        min={0}
        // {...(props.formatter && { formatter: props.formatter })}
        // {...(props.parser && { parser: props.parser })}
        disabled={props.disabled}
      // onInput={maxLengthAndNegativeCheck}
      />
    </SearchFieldWrapper>
  )
}