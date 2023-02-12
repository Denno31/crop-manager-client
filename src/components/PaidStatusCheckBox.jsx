import { Checkbox } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { updatePaidStatusTask } from '../actions/taskActions'


const PaidStatusCheckBox = (params) => {
const dispatch = useDispatch()
const handleUpdateStatus=(task)=>{
    console.log(params)
    dispatch(updatePaidStatusTask(task))
}
  return (
    <Checkbox checked={params.row?.paid} onClick={()=>handleUpdateStatus(params.row.id)}/>
  )
}

export default PaidStatusCheckBox