import React from 'react';
import Layout from '@theme/Layout';

import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const renderSponsor = (sponsor, i) => {
  let infoLink = "https://twitch.tv/" + sponsor.name
  return (
    <div className="channels" key={i}>
      <div>
        <a href={infoLink}>{renderSponsorIcon(sponsor)}</a>
        <h3>{sponsor.name}</h3>
        {renderInfo(sponsor.infoTitle, infoLink)}
        {renderLabel(sponsor.label)}
      </div>
    </div>
  );
};

const renderSponsorIcon = sponsor => {
  let imgSource = useBaseUrl('img/sponsors/' + sponsor.icon);
  return <img src={imgSource} alt={sponsor.name} />;
};

const renderInfo = (title, uri) => {
  return uri ? <p className="info"><a href={uri} target="_blank">{title}</a></p> : null;
};

const renderLabel = (label) => {
  return label ? <p>{label}</p> : null;
};

const Sponsors = () => {
  const {siteConfig} = useDocusaurusContext();

  const showcaseApps = siteConfig.customFields.sponsors;
  const pinnedApps = showcaseApps.filter(sponsor => sponsor.pinned);
  const featuredApps = showcaseApps.filter(sponsor => !sponsor.pinned);
  const sponsors = pinnedApps.concat(featuredApps);
  sponsors.sort((a,b) => (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0))

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
