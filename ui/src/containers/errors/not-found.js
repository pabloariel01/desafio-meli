import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

const NotFound=()=>{
    const history = useHistory()

    useEffect(() => {
        history.push('/');
      }, [history]);
    
      return(<div></div>)
}

export default NotFound;