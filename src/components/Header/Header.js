import React from 'react';
import image from '../../images/1.png'
import logo from '../../images/Logo.png'
import "./Header.css"

const Header = () => {
    return (
        <div style={{
            height: '515px',
            width: '1082px',
            marginLeft: '153px',
            marginTop: '40px',
            marginRight: '100px'

        }}>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <img src={logo} alt="" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a style={{
                                height: '26px',
                                width: '56px',
                                marginLeft: '888px',
                                marginTop: '53px'

                            }} class="nav-link active" aria-current="page" href="#">Home</a>
                            <a style={{
                                height: '26px',
                                width: '56px',
                                // marginLeft: '978px',
                                marginTop: '53px'

                            }} class="nav-link" href="#">About</a>
                            <a className="now" style={{
                                height: '26px',
                                width: '99px',
                                // left: '1068px',
                                // marginTop: '53px',
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: '18px',
                                // lineHeight: '26px',
                                // identical to box height, or 144% 

                                textAlign: 'center',
                                // letterSpacing: '0.02em',

                                color: '#FFFFFF',


                            }} class="nav-link" href="#">Order Now</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div style={{
                position: 'absolute',
                width: '1050px',
                height: '432px',
                left: '185px',
                top: '123px'
            }}>
                <h2 style={{/* Redux 91 */


                    position: 'absolute',
                    width: '520px',
                    height: '112px',
                    marginLeft: '185px',
                    marginTop: '249px',

                    fontFamily: 'Lato',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '73px',
                    lineHeight: '88px',

                    color: '#3E3C3C'
                }}>Redux 91</h2>
                <h1 style={{/* Restaurent */


                    position: 'absolute',
                    width: '520px',
                    height: '106px',
                    marginLeft: '185px',
                    marginTop: '321px',

                    fontFamily: 'Lato',
                    fontStyle: 'normal',
                    fontWeight: '800',
                    fontSize: '97px',
                    lineHeight: '116px',

                    /* Primary */

                    color: '#17B16D'
                }}>Restaurent</h1>
                <p style={{/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley */


                    position: 'absolute',
                    width: '573px',
                    height: '104px',
                    marginLeft: '185px',
                    marginTop: '451px',

                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '18px',
                    lineHeight: '26px',
                    /* or 144% */

                    textAlign: 'justify',
                    letterSpacing: '0.02em',

                    color: '#413C3C'
                }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                <img style={{/* 1 1 */


                    // position: 'absolute',
                    width: '416px',
                    height: '423px',
                    marginLeft: '819px',
                    marginTop: '123px',
                    marginRight: '205px'
                    ,
                    // background: `url($)`
                }} src={image} alt="" />
            </div>
        </div >
    );
};

export default Header;