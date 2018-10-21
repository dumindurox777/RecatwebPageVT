import React, { Component } from 'react';

import './UserDetails.css';
import logo from './profile.png';

import OverlayLoader from 'react-loading-indicator-overlay/lib/OverlayLoader';
import Pagination from "react-js-pagination";





class UserDetails extends Component{
 
    constructor(props){
        super(props);
        this.state ={ isLoading: true,results: [],
        activePage:1,
        itemsCountPerPage:1,
        totalItemsCount:3 ,
        pageRangeDisplayed:3    
      
    }
    this.handlePageChange=this.handlePageChange.bind(this);
  }
    handlePageChange(pageNumber) {
      console.log(`active page is ${pageNumber}`);
      this.setState({activePage: pageNumber});

   fetch('http://localhost:8080/users?page='+pageNumber)
          .then((response) => response.json())
          .then((responseJson) => {
            

            
            this.setState({
              isLoading: false,
              results: responseJson,
              
            }, function(){
                console.log(this.state.results);
                
          
            });
          
          })
          .catch((error) =>{
            console.error(error);
          });
    }
    componentDidMount(){
 
        return fetch('http://localhost:8080/users')
          .then((response) => response.json())
          .then((responseJson) => {
            

            
            this.setState({
              isLoading: false,
              results: responseJson,
              
            }, function(){
                console.log(this.state.results);
                
          
            });
          
          })
          .catch((error) =>{
            console.error(error);
          });
      }

      


    render(){
        const { isLoading,results } = this.state;

        if (isLoading) {
          
          return  <p>
           

            <OverlayLoader 
              color={'red'} // default is white
              loader="ScaleLoader" // check below for more loaders
              text="Loading... Please wait!" 
              active={true} 
              text-color={'black'}
              backgroundColor={'black'} // default is black
              opacity=".4" // default is .9  
              >
              
      
            </OverlayLoader>
            </p>;
         } 
       
        return(
            
           
         
          <div > 
            <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={this.state.totalItemsCount}
          pageRangeDisplayed={this.state.pageRangeDisplayed}
          onChange={this.handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
          
        />
      
        <ul class="list-unstyled">
                {results.map(item => (
                  <div className="row" key={item.firstname}>
                  <div className="list-group">
                      <div className="list-group-item clearfix">
                          <div className="profile-teaser-left">
                          
                          <div className="profile-img"><img src={logo} className="App-logo" alt="logo" /></div>
                             
                          </div>
                          <div className="profile-teaser-main">
                          
                              <h2 className="profile-name">{item.firstname}</h2>
                              <div className="profile-info">
                                  <div className="info">
                                  <span className="info">Last Name:</span>{item.lastname}<br/>
                                  
                                  <span className="info">Video Count:</span> {item.videocount}
                                  </div>
                                  
                              </div>
                          </div>
                  </div>       
                  </div>
                  </div>
                ))}
              </ul>
        
             

          
          
          </div>
          
          
          
        )
    
    }
    
}

export default UserDetails;



