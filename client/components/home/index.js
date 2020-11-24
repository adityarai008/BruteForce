import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Header from '../layout/header'
import styles from "./home.module.css"
class Item1 extends React.Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef();
    }
    componentDidMount(){
        //console.log(
            this.myRef.current.style.height = screen.height.toString() + 'px';
    }
    render(){
        return(
            
            <div ref={this.myRef} className={styles.item1}>
                <div className={styles.item11}>
                    <span className={styles.hide}>&#123;</span>
                </div>
                <div className={styles.item12}>
                    <div className={styles.item121}>
                        <div className={styles.head}>
                            We ❤️ people who code
                        </div>
                    </div>
                    <div className={styles.item122}>
                        <p><center>We help programmers learn by helping others. We are a community which helps programmers reach solutions to various competitive programming problems.</center></p>
                    </div>
                </div>
                <div className={styles.item13}>
                <span className={styles.hide}>&#125;</span>
                </div>
            </div>
        )
    }
}

const Home = () => {
    return(
        <>
            <Header/>
            <Item1/>
        </>
    )
}

export default Home