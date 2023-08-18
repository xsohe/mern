import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'parts/Header';
import Hero from 'parts/Hero';

import { fetchPage } from 'store/actions/page';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    document.title = 'Staycation | Home';
    window.scroll(0, 0);

    if (!this.props.page.LandingPage) this.props.fetchPage(`http://localhost:5000/api/v1/member/landing-page`, 'landingPage');
  }

  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty('landingPage')) return null;

    return (
      <>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={page.landingPage.mostPicked} />
        <Categories data={page.landingPage.category}></Categories>
        <Testimony data={page.landingPage.testimonial}></Testimony>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
