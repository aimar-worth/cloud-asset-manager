import { useState, useEffect } from "react"
import fetchData from "./fetchData"

export default function usePopulateFields() {
  const user = localStorage.getItem("user")
  const [fields, setFields] = useState({
    tags: [],
    types: [],
    clouds: [],
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getTags = async () => {
      const res = await fetchData(user.jwt, "services")
      console.log(res)
      return res
    }
    const getTypes = async () => {
      const res = await fetchData(user.jwt, "assettypes")
      return res
    }
    const getClouds = async () => {
      const res = await fetchData(user.jwt, "clouds")
      return res
    }
    getTags()
    getTypes()
    getClouds()
    // setFields({ tags: getTags, types: getTypes, clouds: getClouds })
    // setLoading(false)
  }, [user.jwt])

  console.log("FIELDS HOOK", fields)

  return { fields, loading }
}
