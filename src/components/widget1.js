import React, { Component } from 'react'

const Widget1 = ()=> {
    return(

        <div class="widget" >
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ height: '300px',top:'50px' }}>
                    <h1>BE <span style={{color:'red'}}>FIT</span> HERE</h1>
                    <div class="flex-container">
                    <div class="child-center fs150"><i class="fas fa-heart"></i></div>
                    <div class="child-center fs150"><i class="fas fa-medkit"></i></div>
                    <div class="child-center fs150"><i class="fas fa-dumbbell"></i></div>
                    <div class="child-center fs150"><i class="far fa-clock"></i></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Widget1
