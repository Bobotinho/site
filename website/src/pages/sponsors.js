import React from 'react';
import Layout from '@theme/Layout';

import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const renderSponsor = (sponsor, i) => {
  return (
    <div className="channels" key={i}>
      <div>
        <a href={sponsor.infoLink}>{renderSponsorIcon(sponsor)}</a>
        <h3>{sponsor.name}</h3>
        {renderInfo(sponsor.infoTitle, sponsor.infoLink)}
      </div>
    </div>
  );
};

const renderSponsorIcon = sponsor => {
  let imgSource = sponsor.icon;
  if (!sponsor.icon.startsWith('http')) {
    imgSource = useBaseUrl('img/sponsors/' + sponsor.icon);
  }
  return <img src={imgSource} alt={sponsor.name} />;
};

const renderInfo = (title, uri) => {
  return uri ? <p className="info"><a href={uri} target="_blank">{title}</a></p> : null;
};

const Sponsors = () => {
  const {siteConfig} = useDocusaurusContext();

  const showcaseApps = siteConfig.customFields.sponsors;
  const pinnedApps = showcaseApps.filter(sponsor => sponsor.pinned);
  const featuredApps = showcaseApps.filter(sponsor => !sponsor.pinned);
  const sponsors = pinnedApps.concat(featuredApps);

  return (
    <Layout
      title="Apoiadores"
      description="Lista de pessoas que apoiaram o Bobotinho">
      <div className="showcaseSection">
        <div className="prose">
          <h1>Quem apoiou o Bobotinho?</h1>
          <p>Essas são as pessoas incríveis que apoiaram o Bobotinho e ajudaram a manter o projeto vivo! 💜</p>
        </div>
        <div className="logos">{sponsors.map(renderSponsor)}</div>
        <div className="prose">
          <p>Contribua também, <a href={'/donate'}>clique aqui</a>!</p>
        </div>
      </div>
    </Layout>
  );
};

export default Sponsors;
