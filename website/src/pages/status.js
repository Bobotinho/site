import React from 'react';

import Layout from '@theme/Layout';

function Status() {
    React.useEffect(() => {
        window.location.href = 'https://stats.uptimerobot.com/EQQpJSWDE5';
    }, []);
    return (
        <Layout
          title="Status"
          description="Veja os status dos softwares do Bobotinho">
        </Layout>
      );;
}

export default Status;
