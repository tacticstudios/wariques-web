import React from 'react'
import Router from 'next/router'
import 'isomorphic-unfetch'
import "../styles.styl"

import Layout from '../components/layout'

export default class extends React.Component {
  static async getInitialProps () {
    const res = await fetch('https://glacial-hollows-73183.herokuapp.com/api/restaurants')
    const json = await res.json()
    return {
      restaurants: json
    }
  }

  render () {
    const { url, restaurants } = this.props

    return (
      <Layout>
        <div className="example">Hello Wariques!</div>
        <div>
        {
          restaurants.map((item) => (
            <div key={item._id}>
                {item.name}
            </div>
          ))
        }
        </div>
      </Layout>
    )
  }
}