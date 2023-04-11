import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

//component
import DetailNote from '../components/DetailNote';

//data
import { getNote } from '../utils/local-data';

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    if (this.state.note === null) {
      return <h4>Catatan tidak tersedia</h4>;
    }

    return (
      <section className="detail-page">
        <DetailNote {...this.state.note} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
