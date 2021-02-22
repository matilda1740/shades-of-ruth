import React, { Component } from 'react'

import './Tags.css'
export default class Tags extends Component {
    render(props) {
        return (
            <section className="tags">
                <hr className="tag_lines"/>
                <h3 className="tag_title">{this.props.title}</h3> 
                <hr className="tag_lines"/>
            </section>
        )
    }
}
