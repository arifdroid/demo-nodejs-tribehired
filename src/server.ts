require('dotenv').config();

import api from './api';

// const PORT = process.env.PORT || 9091;
const PORT = 9091;




api.listen(PORT, ()=>{
    console.log(`listening on port: ${PORT}`)
})


