import React, { Component } from 'react'

class SecondSection extends Component {
    render () {
        return (
            <div id="instructors" class="container">
            <div class="row">
            <div class="col-12"><div class="section-spacing"></div></div>
                <div class="col-12">
                    <div class="section-heading white">
                        <h6>Fitness Gym</h6>
                        <h2>Ask the experts</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-lg-3">
                    <div class="experts-text">
                        <p>Donec id mattis est. Proin nunc sapien, gravida ut sapien ut, ultrices faucibus sapien. Proin vehicula varius ex, vel feugiat massa scelerisque id. Nullam vulputate a lectus non molestie.</p>
                    </div>
                </div>
                <div class="col-12 col-lg-9">
                    <div class="experts-team-members">

                      
                        <div class="single-team-members wow fadeInUp" data-wow-delay="0.2s" >
                            <img src="https://colorlib.com/preview/theme/fitnessgym/img/team-img/1.png" alt="" class="team" />
                            
                            <div class="team-members-info">
                                <h3>Julia Smith</h3>
                                <h6>Personal trainer</h6>
                            </div>
                        </div>

                        
                        <div class="single-team-members wow fadeInUp" data-wow-delay="0.3s" >
                            <img src="https://colorlib.com/preview/theme/fitnessgym/img/team-img/2.png" alt="" class="team" />
                            
                            <div class="team-members-info">
                                <h3>Mick Hamilton</h3>
                                <h6>Personal trainer</h6>
                            </div>
                        </div>

                        
                        <div class="single-team-members wow fadeInUp" data-wow-delay="0.4s" >
                            <img src="https://colorlib.com/preview/theme/fitnessgym/img/team-img/3.png" alt="" class="team" />
                          
                            <div class="team-members-info">
                                <h3>Jack Black</h3>
                                <h6>Personal trainer</h6>
                            </div>
                        </div>

                       
                        <div class="single-team-members wow fadeInUp" data-wow-delay="0.5s" >
                            <img src="https://colorlib.com/preview/theme/fitnessgym/img/team-img/4.png" alt=""  class="team" />
                         
                            <div class="team-members-info">
                                <h3>Criss James</h3>
                                <h6>Fitness trainer</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default SecondSection