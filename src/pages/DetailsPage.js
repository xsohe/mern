import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';

import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import BookingForm from 'parts/BookingForm';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

import ItemDetails from 'json/itemDetails.json';

import { checkoutBooking } from 'store/actions/checkout';
import { fetchPage } from 'store/actions/page';

class DetailsPage extends Component {
  componentDidMount() {
    window.title = 'Details Page';
    window.scroll(0, 0);

    if (!this.props.page[this.props.params.id]);
    this.props.fetchPage(`${process.env.REACT_APP_HOST}/api/v1/member/detail-page/${this.props.params.id}`);
  }
  render() {
    const { page, params } = this.props;
    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' },
    ];
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={page[params.id]} />
        <FeaturedImage data={page[params.id].imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={page[params.id]} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm itemDetails={page[params.id]} startBooking={this.props.checkoutBooking} />
              </Fade>
            </div>
          </div>
        </section>

        <Categories data={page[params.id].categories} />
        <Testimony data={page[params.id].testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page.detailsPage,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(DetailsPage);
