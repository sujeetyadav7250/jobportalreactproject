import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ApplyJob = () => {

  const { id } = useParams()
  const [JobData, setJobData] = useState(null)
  const fetchJob = async () => {

  }
  return (
    <div>
      ApplyJob
    </div>
  )
}

export default ApplyJob

