import React from 'react';


function Invite() {
    React.useEffect(() => {
        window.location.href = 'https://bobotinho-load-balancer.herokuapp.com/invite';
    }, []);
    return null;
}

export default Invite;
