import React from 'react';

import Layout from '@theme/Layout';

function Invite() {
    React.useEffect(() => {
        window.location.href = 'https://bobotinho-signup.herokuapp.com/invite';
    }, []);
    return (
        <Layout
          title="Convite"
          description="Adicione o Bobotinho no seu canal da Twitch">
        </Layout>
      );
}

export default Invite;
