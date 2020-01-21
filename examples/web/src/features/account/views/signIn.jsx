import React from 'react'
import z from '@z1/lib-feature-box'
import mx from '@z1/lib-feature-macros'

// main
export const signIn = mx.fn((t, a) =>
  mx.routeView.create('sign-in', {
    state() {
      return {
        initial: {
          data: {},
        },
        data({ event, status, error, data, next }) {
          console.log('SIGN-IN VIEW DATA', event, next)
          return {
            status,
            data,
            error,
          }
        },
      }
    },
    ui(ctx) {
      return props => {
        return (
          <div>
            <h1>Sign-in view</h1>
            <div>
              <z.ui.Link to="/">Home</z.ui.Link>
            </div>
          </div>
        )
      }
    },
  })
)
