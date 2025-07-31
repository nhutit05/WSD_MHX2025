"use client"
import React, { useState } from 'react'

const ExpenseForm = () => {
  return (
    <form action="POST" className='flex flex-col w-full  h-max p-10 border-2 border-black transform-border rounded-3xl'>
            <h3 className='w-full font-bold text-center p-5'>Nhập chi tiêu</h3>
            <input type="text" placeholder='Tên khoản chi' className='w-full p-4 m-2 '/> <br />
            <input type="number" placeholder='Số tiền' className='w-full p-4 m-2'/> <br />
            <input type="date" placeholder='Chọn ngày' className='w-full p-4 m-2'/> <br />
            <button className='self-center w-fit h-fit p-3 font-bold text-center bg-yellow-200 rounded'>Thêm</button>
    </form>
  )
}

export default ExpenseForm