import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import AppClass from './AppClass'
import '@testing-library/jest-dom/extend-expect'



describe('5 tests for MVP', () => {
  test('Should render Cooridinates and "You moved X times"', () => {
    render(<AppClass />)
    const coords = screen.getByText(/Coordinates/i)
    const step = screen.getByText(/You moved 0 times/i)
    expect(coords).toBeInTheDocument()
    expect(step).toBeInTheDocument()
  })
  test('Should render up, down, left, right, reset, submit buttons to screen', () => {
    render(<AppClass />)
    const up = document.querySelector('#up')
    const down = document.querySelector('#down')
    const left = document.querySelector('#left')
    const right = document.querySelector('#right')
    const reset = document.querySelector('#reset')
    const submit = document.querySelector('#submit')
    expect(up).toBeInTheDocument()
    expect(down).toBeInTheDocument()
    expect(left).toBeInTheDocument()
    expect(right).toBeInTheDocument()
    expect(reset).toBeInTheDocument()
    expect(submit).toBeInTheDocument()
  })
  test('Should update value in email input when typing', ()=> {
    render(<AppClass/>)
    const email = document.querySelector('#email')
    fireEvent.change(email, { target: { value: 'jordon@gmail.com' } })
        expect(email).toHaveValue('jordon@gmail.com')
})
  test('can submit email', ()=> {
    render(<AppClass/>)
    const email = document.querySelector('#email')
    const submit = document.querySelector('#submit')
    fireEvent.change(email, { target: { value: 'jordon@gmail.com' } })
        expect(email).toHaveValue('jordon@gmail.com')
    fireEvent.click(submit)
  })
    test('clicking up, down moves increases the steps by two', ()=> {
      render(<AppClass/>)
      const up = document.querySelector('#up')
      const down = document.querySelector('#down')
      fireEvent.click(up)
      fireEvent.click(down)
      const step = screen.getByText(/You moved 2 times/i)
      expect(step).toBeInTheDocument()
    })
})
