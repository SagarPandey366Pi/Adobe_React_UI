import logo from './logo.svg';
import './App.css';
import Carousel from 'react-elastic-carousel';
import './custom.css';
import SearchField from "react-search-field";

import { MenuItems } from './MenuItems'

const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 4},
];

function App() {

  return (
    <div className="App">

    {/* <nav className="NavbarItems">
      <h1 className="navbar-logo"></h1>
      <div className="menu-icon">

      </div>
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url} >
                {item.title}
              </a>
            </li>
          )
        })}
        
      </ul>
    </nav> */}

      <div className="header-wrapper">
        <div id ="header">
          <div className="topNav">
            <span className="adobeWrapper"></span>
            <header id="topNavheader" className="navBarWrapper">
              <nav className="navBar">
                <div id="nav2" className="navList-wrapper">
                  <ul className="navList">
                    <li id="gnav_2_0" className="navList-item">
                      <div id="gnav_4" className="navList-wrapper">
                        <ul className="navList">
                          <li className="navList-item relativePosition" id="gnav_4_0">
                            <div id="gnav_6" className="navList-wrapper">
                              <ul className="navList">
                                <li id="gnav_6_0" className="navList-item">
                                  <div id="gnav_9" className="navList-wrapper">
                                    <ul className="navList">
                                      <li id="gnav_9_0" className="navList-item">
                                        <a id="gnav_12" href="https://exchange.adobe.com/" className="logo" daa-ll="Logo">
                                          <span className="logo-image">
                                            <img src="https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg" className="App-logo" alt="Adobe" />
                                          </span>
                                          <span className="logo-text">
                                            Adobe Exchange
                                            </span>
                                        </a>
                                      </li>
                                      {MenuItems.map((item, index) => {
                                        return (
                                          <li key={index}>
                                            <a className={item.cName} href={item.url} >
                                              {item.title}
                                            </a>
                                          </li>
                                        )
                                      })}
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>
          </div>
        </div>
      </div>
      <br/><br/><br/>
      <Carousel breakPoints={breakPoints}>
        <div>
          <img alt="" src="https://d1a2d0h96mvhgv.cloudfront.net/2/90104/a5b49fcf-73f5-41c8-89a4-20330a632db2.png" className="heightCarousal" /><br/>
          {/* <p className="legend">Legend 1</p> */}
          <a href="#" className="app-title-name">GlobalLink Connect Plus for AEM</a>
        </div>
        <div>
          <img alt="" src="https://d1a2d0h96mvhgv.cloudfront.net/3/103745/e47ffa1e-f71f-44ef-8ed2-14181ca3869b.jpg" className="heightCarousal" />
          <a href="#" className="app-title-name">Persado Connect for Launch</a>
        </div>
        <div>
          <img alt="" src="https://d1a2d0h96mvhgv.cloudfront.net/3/103679/568c987a-4244-465a-abf3-e5103359dfb8.jpg" className="heightCarousal" />
          <a href="#" className="app-title-name">SundaySky + Adobe Experience Platform Integration</a>
        </div>
        <div>
          <img alt="" src="https://d1a2d0h96mvhgv.cloudfront.net/3/103899/2b0c0f41-6ec1-4bd0-b9d9-89bd377fd221.jpg" className="heightCarousal" />
          <a href="#" className="app-title-name" style={{marginLeft: "10px"}}>Medallia for Adobe Experience Platform</a>
        </div>
        <div>
          <img alt="" src="https://d1a2d0h96mvhgv.cloudfront.net/3/100022/52b2407e-bd9a-4c23-ba0e-dc5542704da0.png" className="heightCarousal" />
          <a href="#" className="app-title-name">Claravine</a>
        </div>
        <div>
          <img alt="" src="https://d1a2d0h96mvhgv.cloudfront.net/3/104591/88322c2e-6138-4ae6-ab65-b4745979696c.png" className="heightCarousal" />
          <a href="#" className="app-title-name">Bolt Checkout Experience Platform</a>
        </div> 
      </Carousel>
      <br/>
      <SearchField
        placeholder="Search"
        searchText="This is initial search text"
        classNames="test-class"
      />
      <br/><br/>

      <div className="">
        <main className="main" role="main">
          <div className="wrapper cf">
            <aside className="sidebar">
              <h1 class="sidebar-heading">
                <b>Filter By</b>
              </h1>

              <div id="filter">
                <ul className="filter ul-reset">
                  <li className="filter-item">
                    <section className="filter-item-inner">
                      <h1 class="filter-item-inner-heading plus">
                        App Type
                      </h1>
                      <ul className="filter-attribute-list ul-reset" style={{display: "none"}}>
                        <div className="filter-attribute-list-inner">
                          <li className="filter-attribute-item">
                            <input type="checkbox" id="material-attribute-1" className="filter-attribute-checkbox ib-m trialBenefit" name="Advertising" />
                              <label className="filter-attribute-label ib-m">
                                Advertising
                              </label>
                          </li>
                          <li className="filter-attribute-item">
                            <input type="checkbox" id="material-attribute-1" className="filter-attribute-checkbox ib-m trialBenefit" name="Data Analytics" />
                              <label className="filter-attribute-label ib-m">
                                Data Analytics
                              </label>
                          </li>
                          <li className="filter-attribute-item">
                            <input type="checkbox" id="material-attribute-1" className="filter-attribute-checkbox ib-m trialBenefit" name="Campaign Management" />
                              <label className="filter-attribute-label ib-m">
                                Campaign Management
                              </label>
                          </li>
                          <li className="filter-attribute-item">
                            <input type="checkbox" id="material-attribute-1" className="filter-attribute-checkbox ib-m trialBenefit" name="Content Management" />
                              <label className="filter-attribute-label ib-m">
                                Content Management
                              </label>
                          </li>
                          <li className="filter-attribute-item">
                            <input type="checkbox" id="material-attribute-1" className="filter-attribute-checkbox ib-m trialBenefit" name="Data" />
                              <label className="filter-attribute-label ib-m">
                                Data
                              </label>
                          </li>
                          <li className="filter-attribute-item">
                            <input type="checkbox" id="material-attribute-1" className="filter-attribute-checkbox ib-m trialBenefit" name="Personalization" />
                              <label className="filter-attribute-label ib-m">
                                Personalization
                              </label>
                          </li>
                        </div>
                      </ul>
                   </section>
                  </li>
                  <br/>
                  <li className="filter-item">
                    <section className="filter-item-inner">
                      <h1 class="filter-item-inner-heading plus">
                        Industry
                      </h1>
                      <ul className="filter-attribute-list ul-reset" style={{display: "none"}}>
                        <div className="filter-attribute-list-inner">
                          <li className="filter-attribute-item">
                            <input type="checkbox" id="material-attribute-1" className="filter-attribute-checkbox ib-m trialBenefit" name="Automotive" />
                              <label className="filter-attribute-label ib-m">
                                Automotive
                              </label>
                          </li>
                          <li className="filter-attribute-item">
                            <input type="checkbox" id="material-attribute-1" className="filter-attribute-checkbox ib-m trialBenefit" name="Financial Services" />
                              <label className="filter-attribute-label ib-m">
                                Financial Services
                              </label>
                          </li>
                          <li className="filter-attribute-item">
                            <input type="checkbox" id="material-attribute-1" className="filter-attribute-checkbox ib-m trialBenefit" name="Media and Entertainment" />
                              <label className="filter-attribute-label ib-m">
                                Media and Entertainment
                              </label>
                          </li>
                          <li className="filter-attribute-item">
                            <input type="checkbox" id="material-attribute-1" className="filter-attribute-checkbox ib-m trialBenefit" name="Travel" />
                              <label className="filter-attribute-label ib-m">
                                Travel
                              </label>
                          </li>
                          <li className="filter-attribute-item">
                            <input type="checkbox" id="material-attribute-1" className="filter-attribute-checkbox ib-m trialBenefit" name="B2B" />
                              <label className="filter-attribute-label ib-m">
                                B2B and Small Business
                              </label>
                          </li>
                          <li className="filter-attribute-item">
                            <input type="checkbox" id="material-attribute-1" className="filter-attribute-checkbox ib-m trialBenefit" name="Healthcare" />
                              <label className="filter-attribute-label ib-m">
                                Healthcare
                              </label>
                          </li>
                        </div>
                      </ul>
                   </section>
                  </li>

                </ul>
              </div>

            </aside>

            <section className="content">
              <div className="col-lg-4">
                All Apps
              </div>
              <ul className="product-list ul-reset" id="product-list">
                <li className="product-item ib">
                  <section className="product-item-inner">
                    <img src="https://d1a2d0h96mvhgv.cloudfront.net/3/105037/22571937-3e42-4464-a922-1014a02a3f18.png" className="imageHeight" />
                    <h1 className="product-title">
                    XTM Connect for Adobe Experience Manager
                    </h1>
                    <h2 className="product-subtitle">
                      XTM International
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    EXPERIENCE MANAGER
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                      XTM Cloud is a leading enterprise cloud-based translation management system that harnesses intelligent automation and AI to streamline complex localization workflows.
                    </h2>
                  </section>
                </li>
                <li className="product-item ib">
                  <section className="product-item-inner">
                  <img src="https://d1a2d0h96mvhgv.cloudfront.net/3/105405/2992224b-1991-4f34-bdae-c427133e4927.png" className="imageHeight" />
                    <h1 className="product-title">
                    Braze
                    </h1>
                    <h2 className="product-subtitle">
                      Braze
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    AUDIENCE MANAGER
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    Send your Adobe attributes and segments into Braze, a comprehensive customer engagement platform, to power relevant and memorable experiences.
                    </h2>
                  </section>
                </li>
                <li className="product-item ib">
                  <section className="product-item-inner">
                  <img src="https://d1a2d0h96mvhgv.cloudfront.net/3/105729/591dbf74-0252-418b-ac86-b3829bd75c6f.png" className="imageHeight" />
                    <h1 className="product-title">
                    RollWorks Account-Based Platform
                    </h1>
                    <h2 className="product-subtitle">
                    RollWorks, a division of NextRoll, Inc.
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    EXPERIENCE CLOUD
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    Discover and Engage Known and Unknown Buyers with Marketo and RollWorks and Close More Deals Faster.
                    </h2>
                  </section>
                </li>
                <li className="product-item ib">
                  <section className="product-item-inner">
                  <img src="https://d1a2d0h96mvhgv.cloudfront.net/3/105562/a1b7495d-ab9a-475c-8be4-11959f1c2879.jpg" className="imageHeight" />
                    <h1 className="product-title">
                    Tactile Marketing Automation® (TMA®)
                    </h1>
                    <h2 className="product-subtitle">
                    PFL Tech
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    EXPERIENCE CLOUD
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    Create magical brand moments at scale by automating your direct mail.
                    </h2>
                  </section>
                </li>
                <li className="product-item ib">
                  <section className="product-item-inner">
                  <img src="https://d1a2d0h96mvhgv.cloudfront.net/3/105735/9a307d62-0bd1-44cd-bd94-4c0acfd46bda.png" className="imageHeight" />
                    <h1 className="product-title">
                    Captello Universal Lead Capture
                    </h1>
                    <h2 className="product-subtitle">
                    Captello
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    EXPERIENCE CLOUD
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    Capture leads at live events, virtual events, hybrid events or in digital marketing campaigns and sales calls.
                    </h2>
                  </section>
                </li>
                <li className="product-item ib">
                  <section className="product-item-inner">
                  <img src="https://d1a2d0h96mvhgv.cloudfront.net/3/105689/34a30456-8c3a-4c6a-b452-51a5ac19fc44.png" className="imageHeight" />
                    <h1 className="product-title">
                    Duty, Tax, Compliance extension for Magento
                    </h1>
                    <h2 className="product-subtitle">
                    Hurricane Modular Commerce
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    EXPERIENCE CLOUD
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    Seamless and blisteringly quick Duty and Tax Calculation, Customs Classification, Prohibited and Restricted Goods Screening and Denied Party Screening services.
                    </h2>
                  </section>
                </li>
                <li className="product-item ib">
                  <section className="product-item-inner">
                  <img src="https://d1a2d0h96mvhgv.cloudfront.net/3/105697/1bb8988b-6b42-42f7-b0f1-fbf9bfa33508.png" className="imageHeight" />
                    <h1 className="product-title">
                    Unbxd Site Search
                    </h1>
                    <h2 className="product-subtitle">
                    Unbxd Inc
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    EXPERIENCE CLOUD
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    Unbxd Site Search allows hassle-free integration of your website on the Adobe platform to Unbxd's AI-powered product discovery suite. and uplifts conversions.
                    </h2>
                  </section>
                </li>
                <li className="product-item ib">
                  <section className="product-item-inner">
                  <img src="https://d1a2d0h96mvhgv.cloudfront.net/3/104653/1aaa61f3-d1cc-4ad1-a651-78768266e11f.png" className="imageHeight" />
                    <h1 className="product-title">
                    Onclusive PR Analytics
                    </h1>
                    <h2 className="product-subtitle">
                    Onclusive
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    ANALYTICS
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    Monitor, measure, target and report with Onclusive media monitoring. A fully customizable communications analytics platform that is built for organizations of all sizes.
                    </h2>
                  </section>
                </li>
                <li className="product-item ib">
                  <section className="product-item-inner">
                  <img src="https://d1a2d0h96mvhgv.cloudfront.net/3/105363/0164eaed-d0f8-4879-a48a-83a5f00f6ba5.png" className="imageHeight" />
                    <h1 className="product-title">
                    6sense for Analytics and Target
                    </h1>
                    <h2 className="product-subtitle">
                    6sense
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    EXPERIENCE PLATFORM LAUNCH
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    Launch extension to get 6sense enriched account insights within Adobe Analytics and create dynamic personalized experiences with Adobe Target.
                    </h2>
                  </section>
                </li>
                <li className="product-item ib">
                  <section className="product-item-inner">
                  <img src="https://d1a2d0h96mvhgv.cloudfront.net/3/105394/3eadf69a-5c30-4cd8-ad50-8b815d568b8c.png" className="imageHeight" />
                    <h1 className="product-title">
                    Mollie
                    </h1>
                    <h2 className="product-subtitle">
                    Mollie B.V.
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    EXPERIENCE CLOUD
                    </h2>
                    <br/>
                    <h2 className="product-subtitle">
                    Mollie is the easiest way to process your payments. The integration of e.g. iDEAL, PayPal, or credit card payments is simpler than ever with this convenient plugin.
                    </h2>
                  </section>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>

      <footer>
      <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p className="m-0 text-center copyrightext">
                        Copyright &copy; {(new Date().getFullYear())} Adobe.  All rights reserved. / <a href="#" className="removeLine">Privacy</a> / <a href="#" className="removeLine">Terms of Use</a> / <a href="#" className="removeLine">Cookie preferences</a> / <a href="#" className="removeLine">Do not sell my personal information</a> /      AdChoices
                    </p>
                </div>
            </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
