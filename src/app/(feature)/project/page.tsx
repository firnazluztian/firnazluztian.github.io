"use client"
import dynamic from "next/dynamic"

const ProjectContainer = dynamic(()=> import("@/containers/project").then(mod=> mod.ProjectContainer), {ssr: false })

const Project = () => {

  return (
    <ProjectContainer />
  )
}

export default Project
