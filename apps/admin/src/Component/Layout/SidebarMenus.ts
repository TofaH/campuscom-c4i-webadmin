import { checkAdminApiPermission } from "~/packages/services/Api/Permission/AdminApiPermission";
import { getCampusListTableColumns } from "~/TableSearchMeta/Campus/CampusListTableColumns";
import { getCompanyListTableColumns } from "~/TableSearchMeta/Company/CompanyListTableColumns";
import { getCourseListTableColumns } from "~/TableSearchMeta/Course/CourseListTableColumns";
import { getCourseProviderListTableColumns } from "~/TableSearchMeta/CourseProvider/CourseProviderListTableColumns";
import { getDiscountProgramListTableColumns } from "~/TableSearchMeta/DiscountProgram/DiscountProgramListTableColumns";
import { getGlobalConfigurationListTableColumns } from "~/TableSearchMeta/GlobalConfiguration/GlobalConfigurationListTableColumns";
import { getIdentityProviderListTableColumns } from "~/TableSearchMeta/IdentityProvider/IdentityProviderListTableColumns";
import { getInstructorListTableColumns } from "~/TableSearchMeta/Instructor/InstructorListTableColumns";
import { getMembershipProgramListTableColumns } from "~/TableSearchMeta/MembershipProgram/MembershipProgramListTableColumns";
import { getOrderListTableColumns } from "~/TableSearchMeta/Order/OrderListTableColumns";
import { getPaymentListTableColumns } from "~/TableSearchMeta/Payment/PaymentListTableColumns";
import { getPaymentGatewayListTableColumns } from "~/TableSearchMeta/PaymentGateway/PaymentGatewayListTableColumns";
import { getPaymentGatewayConfigListTableColumns } from "~/TableSearchMeta/PaymentGatewayConfig/PaymentGatewayConfigListTableColumns";
import { getProductListTableColumns } from "~/TableSearchMeta/Product/ProductListTableColumns";
import { getPublishingListTableColumns } from "~/TableSearchMeta/Publishing/PublishingListTableColumns";
import { getQuestionListTableColumns } from "~/TableSearchMeta/Question/QuestionListTableColumns";
import { getRefundListTableColumns } from "~/TableSearchMeta/Refund/RefundListTableColumns";
import { getRoleListTableColumns } from "~/TableSearchMeta/Role/RoleListTableColumns";
import { getStoreListTableColumns } from "~/TableSearchMeta/Store/StoreListTableColumns";
import { getStudentListTableColumns } from "~/TableSearchMeta/Student/StudentListTableColumns";
import { getSubjectListTableColumns } from "~/TableSearchMeta/Subject/SubjectListTableColumns";
import { getUserListTableColumns } from "~/TableSearchMeta/User/UserListTableColumns";

export interface ISidebarMenu {
  title: string
  url: string
  permission?: boolean
  submenu: ISidebarMenu[]
}

export interface ITreeItem {
  title: string
  key: string
  children: ITreeItem[]
}

export const getSidebarMenus = (): ISidebarMenu[] => [
  {
    title: "Institute",
    url: "",
    submenu: [
      {
        title: "Courses",
        submenu: [],
        url: "/institute/course",
        permission: checkAdminApiPermission(getCourseListTableColumns().searchFunc)
      },
      {
        title: "Instructors",
        submenu: [],
        url: "/institute/instructor",
        permission: checkAdminApiPermission(getInstructorListTableColumns().searchFunc)
      },
      {
        title: "Campuses",
        submenu: [],
        url: "/institute/campus",
        permission: checkAdminApiPermission(getCampusListTableColumns().searchFunc)
      },
    ],
    permission: checkAdminApiPermission(getCourseListTableColumns().searchFunc) ||
      checkAdminApiPermission(getInstructorListTableColumns().searchFunc) ||
      checkAdminApiPermission(getCampusListTableColumns().searchFunc)
  },
  {
    title: "Store",
    url: "",
    submenu: [
      {
        title: "Subjects",
        url: "/store/subject",
        submenu: [],
        permission: checkAdminApiPermission(getSubjectListTableColumns().searchFunc)
      },
      {
        title: "Publishing",
        url: "/store/publishing",
        submenu: [],
        permission: checkAdminApiPermission(getPublishingListTableColumns().searchFunc)
      },
      {
        title: "Products",
        url: "/store/product",
        submenu: [],
        permission: checkAdminApiPermission(getProductListTableColumns().searchFunc)
      },
    ],
    permission: checkAdminApiPermission(getSubjectListTableColumns().searchFunc) ||
      checkAdminApiPermission(getPublishingListTableColumns().searchFunc) ||
      checkAdminApiPermission(getProductListTableColumns().searchFunc)
  },
  {
    title: "Storefront Data",
    url: "",
    submenu: [
      {
        title: "Orders ",
        url: "/storefront-data/order",
        submenu: [],
        permission: checkAdminApiPermission(getOrderListTableColumns().searchFunc)
      },
      {
        title: "Payments ",
        url: "/storefront-data/payment",
        submenu: [],
        permission: checkAdminApiPermission(getPaymentListTableColumns().searchFunc)
      },
      {
        title: "Students ",
        url: "/storefront-data/student",
        submenu: [],
        permission: checkAdminApiPermission(getStudentListTableColumns().searchFunc)
      },
    ],
    permission: checkAdminApiPermission(getOrderListTableColumns().searchFunc) ||
      checkAdminApiPermission(getPaymentListTableColumns().searchFunc) ||
      checkAdminApiPermission(getStudentListTableColumns().searchFunc)
  },
  {
    title: "Administration",
    url: "",
    submenu: [
      {
        title: "Course Providers",
        url: "/administration/course-provider",
        submenu: [],
        permission: checkAdminApiPermission(getCourseProviderListTableColumns().searchFunc)
      },
      {
        title: "Stores",
        url: "/administration/store",
        submenu: [],
        permission: checkAdminApiPermission(getStoreListTableColumns().searchFunc)
      },
      {
        title: "Roles",
        url: "/administration/role",
        submenu: [],
        permission: checkAdminApiPermission(getRoleListTableColumns().searchFunc)
      },
      {
        title: "Users",
        url: "/administration/user",
        submenu: [],
        permission: checkAdminApiPermission(getUserListTableColumns().searchFunc)
      },
      {
        title: "Refunds",
        url: "/administration/refund",
        submenu: [],
        permission: checkAdminApiPermission(getRefundListTableColumns().searchFunc)
      },
      {
        title: "Discount Programs",
        url: "/administration/discount-program",
        submenu: [],
        permission: checkAdminApiPermission(getDiscountProgramListTableColumns().searchFunc)
      },
      {
        title: "Membership Programs",
        url: "/administration/membership-program",
        submenu: [],
        permission: checkAdminApiPermission(getMembershipProgramListTableColumns().searchFunc)
      },
      {
        title: "Questions",
        url: "/administration/question",
        submenu: [],
        permission: checkAdminApiPermission(getQuestionListTableColumns().searchFunc)
      },
      {
        title: "Companies",
        url: "/administration/company",
        submenu: [],
        permission: checkAdminApiPermission(getCompanyListTableColumns().searchFunc)
      },
    ],
    permission: checkAdminApiPermission(getCourseProviderListTableColumns().searchFunc) ||
      checkAdminApiPermission(getStoreListTableColumns().searchFunc) ||
      checkAdminApiPermission(getRoleListTableColumns().searchFunc) ||
      checkAdminApiPermission(getUserListTableColumns().searchFunc) ||
      checkAdminApiPermission(getRefundListTableColumns().searchFunc) ||
      checkAdminApiPermission(getDiscountProgramListTableColumns().searchFunc) ||
      checkAdminApiPermission(getMembershipProgramListTableColumns().searchFunc) ||
      checkAdminApiPermission(getQuestionListTableColumns().searchFunc) ||
      checkAdminApiPermission(getCompanyListTableColumns().searchFunc)
  },
  {
    title: "Configuration",
    url: "",
    submenu: [
      {
        title: "Identity Providers",
        url: "/configuration/identity-provider",
        submenu: [],
        permission: checkAdminApiPermission(getIdentityProviderListTableColumns().searchFunc)
      },
      {
        title: "Payment Gateways",
        url: "/configuration/payment-gateway",
        submenu: [],
        permission: checkAdminApiPermission(getPaymentGatewayListTableColumns().searchFunc)
      },
      {
        title: "Payment Gateway Configs",
        url: "/configuration/payment-gateway-config",
        submenu: [],
        permission: checkAdminApiPermission(getPaymentGatewayConfigListTableColumns().searchFunc)
      },
      {
        title: "Global Configurations",
        url: "/configuration/global-configuration",
        submenu: [],
        permission: checkAdminApiPermission(getGlobalConfigurationListTableColumns().searchFunc)
      },
    ],
    permission: checkAdminApiPermission(getIdentityProviderListTableColumns().searchFunc) ||
      checkAdminApiPermission(getPaymentGatewayListTableColumns().searchFunc) ||
      checkAdminApiPermission(getPaymentGatewayConfigListTableColumns().searchFunc) ||
      checkAdminApiPermission(getGlobalConfigurationListTableColumns().searchFunc)
  }
]

export const getTreeMenus = (data: ISidebarMenu[], keyPrepend?: string): ITreeItem[] => data.map(i => {
  const key = `${keyPrepend || ''}${i.title}`;
  return {
    title: i.title,
    key,
    children: getTreeMenus(i.submenu, `${key}__`)
  }
})

export const treeMenus = getTreeMenus(getSidebarMenus())