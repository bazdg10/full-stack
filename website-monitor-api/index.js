const express = require('express');
const isUp = require('is-up');
const bodyParser = require('body-parser');
// import { floor } from require('mathjs');
const app = express();
app.use(bodyParser.json());

app.post('/register', (req, res) => {
    var name = req.body.name;
    var websiteUrl = req.body.websiteUrl;
    var frequency = req.body.frequency;

    if (!name||!websiteUrl||!frequency)
        res.status(400).send('enter all three fields: name, website url, frequency ');
    var interval = 1;
    //if (frequency.includes("hour")) {
    //    interval = 60;
    //}
    let frq = 0;
    let cfrq = 0;
    for ( var i=0; i<frequency.length; ) {
        
        if (frequency.charAt(i)<='0'&&frequency.charAt(i)>='9')
            {i++; continue; }
        while (frequency.charAt(i)>='0'&&frequency.charAt(i)<='9') {
            frq += (frequency.charAt(i)-'0');
            i++;    
        }
        break;
    }    
    if (interval==1) {
        if (frq>59) {
            cfrq = (Math.floor(frq/60))*(60*60*1000);
        } else {
            cfrq = frq*(1000);
        }
    } else {
        if (frq>24) {
            cfrq = 24*(60*60*1000);
        } else {
            cfrq = frq*(60*60*1000);
        }
    }

    var f = () => statusCheck();

    statusCheck = async () => {
        var active = await isUp(websiteUrl);
                            console.log(active);
                            f(); 
                        }           
    f();

});


const PORT = process.env.PORT || 3000
app.listen(PORT);
