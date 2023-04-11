import React from 'react';
import PropTypes from 'prop-types';

//data
import { showFormattedDate } from '../utils';

function DetailNote({ title, body, createdAt }) {
  return (
    <>
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
    </>
  );
}

DetailNote.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default DetailNote;
