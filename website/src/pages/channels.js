import React from 'react';
import Layout from '@theme/Layout';

import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const renderApp = (app, i) => {
  return (
    <div className="channels" key={i}>
      <div>
        <a href={app.infoLink}>{renderAppIcon(app)}</a>
        <h3>{app.name}</h3>
        {renderInfo(app.infoTitle, app.infoLink)}
      </div>
    </div>
  );
};

const renderAppIcon = app => {
  let imgSource = app.icon;
  if (!app.icon.startsWith('http')) {
    imgSource = useBaseUrl('img/channels/' + app.icon);
  }
  return <img src={imgSource} alt={app.name} />;
};

const renderInfo = (title, uri) => {
  return uri ? <p className="info"><a href={uri} target="_blank">{title}</a></p> : null;
};

const Channels = () => {
  const {siteConfig} = useDocusaurusContext();

  const showcaseApps = siteConfig.customFields.users;
  const pinnedApps = showcaseApps.filter(app => app.pinned);
  const featuredApps = showcaseApps.filter(app => !app.pinned);
  const apps = pinnedApps.concat(featuredApps);

  return (
    <Layout
      title="Quem está usando o Bobotinho?"
      description="Centenas de canais da Twitch estão usando o Bobotinho, confira essa lista!">
      <div className="showcaseSection">
        <div className="prose">
          <h1>Quem está usando o Bobotinho?</h1>
          <p>
            Centenas de canais da Twitch estão usando o Bobotinho, desde canais pequenos que estão iniciando até comunidades grandes e já reconhecidas na plataforma. Confira essa lista!
          </p>
        </div>
        <div className="logos">{apps.map(renderApp)}</div>
      </div>
    </Layout>
  );
};

export default Channels;
