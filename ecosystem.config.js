module.exports = {
  apps: [{
    name: 'second_brain_server',
    script: 'index.js',
    cwd: __dirname,
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: '',
    instances: "1",
    autorestart: true,
    watch: false,
    exec_mode: 'fork',
    ignore_watch : ["node_modules"],
    max_memory_restart: '500M',
    env_production: {
      NODE_ENV: 'production',
    }
  }],

  deploy: {
    production: {
      key: '/Users/tung/.ssh/id_rsa',
      user: 'root',
      host: ['149.28.131.24'],
      ref: 'origin/master',
      repo: 'https://github.com/tungnt620/second_brain_server.git',
      path: '/data/second_brain_server',
      'post-deploy': 'yarn install && /root/.asdf/installs/nodejs/14.17.6/.npm/bin/pm2 reload ecosystem.config.js --env production'
    }
  }
}
