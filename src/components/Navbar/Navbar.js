import './assets/Navbar.css';
import './assets/demo.css';
import './assets/slicknav/slicknav.min.css' ;

import React from 'react';


function Navbar(){

    return  <>


<html>
    <head>

    <title>Icons Dark Navigation</title>

    

    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"/>


</head>

<body>

<nav className="menu-navigation-dark">
    <a href="#" className="selected"><i className="fa fa-home"></i><span>Home</span></a>
    <a href="#"><i className="fa fa-bell"></i><span>Notification</span></a>
    <a href="#" ><i className="fa fa-search"></i><span>Explore</span></a>
    <a href="#"><i className="fa fa-comment"></i><span>Talks</span></a>
    <a href="#"><i className="fa fa-user"></i><span>Profile</span></a>
</nav>





<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"/>
<script src="assets/slicknav/jquery.slicknav.min.js"/>

<script src = "nav.js"/>

{/* <ScriptTag type="text/javascript" src="nav.js" /> */}


</body>
</html>
</>
}

export default Navbar;