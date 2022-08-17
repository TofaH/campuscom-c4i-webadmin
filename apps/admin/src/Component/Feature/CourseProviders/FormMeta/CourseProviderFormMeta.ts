import { IMAGE_INPUT_FORMAT } from "~/Configs/input"
import { IField, TEXT, FILE, EDITOR, DROPDOWN } from "@packages/components/lib/Form/common"
// import { getResourceType } from "~/ApiServices/Service/RefLookupService"

export const CourseProviderFormMeta: IField[] = [
  {
    label: 'Name',
    fieldName: 'name',
    inputType: TEXT,
    rules: [{ required: true, message: "This field is required!" }]
  },
  {
    label: 'Code',
    fieldName: 'code',
    inputType: TEXT,
    rules: [{ required: true, message: "This field is required!" }]
  },
  {
    label: 'Summary',
    fieldName: 'summary',
    inputType: EDITOR,
    rules: [{ required: true, message: "This field is required!" }]
  },
  {
    label: 'Website',
    fieldName: 'website_url',
    inputType: TEXT,
  },
  {
    label: 'Description',
    fieldName: 'description',
    inputType: EDITOR,
    rules: [{ required: true, message: "This field is required!" }]
  },
  {
    label: 'Logo',
    inputType: FILE,
    fieldName: 'image_file',
    previewKey: "course_provider_logo_uri",
    accept: IMAGE_INPUT_FORMAT,
  },
  {
    label: 'Refund Email',
    fieldName: 'refund_email',
    inputType: TEXT,
  },
  {
    label: 'ERP',
    fieldName: 'configuration__erp',
    inputType: DROPDOWN,
    options: [
      {label: 'J1', value: 'j1'},
      {label: 'HIR', value: 'hir'},
      {label: 'Sonis', value: 'sonis'},
    ],
    rules: [{ required: true, message: "This field is required!" }]
  },
  {
    label: 'Password',
    fieldName: 'configuration__password',
    inputType: TEXT,
  },
  {
    label: 'Username',
    fieldName: 'configuration__username',
    inputType: TEXT,
  },
  {
    label: 'Auth Type',
    fieldName: 'configuration__auth_type',
    inputType: DROPDOWN,
    options: [
      {label: 'Basic', value: 'basic'},
      {label: 'No Auth', value: 'no_auth'},
    ],
  },
  {
    label: 'Enrollment URL',
    fieldName: 'configuration__enrollment_url',
    inputType: TEXT,
    rules: [{ required: true, message: "This field is required!" }]
  },
]
