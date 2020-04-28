import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'


export default class Services extends Component {
    state={
        services: [
            {
                icon:<FaCocktail/>,
                title:'free cocktails',
                info:'try our excellent range of cocktails from our professionally trained staff'
            },
            {
                icon:<FaHiking/>,
                title:'hiking trails',
                info:'our hotel has access to some of the most stunning trails in the region'
            },
            {
                icon:<FaShuttleVan/>,
                title:'24hr airport shuttle',
                info:'we can shuttle you in our minivan service any time of the day or night'
            },
            {
                icon:<FaBeer/>,
                title:'fine cuisine',
                info:'we have a range of dining experiences from our three restuarants inside'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className='service'>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>

            </section>
        ) 
    }
}
