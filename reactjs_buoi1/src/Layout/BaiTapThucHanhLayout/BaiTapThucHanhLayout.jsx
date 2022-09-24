import React, { Component } from 'react'


import Header from '../Header/Header'
import Banner from '../Body/Banner'
import Item from '../Body/Item'
import Fooder from '../Fooder/Fooder'

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Banner/>
            <Item/>
            <Fooder/>
        </div>
      
        

    )
  }
}
