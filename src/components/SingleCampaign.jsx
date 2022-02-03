import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SingleCampaign = ({ campaigns }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const selected = campaigns.filter((campaign) => campaign.id == id);
  console.log(selected);
  return (
    <div>
      <h1>This is best campaign and it is {selected[0].name}</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default SingleCampaign;
