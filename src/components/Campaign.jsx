import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Campaign = ({ campaigns }) => {
  const navigate = useNavigate();
  return (
    <div>
      {campaigns.map((campaign) => (
        <>
          <div key={campaign.id}>
            <Link to={`/campaigns/${campaign.id}`}> {campaign.name}</Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default Campaign;
