import React, { Component } from "react";
import { useParams } from "react-router-dom";
import DetailNote from "../components/DetailNote";
import { getNote } from "../utils/local-data";

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

export default DetailPageWrapper;
