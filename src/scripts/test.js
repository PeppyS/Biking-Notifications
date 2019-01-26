require('dotenv').config()

import { handleStravaActivityFinished } from '../'

handleStravaActivityFinished(1806669608)
    .then(() => console.log('Done'))
    .catch((err) => console.log(err))
