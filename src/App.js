import logo from './logo.svg';
import './App.css';
import Carousel from 'react-elastic-carousel';
import './custom.css';
import SearchField from "react-search-field";
import MultiSelect from "react-multi-select-component";

import { MenuItems } from './MenuItems';
import { ProductsItems } from './ProductsItems';
import { ViewByProduct } from './ViewByProduct';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const options = [
    { label: "Advertising", value: "Advertising" },
    { label: "Data Analytics", value: "Data Analytics" },
    { label: "Campaign Management", value: "Campaign Management" },
    { label: "Content Management", value: "Content Management" },
    { label: "Data", value: "Data" },
    { label: "Personalization", value: "Personalization" },
];

const optionsIndustry = [
  { label: "Automotive", value: "Automotive" },
  { label: "Financial Services", value: "Financial Services" },
  { label: "Media and Entertainment", value: "Media and Entertainment" },
  { label: "Travel", value: "Travel" },
  { label: "B2B and Small Business", value: "B2B and Small Business" },
  { label: "Healthcare", value: "Healthcare" },
];

function App() {

  return (
    <div className="App">

      <div className="header-wrapper">
        <div id="header">
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
      <br /><br /><br />
      <Carousel breakPoints={breakPoints}>
        <div className="product-item-car ib">
          <img alt="" src="https://d1a2d0h96mvhgv.cloudfront.net/2/90104/a5b49fcf-73f5-41c8-89a4-20330a632db2.png" className="heightCarousal" /><br />
          <a href="#" className="app-title-name">GlobalLink Connect Plus for AEM</a>
        </div>
        <div className="product-item-car ib">
          <img alt="" src="https://d1a2d0h96mvhgv.cloudfront.net/3/103745/e47ffa1e-f71f-44ef-8ed2-14181ca3869b.jpg" className="heightCarousal" />
          <a href="#" className="app-title-name">Persado Connect for Launch</a>
        </div>
        <div className="product-item-car ib">
          <img alt="" src="https://d1a2d0h96mvhgv.cloudfront.net/3/103679/568c987a-4244-465a-abf3-e5103359dfb8.jpg" className="heightCarousal" />
          <a href="#" className="app-title-name">SundaySky + Adobe Experience Platform Integration</a>
        </div>
        <div className="product-item-car ib">
          <img alt="" src="https://d1a2d0h96mvhgv.cloudfront.net/3/103899/2b0c0f41-6ec1-4bd0-b9d9-89bd377fd221.jpg" className="heightCarousal" />
          <a href="#" className="app-title-name" style={{ marginLeft: "10px" }}>Medallia for Adobe Experience Platform</a>
        </div>
        <div className="product-item-car ib">
          <img alt="" src="https://d1a2d0h96mvhgv.cloudfront.net/3/100022/52b2407e-bd9a-4c23-ba0e-dc5542704da0.png" className="heightCarousal" />
          <a href="#" className="app-title-name">Claravine</a>
        </div>
        <div className="product-item-car ib">
          <img alt="" src="https://d1a2d0h96mvhgv.cloudfront.net/3/104591/88322c2e-6138-4ae6-ab65-b4745979696c.png" className="heightCarousal" />
          <a href="#" className="app-title-name">Bolt Checkout Experience Platform</a>
        </div>
      </Carousel>
      <br />
      <SearchField
        placeholder="Search Marketplace"
        classNames="test-class"
      />
      <br /><br />

      <div className="">
        <main className="main" role="main">
          <div className="wrapper cf">
            <aside className="sidebar">
              <h1 class="sidebar-heading">
                <b>View by product</b>
              </h1>
              {ViewByProduct.map((item) => {
                return (
                  <div className="filters-category">
                <button style={{ border: "none", background: "none" }}>{item.title}</button>
              </div>
                )
              })}
              <span>_______________________________________</span>
              <h1 class="sidebar-heading">
                <b>Filter By</b>
              </h1>

              <div id="filter">
                <ul className="filter ul-reset">
                  <li className="filter-item">
                    <section className="filter-item-inner">
                          <MultiSelect 
                          options={options}
                          labelledBy="App Type"
                          placeholder="App Type"
                          />
                    </section>
                  </li>
                  <br />
                  <li className="filter-item">
                    <section className="filter-item-inner">
                      <MultiSelect
                        options={optionsIndustry}
                        labelledBy="Industry"
                        placeholder="Industry"
                      />
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

                    {ProductsItems.map((item) => {
                      return (
                        <li className="product-item ib">
                          <section className="product-item-inner">
                            <img src={item.url} className="imageHeight" />
                            <h1 className="product-title">
                              {item.title}
                            </h1>
                            <h2 className="product-subtitle">
                              {item.subTitle}
                            </h2>
                            <br />
                            <h2 className="product-subtitle">
                              {item.post}
                            </h2>
                            <br />
                            <h2 className="product-subtitle">
                              {item.description}
                            </h2>
                          </section>
                        </li>
                      )
                    })}                    
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
