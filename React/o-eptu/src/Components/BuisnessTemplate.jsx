

import React, { useState } from "react";
import bg1 from "../Assets/conf2.gif";
import logo from "../Assets/eptura-light.svg";
import "../CSS/BuisnessTemplate.css";
import "../CSS/Navbar.css"

import { Outlet, Link } from "react-router-dom";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PhonelinkOutlinedIcon from "@mui/icons-material/PhonelinkOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const BuisnessTemplate = () => {




  const [dropdown, setDropdown] = useState({
    workplace: false,
    assets: false,
    More: false,

  });

  const toggleDropdown = (menu) => {
    setDropdown((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu]
    }));
  };
  return (
    <div className="homepage">
       <div className="part part-6">
        <div className="header">
        <div className="logo-div">
            <img
              className="logo-image"
              src={logo}
              alt="Conference Background"
            />
         </div>
          <div className="nav-links">
          <ul className="navbar-menu">
          <li><Link to="/alexa">Alexa</Link></li>
        <li 
          className="navbar-item"
          onMouseEnter={() => toggleDropdown('workplace')}
          onMouseLeave={() => toggleDropdown('workplace')}
        >
           
Workplace
          {dropdown.workplace && (
            <ul className="dropdown-menu">
              <li><a href="/floormain">Floor Maps</a></li>
              <li><a href="/auditorium-view">Bookings</a></li>
              <li><a href="/guest">Guests</a></li>
           
            </ul>
          )}
        </li>
        <li 
          className="navbar-item"
          onMouseEnter={() => toggleDropdown('assets')}
          onMouseLeave={() => toggleDropdown('assets')}
        >
Assets
          {dropdown.assets && (
            <ul className="dropdown-menu">
              <li><Link to="/alexa">Alexa</Link></li>
              <li><Link to="/assistant">Solution Assistat</Link></li>
          
          
            </ul>
          )}
        </li>
         <li 
          className="navbar-item"
          onMouseEnter={() => toggleDropdown('more')}
          onMouseLeave={() => toggleDropdown('more')}
        >
More
          {dropdown.more && (
            <ul className="dropdown-menu">
              <li><Link to="/calender-view">Calendar</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
          
          
            </ul>
          )}
        </li>    
         
      
    
  
            
            <div>
        <li 
          className="navbar-item"
          onMouseEnter={() => toggleDropdown('workplace')}
          onMouseLeave={() => toggleDropdown('workplace')}
        >
           <AccountCircleOutlinedIcon style={{ fontSize: "40px" }}></AccountCircleOutlinedIcon>
          {dropdown.workplace && (
            <ul className="dropdown-menu">
              <li><a href="#">Log Out</a></li>
              <li><a href="#">Profile</a></li>
              
           
            </ul>
          )}
        </li>
        </div>
  
       </ul>
          </div>
        </div>
      </div> 
      <div className="part part-1">
        <div className="subpart subpart-2">
          <div className="bg-image-div">
            <img className="bg-image" src={bg1} alt="Conference Background" />
          </div>
        </div>
        <div className="subpart subpart-1">
          <div className="subpart-heading">
            <h1>BOOK MY</h1>
            <h2>CONFERENCE</h2>
          </div>
          <p className="heading-description">
            A global worktech company that provides software solutions for
            workplaces, people, and assets that enable everyone to reach their
            fh6l potential.
          </p>
        </div>
      </div>
      <div className="part part-2">
        <div className="part-heading">
          <h1 className="part-heading-1">All your worktech needs in</h1>
          <h1 className="part-heading-2"> One Place</h1>
        </div>
        <div className="content">
          <div className="content-item">
            <div className="content-icon-div">
              <WorkOutlineOutlinedIcon
                className="content-item-icon"
                style={{ fontSize: "30px" }}
              />
            </div>

            <h3 className="content-item-heading">Workspace Solutions</h3>
            <p>
              We help employers reimagine their workplaces by giving them
              insightfh6 data to make strategic, well-informed decisions.
              Through our integrated workplace solutions.
            </p>
          </div>
          <div className="content-item">
            <div className="content-icon-div">
              <PeopleAltOutlinedIcon
                className="content-item-icon"
                style={{ fontSize: "30px" }}
              />
            </div>
            <h3 className="content-item-heading">People Solutions</h3>
            <p>
              We enable employees to perform at their best by giving them
              control over how they choose to work. Our workspace schedh6ing
              software, visitor management solutions, and suite of integrations
              help ensure.
            </p>
          </div>
        </div>
      </div>
      <div className="part part-3">
        <h1 className="part-3-heading">
          Create a{" "}
          <b className="workplace" style={{ color: "#134B70" }}>
            better workplace{" "}
          </b>
          experience for everyone
        </h1>
        <div className="row cards-part1">
          <div className="column cards-part2.1">
            <div className="part-3-card">
              <div className="card-p-bg">
                <h2 className="card-content-heading">Desk booking</h2>
              </div>
              <div className="card-icon-div">
                <PhonelinkOutlinedIcon
                  className="card-item-icon"
                  style={{ fontSize: "35px" }}
                />
              </div>
              <div className="card-w-bg">
                <p className="card-content-description">
                  Search for coworkers and see where everyone is sitting on an
                  office floorplan so you can book a space near teammates for
                  easy collaboration throughout the day. For even more
                  convenience, employees can reserve lockers and parking spaces,
                
                </p>
              </div>
            </div>
          </div>
          <div className="column cards-part2.2">
            <div className="part-3-card">
              <div className="card-p-bg">
                <h2 className="card-content-heading">
                  {" "}
                  Meeting & conference room booking
                </h2>
              </div>
              <div className="card-icon-div">
                <VideocamOutlinedIcon
                  className="card-item-icon"
                  style={{ fontSize: "35px" }}
                />
              </div>

              <div className="card-w-bg">
                <p className="card-content-description">
                  Find available conference rooms that meet the needs of every
                  meeting. Integrated calendar invites extend hybrid
                  functionality to in-room hardware, and automatically finds new
                  rooms if the meeting is reschedh6ed.Integrated calendar
                </p>
              </div>
            </div>
          </div>
          <div className="column cards-part2.3">
            <div className="part-3-card">
              <div className="card-p-bg">
                {" "}
                <h2 className="card-content-heading">
                  {" "}
                  Wayfinding and navigation
                </h2>
              </div>
              <div className="card-icon-div">
                <NearMeOutlinedIcon
                  className="card-item-icon"
                  style={{ fontSize: "35px" }}
                />
              </div>

              <div className="card-w-bg">
                <p className="card-content-description">
                  Help new employees and visitors effectively navigate your
                  workplace, ensuring guests can get to a meeting on time and
                  with ease. When employees raise a service request, facilities
                  teams can easily locate them on the floorplan.​
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row cards-part2">
          <div className="column cards-part2.1">
            <div className="part-3-card">
              <div className="card-p-bg">
                {" "}
                <h2 className="card-content-heading"> Planned collaboration</h2>
              </div>
              <div className="card-icon-div">
                <GroupsOutlinedIcon
                  className="card-item-icon"
                  style={{ fontSize: "35px" }}
                />
              </div>

              <div className="card-w-bg">
                {" "}
                <p className="card-content-description">
                  Plan your workweek based on when your teammates and
                  cross-functional collaborators are in the office. With
                  Microsoft 365 integration, you can view everyone’s schedh6ed
                  in-office days and book a desk to join them.Plan your workweek
                  
                </p>
              </div>
            </div>
          </div>

          <div className="part-3-card">
            <div className="card-p-bg">
              <h2 className="card-content-heading">Service requests</h2>
            </div>
            <div className="card-icon-div">
              <ManageAccountsOutlinedIcon
                className="card-item-icon"
                style={{ fontSize: "35px" }}
              />
            </div>
            <div className="card-w-bg">
              <p className="card-content-description">
                Search for coworkers and see where everyone is sitting on an
                office floorplan so you can book a space near teammates for easy
                collaboration throughout the day. For even more convenience,
                employees can reserve lockers and parking spaces, 
              </p>
            </div>
          </div>
          <div className="column cards-part2.3">
            <div className="part-3-card">
              <div className="card-p-bg">
                {" "}
                <h2 className="card-content-heading"> Presence detection</h2>
              </div>
              <div className="card-icon-div">
                <PersonSearchOutlinedIcon
                  className="card-item-icon"
                  style={{ fontSize: "35px" }}
                />
              </div>
              <div className="card-w-bg">
                {" "}
                <p className="card-content-description">
                  Leverage sensor technology to capture real-time occupancy data
                  in workspaces, ensuring availability is based on actual usage.
                  Enhance the employee experience by automating check-ins,
                  releasing bookings,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="part part-4">
        <div className="part-heading">
          <h1 className="part-heading-1">Choose how you</h1>{" "}
          <h1 className="part-heading-2">work your world</h1>
        </div>
        <div className="part-4-content">
          <div className="content-item">
            <div className="content-icon-div">
              <AssessmentOutlinedIcon
                className="content-item-icon"
                style={{ fontSize: "30px" }}
              />
            </div>

            <h3 className="content-item-heading">Analytics data dashboard</h3>
            <p className="part4-content-p">
              View real-time utilization data, including key metrics for space
              usage, peak frequency, and who’s booking and when.
            </p>
          </div>
          <div className="content-item">
            <div className="content-icon-div">
              <MapOutlinedIcon
                className="content-item-icon"
                style={{ fontSize: "30px" }}
              />
            </div>
            <h3 className="content-item-heading">Floorplan portal</h3>
            <p className="part4-content-p">
              Plan moves with interactive floorplan maps, easily drag and drop
              workspaces, and create a digital twin of your office.
            </p>
          </div>
          <div className="content-item">
            <div className="content-icon-div">
              <PhoneIphoneOutlinedIcon
                className="content-item-icon"
                style={{ fontSize: "30px" }}
              />
            </div>

            <h3 className="content-item-heading">Mobile app</h3>
            <p className="part4-content-p">
              Track who is in the office and when. Submit service requests
              related to your space and provide wayfinding.
            </p>
          </div>
        </div>
      </div>

      <div className="part part-5">
        <svg
          id="wave"
          style={{ transform: "rotate(180deg)", transition: "0.3s" }}
          viewBox="0 0 1440 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor=" rgb(19, 39, 79)" offset="0%"></stop>
              <stop stopColor="rgb(19, 75, 112)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,30L34.3,38.3C68.6,47,137,63,206,66.7C274.3,70,343,60,411,50C480,40,549,30,617,33.3C685.7,37,754,53,823,65C891.4,77,960,83,1029,73.3C1097.1,63,1166,37,1234,26.7C1302.9,17,1371,23,1440,31.7C1508.6,40,1577,50,1646,60C1714.3,70,1783,80,1851,80C1920,80,1989,70,2057,63.3C2125.7,57,2194,53,2263,53.3C2331.4,53,2400,57,2469,63.3C2537.1,70,2606,80,2674,83.3C2742.9,87,2811,83,2880,70C2948.6,57,3017,33,3086,30C3154.3,27,3223,43,3291,48.3C3360,53,3429,47,3497,40C3565.7,33,3634,27,3703,30C3771.4,33,3840,47,3909,55C3977.1,63,4046,67,4114,56.7C4182.9,47,4251,23,4320,20C4388.6,17,4457,33,4526,36.7C4594.3,40,4663,30,4731,33.3C4800,37,4869,53,4903,61.7L4937.1,70L4937.1,100L4902.9,100C4868.6,100,4800,100,4731,100C4662.9,100,4594,100,4526,100C4457.1,100,4389,100,4320,100C4251.4,100,4183,100,4114,100C4045.7,100,3977,100,3909,100C3840,100,3771,100,3703,100C3634.3,100,3566,100,3497,100C3428.6,100,3360,100,3291,100C3222.9,100,3154,100,3086,100C3017.1,100,2949,100,2880,100C2811.4,100,2743,100,2674,100C2605.7,100,2537,100,2469,100C2400,100,2331,100,2263,100C2194.3,100,2126,100,2057,100C1988.6,100,1920,100,1851,100C1782.9,100,1714,100,1646,100C1577.1,100,1509,100,1440,100C1371.4,100,1303,100,1234,100C1165.7,100,1097,100,1029,100C960,100,891,100,823,100C754.3,100,686,100,617,100C548.6,100,480,100,411,100C342.9,100,274,100,206,100C137.1,100,69,100,34,100L0,100Z"
          ></path>
        </svg>
        <div className="footer-content">
          <div className="footer-content-items">
            <h3 className="footer-content-heading">Company</h3>
            <div className="footer-content-items-list">
              <h6 className="items-list">About Us</h6>
              <h6 className="items-list">What we do</h6>
              <h6 className="items-list">Who we partner with</h6>
              <h6 className="items-list">Support</h6>
              <h6 className="items-list">Contact Us</h6>
            </div>
          </div>

          <div className="footer-content-items">
            <h3 className="footer-content-heading">Solutions</h3>

            <div className="footer-content-items-list">
              <h6 className="items-list">Buisness </h6>
              <h6 className="items-list">Education</h6>
              <h6 className="items-list">Healthcare</h6>
              <h6 className="items-list">Government</h6>
              <h6 className="items-list">Manufacturing</h6>
            </div>
          </div>
          <div className="footer-content-items">
            <h3 className="footer-content-heading">Discover</h3>
            <div className="footer-content-items-list">
              <h6 className="items-list">Resource Center</h6>
              <h6 className="items-list">Blog</h6>
              <h6 className="items-list">Customer reviews</h6>
              <h6 className="items-list">Research</h6>
              <h6 className="items-list">Podcast</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        All Rights Reserved Book My Conference
      </div>

    </div>
  );
};
export default BuisnessTemplate;
