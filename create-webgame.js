#!/usr/bin/env node

const yeoman = require('yeoman-environment');
const env = yeoman.createEnv();

env.lookup(() => {
  env.run('webgame', {}, err => {
      if (err) {
          throw err;
      }
  });
});
