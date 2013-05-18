#!/bin/bash
 
# Invoke the Forever module (to START our Node.js server).
forever start -al /var/log/Aggregator/forever.log -ao /var/log/Aggregator/out.log -ae /var/log/Aggregator/err.log app.js
