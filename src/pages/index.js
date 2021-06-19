import React, {useEffect} from 'react';

import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Layout from '@theme/Layout';


function Section({element = 'section', children, className, background = 'light',}) {
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

function ChatExample() {
  return (
    <Section className='ChatExample' background='tint'>
      <div className='content'>
        <div className={`TwoColumns`}>
          <div className={`column first left}`}>
            {
              <video
                muted
                autoPlay
                loop
                playsInline
                src={useBaseUrl(`img/homepage/chatexample.mp4`)}
              />
            }
          </div>
          <div className={`column last right`}>
            <h2 className='Heading'>Chat sempre ativo</h2>
            <p>
              Comandos divertidos e ferramentas úteis para seus seguidores!
            </p>
            <p>
              Lembretes, previsão do tempo, tradutor, calculadora,
              biscoitos da sorte, mini-rpg, pets, piadas
              e <a href={useBaseUrl(`help`)}>muito mais</a>!
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function AppList() {
  const {siteConfig} = useDocusaurusContext();
  const apps = siteConfig.customFields.users.filter(app => app.pinned);
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
        <h2 className='Heading'>Pela comunidade, para comunidade</h2>
        <div className={`TwoColumns`}>
          <div className={`column first left}`}>
            <p>
              O Bobotinho foi criado em abril de 2020,
              idealizado e mantido por <a href='https://twitch.tv/discretinho'>@discretinho</a>.
            </p>
            <p>Ele surgiu pela necessidade da comunidade, e suas funcionalidades sempre são originadas dela.</p>
            <p>O crescimento vem da contribuição, e agradeço por todos que contribuiram de alguma forma.</p>
          </div>
          <div className={`column last right`}>
            <p>O Bobotinho é usado em centenas de canais da Twitch, e você já o deve ter visto em um destes:</p>
            <AppList />
            <p>e <a href={useBaseUrl(`channels`)}>muito mais</a>.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function GetStarted() {
  return (
    <Section className='GetStarted' background='tint'>
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
        <meta property='og:title' content='Bobotinho | Seu bot da Twitch'/>
      </Head>
      <Header />
      <Features />
      {/* <ChatExample /> */}
      <Channels />
      <GetStarted />
    </Layout>
  );
};

export default Index;
