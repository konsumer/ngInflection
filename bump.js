var fs = require('fs');
var exec = require('child_process').exec;

exports = function(file, cb){
  var pkg = JSON.parse(fs.readFileSync(file));
  var v = pkg.version.split('.');
  v[2]++;
  pkg.version = v.join('.');
  fs.writeFile(file, JSON.stringify(pkg,null,2), function(err){
    if (err) return cb(err);
    exec('git add -A && git commit -am "bump to v"' + pkg.version + ' && git tag v' + pkg.version + '&& git push --tags && git push', function(err, stdout, stderr){
      if (err) return cb(err);
      cb(null, pkg.version);
    });
  });
};

if (!module.parent) {
  var ver = exports(__dirname + '/package.json', function(err, version){
    if (err){
      console.error(err);
      process.exit(1);
    }
    console.log('\033[32m ↑ bumped to \033[39mv' + version);
  });
}