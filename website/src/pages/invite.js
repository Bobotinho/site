import React from 'react';


function Invite() {
    React.useEffect(() => {
        window.location.href = 'https://bobotinho-notifier.herokuapp.com/invite';
    }, []);
    return (
        <Layout
          title="Convite"
          description="Adicione o Bobotinho no seu canal da Twitch">
        </Layout>
      );
}

export default Invite;
