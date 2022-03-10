import React from "react"
import { RouteComponentProps } from "react-router-dom"
import { DetailsPage } from "~/packages/components/Page/DetailsPage/DetailsPage"
import { getCourseDetailsMeta } from "~/TableSearchMeta/Course/CourseDetailsMeta"
import { CourseQueries } from "~/packages/services/Api/Queries/AdminQueries/Courses"

export function CourseDetailsPage(props: RouteComponentProps<{ courseID?: string }>) {
  const CourseID = props?.match?.params?.courseID
  const Param: { [key: string]: any } = { id: CourseID }
  const queryFunc = () => CourseQueries.getSingle!({ params: Param })

  return <DetailsPage getMeta={getCourseDetailsMeta} getDetailsPageContent={queryFunc} entityType="course" entityID={CourseID} titleKey="name" />
}