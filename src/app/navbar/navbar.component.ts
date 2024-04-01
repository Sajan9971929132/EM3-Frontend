import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
      <div class="header">
        <div class="logo"><a href="#"><img src="https://i.ibb.co/dPJbsmR/Designs.png" alt="Designs" border="0"></a>  </div>
        <div class="navbar" id="nav"><ul>
            <li><a href="#"><span title="HOME">Home</span></a></li>
        </ul></div>
    </div>
  `,
  styles: [
    `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.header {
  top:0;
    width: 100%;
    display: flex;
    justify-content:space-around;
    align-items: center;
    overflow: hidden;
    background-color:#40bcef;
    padding: 10px 0px;
    position: fixed;
}
.logo {
    width: 8%;
    display: block;
    overflow: hidden;
}
.logo img {
    width: 70%;
    height: auto;
    border-radius: 50%;
}
.rohit{
    width: fit-content;
}



#icon {
    position: absolute;
    right: 20px;
    cursor: pointer;
    display: none;
}
.navbar {
    width: 80%;
    display: flex;
    justify-content:right;
}
.navbar ul {
    list-style-type: none;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: end;
}
.navbar ul li {
    display: inline-flex;
    justify-content: right;
    transform-style: preserve-3d;
}
.navbar ul li a {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    font-family: arial;
    font-weight: bold;
    display: block;
    position: relative;
}
.navbar ul li a span {
    display: block;
    padding: 15px 25px;
}
.navbar ul li a span::before {
    content: attr(title);
    position: absolute;
    top: 0;
    left: 0;
    background: #f30000;
    color: white;
    padding: 15px 25px;
    transform-style: preserve-3d;
    transition: 0.5s;
    transform: rotateX(90deg) translateY(50px);
    transform-origin: bottom;
}
.navbar ul li a span:hover::before {
    transform: rotateX(0deg) translateY(0px);
}
@media screen and (max-width:952px) {
    .navbar ul li a {
        font-size: 15px;
    }
}
@media screen and (max-width:952px) {
    .navbar ul li {
        width: auto;
    }
}
@media screen and (max-width:705px) {
    .navbar ul li a {
        font-size: 13px;
    }
}
@media screen and (max-width:682px) {
    .navbar {

        width: 100%;
    }
    .header{
        flex-direction: column;
    }
    .logo{
        width: 100%;
    }
    .logo img{
        width: 20%;
        margin-left: 20px;
    }
    #icon {
        display: inline-block;
        padding-top: 10px;
    }
    .navbar ul{
        width: 100%;
        flex-direction: column;
        justify-content: center;
    }
    .navbar ul li{
        justify-content: center;
    }
}
    `
  ]
})
export class NavbarComponent {

}
