import React, { useEffect } from 'react';

import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Timeline } from 'react-twitter-widgets'

import Layout from '@theme/Layout';


function Section({ element = 'section', children, className, background = 'light', }) {
  const El = element;
  return <El className={`Section ${className} ${background}`}>{children}</El>;
}

function Header() {
  return (
    <Section className='Header' background='light'>
      <h1 className='title' align='center'>Bobotinho</h1>
      <p className='tagline' align='center'>Melhore a experiência do seu chat off-stream</p>
      <div className='buttons' align='center'>
        <a className='ActionButton white' href={useBaseUrl(`invite`)} target='_self'>Adicionar</a>
      </div>
    </Section>
  );
}

function Features() {
  return (
    <Section className='Features' background='tint'>
      <div className='content'>
        <div className={`ThreeColumns`}>
          <div className={`column first}`}>
            <img src='img/homepage/up.svg' />
            <h2 className='Heading' align='center'>Engaje sua comunidade</h2>
            <p>Ofereça entretenimento e interação entre os usuários do seu chat mesmo quando sua stream estiver offline!</p>
          </div>
          <div className={`column middle}`}>
            <img src='img/homepage/click.svg' />
            <h2 className='Heading' align='center'>Adicione rapidamente</h2>
            <p>Solicite usando sua conta da Twitch! Com 2 cliques, o Bobotinho estará no seu chat em até 60 segundos.</p>
          </div>
          <div className={`column last}`}>
            <img src='img/homepage/cloud.svg' />
            <h2 className='Heading' align='center'>Sempre online</h2>
            <p>Hospedado em um servidor dedicado, o Bobotinho está disponível a todo momento do dia, noite ou madrugada!</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function AppList() {
  const { siteConfig } = useDocusaurusContext();
  const apps = siteConfig.customFields.channels.filter(app => app.pinned);
  return (
    <ul className='AppList'>
      {apps.map((app, i) => {
        const imgSource = app.icon.startsWith('http') ? app.icon : useBaseUrl('img/channels/' + app.icon);
        return (
          <li key={i} className='item'>
            <a href={app.infoLink}><img src={imgSource} alt={app.name} /></a>
          </li>
        );
      })}
    </ul>
  );
}

function Channels() {
  return (
    <Section className='Channels' background='light'>
      <div className='content'>
        <h2 className='Heading'>Para todo tipo de canal</h2>
        <div className={`OneColumn`}>
          <div className={`column first}`}>
            <p>O Bobotinho está em centenas de canais da Twitch, dentre eles:</p>
            <AppList />
            <p>E <a href={useBaseUrl(`channels`)}>muitos outros</a>.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function SponsorsList() {
  const { siteConfig } = useDocusaurusContext();
  const sponsors = siteConfig.customFields.sponsors.filter(sponsor => sponsor.pinned);
  sponsors.sort((a,b) => (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0))
  return (
    <ul className='SponsorList'>
      {sponsors.map((sponsor, i) => {
        const infoLink = "https://twitch.tv/" + sponsor.name
        const imgSource = useBaseUrl('img/sponsors/' + sponsor.icon);
        return (
          <li key={i} className='item'>
            <a href={infoLink}><img src={imgSource} alt={sponsor.name} /></a>
          </li>
        );
      })}
    </ul>
  );
}

function Sponsors() {
  return (
    <Section className='Sponsors' background='tint'>
      <div className='content'>
        <h2 className='Heading'>Pela comunidade, para comunidade</h2>
        <div className={`TwoColumns`}>
          <div className={`column first left}`}>
            <p>
              O Bobotinho foi criado em abril de 2020,
              idealizado e mantido por <a href='https://github.com/leandcesar'>@leandcesar</a>.
            </p>
            <p>Ele surgiu pela necessidade da comunidade, e suas funcionalidades sempre são originadas dela.</p>    
            <p>O crescimento vem da contribuição, e agradeço a todos que contribuiram de alguma forma.</p>
            <p>E um agradecimento especial aos <a href='/sponsors'>apoiadores</a>! 💜</p>
          </div>
          <div className={`column last right`}>
            <SponsorsList />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Discord() {
  return (
    <Section className='Widget' background='light'>
      <div className='content'>
        <h2 className='Heading'>Suporte e dúvidas</h2>
        <div className={`TwoColumns`}>
          <div className={`column first left}`}>
            <p>
              Seja uma dúvida, uma sugestão ou um problema relacionado ao Bobotinho,
              você com certeza será respondido se utilizar o <a href={'https://discord.gg/6Ue66Vs5eQ'}>servidor do Discord</a>.
            </p>
            <p>
              Você também poderá acompanhar quais funcionalidades estão sendo implementadas
              e o que está sendo planejado para o futuro.
            </p>
          </div>
          <div className={`column last right`}>
            <p>
              <iframe src='https://discord.com/widget?id=785177386638901250&theme=dark' width='100%' height='225' allowtransparency='true' frameborder='0' sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'></iframe>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Twitter() {
  return (
    <Section className='Widget' background='tint'>
      <div className='content'>
        <h2 className='Heading'>Interação e memes</h2>
        <div className={`TwoColumns`}>
          <div className={`column first left}`}>
            <p>
              O Bobotinho também está presente no <a href={'https://twitter.com/bobotinho'}>Twitter</a>,
              de olho nas publicações com relação a ele! Seja uma piada, uma menção ou alguma informação,
              você encontrará tudo lá!
            </p>
            <p>
              Sempre que há uma grande novidade, ela também é publicada lá. Então siga para não perder nada!
            </p>
          </div>
          <div className={`column last right`}>
            <p>
              <Timeline
                dataSource={{sourceType: 'profile', screenName: 'bobotinho'}}
                options={{height: '225'}}
              />
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function GetStarted() {
  return (
    <Section className='GetStarted' background='light'>
      <div className='content'>
        <h2 className='Heading'>Está esperando o quê?</h2>
        <p>Sem senhas, sem formulários, sem enrolações!</p>
        <div className='buttons' align='center'>
          <a className='ActionButton brand' href={useBaseUrl(`invite`)} target='_self'>Adicionar</a>
        </div>
      </div>
    </Section>
  );
}

const Index = () => {
  return (
    <Layout
      description='Chatbot para engajamento e entretenimento da Twitch brasileira'
      wrapperClassName='homepage'>
      <Head>
        <title>Bobotinho | Seu bot da Twitch</title>
        <meta property='og:title' content='Bobotinho | Seu bot da Twitch' />
      </Head>
      <Header />
      <Features />
      <Channels />
      <Sponsors />
      <Discord />
      <Twitter />
      <GetStarted />
    </Layout>
  );
};

export default Index;
